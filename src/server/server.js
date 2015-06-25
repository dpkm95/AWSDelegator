
billingAttributes = ['RateId', 'ProductName', 'UsageType', 'Operation', 'AvailabilityZone', 'ItemDescription',
    'UsageStartDate', 'UsageQuantity', 'Rate', 'Cost', 'user:Volume Id', 'user:Name', 'user:Email', 'ResourceId'];
numericAttirbutes = ['RateId', 'UsageQuantity', 'Rate', 'Cost'];
ec2Metric = ['NetworkIn','NetworkOut','CPUUtilization'];
ec2MetricUnit = ['Bytes','Bytes','Percent'];
rdsMetric = ['CPUUtilization','DatabaseConnections','DiskQueueDepth','ReadIOPS','WriteIOPS'];
rdsMetricUnit = ['Percent','Count','Count','Count/Second','Count/Second'];

AWS = require('aws-sdk');
mongoose = require('mongoose');
MongoClient = require('mongodb').MongoClient;
Schema = mongoose.Schema;
var express = require('express');
var app = express();
port = process.env.PORT || 3000;
app.use(require('./CORS'));
require('./config.js');

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
    require('./model/billing');
    require('./BoxPricingCheck').getPricing(function(){
        require('./parse/scheduler').s3Connect();
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

app.get('/api/billing/calcTotalCost',require('./route/billingRoute').calcTotalCost);

app.get('/api/billing/rds/instanceCostAll', require('./route/rdsBillingRoute').instanceCostAll);
app.get('/api/billing/rds/hourlyCostProduct', require('./route/rdsBillingRoute').hourlyCostProduct);

app.get('/api/NonFreeBilling/hourlyCostProduct', require('./route/NonFreeBillingRoute').hourlyCostProduct);
app.get('/api/NonFreeBilling/instanceCostAll', require('./route/NonFreeBillingRoute').instanceCostAll);
app.get('/api/NonFreeBilling/calcFreeTierCost', require('./route/NonFreeBillingRoute').calcFreeTierCost);
app.get('/api/NonFreeBilling/totalCostProduct',require('./route/NonFreeBillingRoute').totalCostProduct);

app.get('/api/statistics/operations',require('./route/OperationsRoute').operations);

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
