exports.setConfiguration = function(req, res) {
  req.on('data', function(chunk) {
    var value,
      key,
      oldIndex;
    var data;
    var credentials = [];
    var regions = [];
    var i = 0;
    var input = chunk.toString();
    var index = 0;
    //PARSE workaround. It works, but it ain't pretty.
    do {
      key = input.substring(index, input.indexOf('=', index));
      value = input.substring(input.indexOf('=', index) + 1, input.indexOf('&', index));
      //To take care of last key: value pair
      if (index > input.lastIndexOf('&')) {
        value = input.substring(input.lastIndexOf('=') + 1, input.lastIndexOf(''));
        credentials[key] = value;
        break;
      }
      oldIndex = index;
      index = input.indexOf('&', oldIndex) + 1;
      if (key == "AWS_Regions") {
        regions[i] = value;
        i = i + 1;
      } else {
        credentials[key] = value;
      }
    }
    while (input.indexOf('=', index) != -1 && index != 0);
    if (credentials["S3_Region"] == undefined || credentials["S3_Region"] == []) {
      return;
    }
    if (isNaN(credentials["Credits"])) {
      return;
    }
    credits = credentials["Credits"];
    s3Region = credentials['S3_Region'];
    awsRegions = regions;
  });
  req.on('end', function() {
    res.redirect(302, '../');
    res.end();
  });
}

exports.setBalance = function(req, res) {
    if (creditExp == undefined) {
      credits = req.body["balance"];
    } else {
      var expD = creditExp.substr(8, 2);
      var expM = creditExp.substr(5, 2);
      expM = expM - 1;
      var expY = creditExp.substr(0, 4);
      var exp = new Date(expY, expM, expD).toUTCString();
      var nowD = new Date().getDate();
      var nowM = new Date().getMonth();
      var nowY = new Date().getFullYear();
      var now = new Date(nowY, nowM, nowD).toUTCString();
      if (nowY < expY || nowY <= expY && nowM < expM || nowY <= expY && nowM <= expM && nowD < expD) {
        credits = req.body["balance"];
        console.log("Credits Good!");
      } else {
        console.log("Credits Have Expired!");
        credits = "EXPIRED";
      }
    }
  }

exports.setExpiration = function(req, res) {
  creditExp = req.body["expiration"];
}

exports.setCreditsUsed = function(req) {
  creditsUsed = req.body["used"];
}

exports.setCredits = function(req, res) {
  credits = req.body;
}

exports.getAccountBalance = function(req, res) {
  return credits;
}

exports.getCreditsUsed = function(req, res) {
  return creditsUsed;
}

exports.getExpiration = function(req, res) {
  var data = {
      date: [{
        "day": creditExp.substr(8, 2),
        "month": Number(creditExp.substr(5, 2)) - 1,
        "year": creditExp.substr(0, 4),
      }]
    }
  return (data);
}

exports.getConfiguration = function(req, res) {
  var data = {
    account: [{
      "Number": awsAccountNumber,
      "Balance": credits,
      "S3BucketRegion": s3Region,
      "Regions": awsRegions,
      "S3BucketName": s3Bucket,
      "DB_URL": databaseUrl,
      "BalanceExp": creditExp
    }]
  };
  res.send(data);
}

exports.getAccountNumber = function(req, res) {
  res.sendStatus(awsAccountNumber);
}

exports.getS3Region = function(req, res) {
  res.sendStatus(s3Region);
}

exports.getAWSRegion = function(req, res) {
  res.sendStatus(awsRegions);
}
