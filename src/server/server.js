databaseUrl = 'mongodb://localhost:27017/awsdb';
AWS = require('aws-sdk');
mongoose = require('mongoose');
MongoClient = require('mongodb').MongoClient;
Schema = mongoose.Schema;
billingAttributes = ['RateId', 'ProductName', 'UsageType', 'Operation', 'AvailabilityZone', 'ItemDescription',
    'UsageStartDate', 'UsageQuantity', 'Rate', 'Cost', 'user:Volume Id', 'user:Name', 'user:Email', 'ResourceId'];
numericAttirbutes = ['RateId', 'UsageQuantity', 'Rate', 'Cost'];
ec2Metric = ['NetworkIn','NetworkOut','CPUUtilization'];
ec2MetricUnit = ['Bytes','Bytes','Percent'];
rdsMetric = ['CPUUtilization','DatabaseConnections','DiskQueueDepth','ReadIOPS','WriteIOPS'];
rdsMetricUnit = ['Percent','Count','Count','Count/Second','Count/Second'];
awsAccountNumber = 092841396837;
rdsRegion = 'us-east-1';
s3Region = 'us-east-1';
s3Bucket = 'csvcontainer';
awsRegions = ['us-west-1', 'us-west-2', 'us-east-1'];

currentBillingCollection = "";
awsCredentials = {
    default: new AWS.SharedIniFileCredentials({
        profile: 'default'
    }),
    dev2: new AWS.SharedIniFileCredentials({
        profile: 'dev2'
    })
};
var express = require('express');
var app = express();
port = process.env.PORT || 3000;
app.use(require('./CORS'));

//Instantiate mongoose schemas

// Start mongoose and mongo
mongoose.connect(databaseUrl, function(error) {
    if (error) {
        console.log(error);
    }
});
var db = mongoose.connection;
db.on("open", function() {
    require('./model/ec2');
    require('./model/rds');
    require('./model/latest');
    require('./model/pricing');
    mongoose.model('latest').find({},function(e,d){
        //get currentBillingCollection from 'latest' collection
        if(e) throw e;
        //time: yyyy-mm-dd hh:mm:ss
        var latestTime = d[0].time;
        latestTime.substring(0,latestTime.indexOf(' '));
        var time=latestTime.split('-');
        currentBillingCollection = 'bills'+time[0]+time[1];
        require('./model/billing');
        require('./BoxPricingCheck').getPricing(function(){
            require('./parse/scheduler').s3Connect();
        });
    });
});

app.get('/api/ec2/instances', require('./route/ec2Route').instances);
app.get('/api/ec2/metrics', require('./route/ec2Route').metrics);
app.get('/api/ec2/operations', require('./route/ec2Route').operations);

app.get('/api/rds/instances', require('./route/rdsRoute').instances);
app.get('/api/rds/metrics', require('./route/rdsRoute').metrics);
app.get('/api/rds/operations', require('./route/rdsRoute').operations);

app.get('/api/billing/hourlyCostProduct', require('./route/billingRoute').hourlyCostProduct);
app.get('/api/billing/instanceCostAll', require('./route/billingRoute').instanceCostAll);
app.get('/api/billing/calcFreeTierCost', require('./route/billingRoute').calcFreeTierCost);
app.get('/api/billing/totalCostProduct',require('./route/billingRoute').totalCostProduct);
app.get('/api/billing/rds/instanceCostAll', require('./route/rdsBillingRoute').instanceCostAll);
app.get('/api/billing/rds/hourlyCostProduct', require('./route/rdsBillingRoute').hourlyCostProduct);

app.get('/api/NonFreeBilling/hourlyCostProduct', require('./route/NonFreeBillingRoute').hourlyCostProduct);
app.get('/api/NonFreeBilling/instanceCostAll', require('./route/NonFreeBillingRoute').instanceCostAll);
app.get('/api/NonFreeBilling/calcFreeTierCost', require('./route/NonFreeBillingRoute').calcFreeTierCost);
app.get('/api/NonFreeBilling/totalCostProduct',require('./route/NonFreeBillingRoute').totalCostProduct);

app.get('/api/statistics/ec2/operations',require('./route/OperationsRoute').operations);
app.get('/api/statistics/rds/operations',require('./route/OperationsRoute').operations);

function errorHandler(err, req, res, next) {
    console.error(err.message);
    console.error(err.stack);
    res.status(500);
    res.render('error_template', {
        error: err
    });
}
module.exports = errorHandler;
app.listen(port);
console.log('Server Alert: server started on port %s', port);