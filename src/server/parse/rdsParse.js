exports.parseInstances = function(callback) {
    console.log("Parse Alert(rds): Instance parsing initiated");
    MongoClient.connect(databaseUrl, function(err, db) {
        if (err) throw err;
        db.collections(function(err, collections) {
            mongoose.model('rdsInstances').find().exec(function(err, userInstances) {
                if (err) throw err;
                var regionIteratorIndex = 0;
                var newInstanceCount = 0;
                var controller1 = function() {
                    iterator1(function() {
                        regionIteratorIndex++;
                        if (regionIteratorIndex < awsRegions.length) {
                            controller1();
                        } else {
                            console.log("Parse Alert(rds): found ",newInstanceCount," new instance/s");
                            callback();
                        }
                    });
                }
                var iterator1 = function(callback) {
                    console.log('Parse Alert(rds): parsing instances in ', awsRegions[regionIteratorIndex]);
                    var rds = new AWS.RDS({
                        region: awsRegions[regionIteratorIndex]
                    });
                    rds.describeDBInstances({}, function(err, data) {
                        if (err) throw err;
                        for (var r in data.DBInstances) {
       
                            var newInstance = true;
                            if(isNewInstance(userInstances, data.DBInstances[r].DBInstanceIdentifier)){
                                var doc = {
                                    DBInstanceIdentifier: data.DBInstances[r].DBInstanceIdentifier,
                                    DBInstanceClass: data.DBInstances[r].DBInstanceClass,
                                    Engine: data.DBInstances[r].Engine,
                                    DBInstanceStatus: data.DBInstances[r].DBInstanceStatus,
                                    MasterUsername: data.DBInstances[r].MasterUsername,
                                    DBName: data.DBInstances[r].DBName,
                                    Endpoint: data.DBInstances[r].Endpoint.Address+":"+data.DBInstances[r].Endpoint.Port,
                                    AllocatedStorage: data.DBInstances[r].AllocatedStorage,
                                    InstanceCreateTime: data.DBInstances[r].InstanceCreateTime,
                                    AvailabilityZone: data.DBInstances[r].AvailabilityZone,
                                    MultiAZ: data.DBInstances[r].MultiAZ,
                                    StorageType: data.DBInstances[r].StorageType
                                };
                                newInstanceCount += 1;
                                db.collection('rdsInstances').insert(doc);
                            }          
                        }
                        callback();
                    });
                }
                controller1();
            });
        });
    });
}

exports.parseMetrics = function(masterCallback) {
    console.log("Parse Alert(rds): Metrics parsing initiated");
    MongoClient.connect(databaseUrl, function(err, db) {
        if (err) throw err;
        mongoose.model('rdsInstances').find({
            DBInstanceStatus: 'available',
        }).exec(function(err, availableInstances) {
            index1 = 0;
            var currentDate = new Date();
            var currentTime = currentDate.getTime();
            var currentTimeIso = new Date(currentTime).toISOString();           
            var params = {
                EndTime: 0,
                MetricName: '',
                Namespace: 'AWS/RDS',
                Period: 3600,
                StartTime: 0,
                Statistics: ['Average'],
                Dimensions: [{
                    Name: 'DBInstanceIdentifier',
                    Value: ''
                }, ],
                Unit: ''
            };
            var controller1 = function(arr) {
                iterator1(arr[index1], function() {
                    index1++;
                    if (index1 < arr.length) controller1(arr);
                    else{
                        db.close(); 
                        masterCallback();
                    }
                });
            }
            var iterator1 = function(instance, callback) {
                var instanceRegion = availableInstances[index1].AvailabilityZone;
                AWS.config.region = instanceRegion.substring(0,instanceRegion.length-1);
                var cloudwatch = new AWS.CloudWatch();
                var doc = {
                    DBInstanceIdentifier: availableInstances[index1].DBInstanceIdentifier,
                    CPUUtilization: 0,
                    DatabaseConnections: 0,
                    DiskQueueDepth: 0,
                    ReadIOPS: 0,
                    WriteIOPS: 0,
                    Time: currentTimeIso
                };
                var index2 = 0;
                var controller2 = function(){
                    iterator2(function(){
                        index2++;
                        if(index2 < rdsMetric.length) controller2();
                        else{
                            db.collection('rdsMetrics').insert(doc);
                            callback();
                        }
                    });
                };
                var iterator2 = function(_callback){
                    params.Dimensions[0].Value = doc.DBInstanceIdentifier;
                    params.StartTime = new Date(currentTime-3600*1000).toISOString();
                    params.EndTime = currentTimeIso;                
                    params.MetricName = rdsMetric[index2];
                    params.Unit = rdsMetricUnit[index2];
                    cloudwatch.getMetricStatistics(params, function(err, data) {
                        if(err) throw err;
                        doc[rdsMetric[index2]] = data.Datapoints[0].Average;
                        _callback();
                    });  
                };
                controller2();
            }           
            if (availableInstances.length != 0) {
                controller1(availableInstances);
            } else {
                db.close();
                masterCallback();
            }
        });
    });
}

var isNewInstance = function(userInstances, instanceId) {
    for (var i in userInstances) {
        if (userInstances[i].DBInstanceIdentifier == instanceId) {
            return false;
        }
    }
    return true;
}