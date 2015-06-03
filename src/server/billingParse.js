var fs=require("fs");
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var databaseUrl = 'mongodb://localhost:27017/awsdb'; // "username:password@example.com/mydb"
var collections = ["bills"];

exports.parseBillingCSV = function () {
    MongoClient.connect(databaseUrl, collections, function (err, db) {
    if (err) {
        console.log('Unable to connect to the mongoDB server. Error:', err);
    } else {
        console.log('Connection established to ', databaseUrl);    

        var MongoClient = require('mongodb').MongoClient;
        MongoClient.connect(databaseUrl, function(err, db) {
            if(err) throw err;   
            db.collections(function(err, collections){
                var re = /latest/g;
                var flag = 0;
                for(var i in collections){
                    if(re.exec(collections[i]['namespace'])){
                        flag = 1;
                    }
                }   
                if(flag==0) db.collection('latest').save({time:"2010:01:01 00:00:00"});

                db.collection('latest').findOne(function(err,latest){
                    fs.readFile(process.cwd()+'/data/latestBills.csv',"utf8",function(error,text){
                        if(error) throw error;
                        var lines=text.split("\n");
                        var header = lines[0].split(',');                                                       
                        var properties = ['ProductName','UsageQuantity','Cost','ResourceId','UsageStartDate','user:Volume Id'];
                        var index = [];
                        for(var i=0;i<header.length;++i)header[i] = header[i].replace(/"/g,"");                                                                            
                        for(var i=0;i<properties.length;++i)index.push(header.indexOf(properties[i]));
                        /*
                        *   i=0 is header
                        */
                        for(var i=1;i<lines.length;++i){
                            bill=lines[i].split(",");
                            if(bill[index[properties.indexOf('UsageQuantity')]]!=""){
                                console.log(bill[index[properties.indexOf('UsageStartDate')]], latest.time);
                                if(bill[index[properties.indexOf('UsageStartDate')]] > latest.time){
                                    var tuple = {};
                                    tuple[properties[0]]=bill[index[0]].replace(/"/g,"");
                                    for(var j=1;j<properties.length;++j){
                                        if(bill[index[j]]===""){
                                            tuple[properties[j]]="";
                                        }else{
                                            tuple[properties[j]]=bill[index[j]].replace(/"/g,"");
                                        }                                    
                                    }
                                    console.log(tuple);
                                    db.collection('bills').insert(tuple);                                
                                    db.collection('latest').update({_id:latest._id},{time:bill[index[properties.indexOf('UsageStartDate')]].replace(/"/g,"")});
                                }
                            }                            
                        }
                    });
                });
            }); 
        });        
    }});
};