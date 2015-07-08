(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['AWSMonthlyCostView'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div id=\"awsmonthlycostcontainer\"> testtesttest</div>\n\n";
  },"useData":true});
templates['AWSOperationsView'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div id=\"awsoperationscontainer\"> </div>";
  },"useData":true});
templates['AWSView'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "";
},"useData":true});
templates['AppView'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"content-view\"> </div>\n";
  },"useData":true});
templates['BudgetView'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "\n<!-- Modal -->\n<div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n	<div class=\"modal-dialog\">\n\n		<!-- Modal content-->\n		<div class=\"modal-content\">\n			<div class=\"modal-header\">\n				<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n				<h4 class=\"modal-title\">Create Budget Profile</h4>\n			</div>\n			<div class=\"modal-body\">\n				<div class=\"insetting\"> \n					<div class=\"incontainer\">\n						<label class=\"budget-label\">Name </label>\n						<input type=\"text\" id=\"\" value=\"e.g., 'Monthly EC2 Budget'\">\n					</div>\n				</div>\n\n\n				<div class=\"insetting\"> \n					<div class=\"incontainer\">\n						<label class=\"budget-label\">Include costs related to </label>\n						<select>\n							<option value=\"\" disabled selected>Select</option>\n							<option value=\"1\">Option 1</option>\n							<option value=\"2\">Option 2</option>\n							<option value=\"3\">Option 3</option>\n						</select>\n					</div>\n				</div>\n\n				<div class=\"insetting\"> \n					<div class=\"incontainer\">\n						<label class=\"budget-label\">Start date </label>\n						<input type=\"text\" id=\"\" value=\"2015-10-31\">\n					</div>\n				</div>\n\n				<div class=\"insetting\"> \n					<div class=\"incontainer\">\n						<label class=\"budget-label\">End date </label>\n						<input type=\"text\" id=\"\" value=\"2015-10-31\">\n					</div>\n				</div>\n\n				<div class=\"insetting\"> \n					<div class=\"incontainer\">\n						<label class=\"budget-label\">Monthly Amount </label>\n						<input type=\"text\" id=\"\" value=\"USD\">\n					</div>\n				</div>\n\n\n				<div class=\"insetting\"> \n					<div class=\"incontainer\">\n						<label class=\"budget-label\">Stop resource(s) when quota reached </label>\n						<div class=\"onoffswitch\">\n							<input type=\"checkbox\" name=\"onoffswitch\" class=\"onoffswitch-checkbox\" id=\"myonoffswitch\" checked>\n							<label class=\"onoffswitch-label\" for=\"myonoffswitch\">\n								<span class=\"onoffswitch-inner\"></span>\n								<span class=\"onoffswitch-switch\"></span>\n							</label>\n						</div>\n					</div>\n				</div>\n			</div>\n			<div class=\"modal-footer\">\n				<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Save</button>\n				<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n			</div>\n		</div>\n\n	</div>\n</div>\n\n\n\n";
},"useData":true});
templates['ConfigurationView'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, (depth0 != null ? depth0.title : depth0), "==", "Account Number", {"name":"ifCond","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, (depth0 != null ? depth0.title : depth0), "==", "RDS Region", {"name":"ifCond","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, (depth0 != null ? depth0.title : depth0), "==", "S3 Region", {"name":"ifCond","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, (depth0 != null ? depth0.title : depth0), "==", "AWS Regions", {"name":"ifCond","hash":{},"fn":this.program(8, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, (depth0 != null ? depth0.title : depth0), "==", "Credits", {"name":"ifCond","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n";
},"2":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "					<div type=\"text\" id=\"account\" value=\"\"></div>\n						"
    + escapeExpression(lambda((depth0 != null ? depth0.title : depth0), depth0))
    + ":\n						<h3><div id = \"div1\"></div></h3>\n						<hr>\n";
},"4":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "						"
    + escapeExpression(lambda((depth0 != null ? depth0.title : depth0), depth0))
    + "\n						<br> \n						<input type=\"radio\" id = \"rdsWest1\" name='RDS_Region' value=\"us-west-1\"/><label for=\"rdsWest1\">us-west-1</label>\n						<input type=\"radio\" id = \"rdsWest2\" name='RDS_Region' value=\"us-west-2\"/><label for=\"rdsWest2\">us-west-2</label>\n						<input type=\"radio\" id = \"rdsEast1\" name='RDS_Region' value=\"us-east-1\"/><label for=\"rdsEast1\">us-east-1</label>\n						<script type = \"text/javascript\">\n							$(document).ready(function(){\n									$.get('/getRDSRegion', function(data){\n										console.log(\"RDS\",data);\n										if(\"us-west-1\" == data|| \"rdsWest1\"==data){\n											document.getElementById(\"rdsWest1\").checked = true;\n										}\n										else if(\"us-west-2\" == data|| \"rdsWest2\"==data){\n											document.getElementById(\"rdsWest2\").checked = true;\n										}\n										else if(\"us-east-1\" == data|| \"rdsEast1\"==data){\n											document.getElementById(\"rdsEast1\").checked = true;\n										}\n									});\n								});\n						</script>\n						<hr>\n";
},"6":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "						"
    + escapeExpression(lambda((depth0 != null ? depth0.title : depth0), depth0))
    + "\n						<br>\n						<input type=\"radio\" id=\"s3West1\" name='S3_Region' value=\"us-west-1\"/><label for=\"s3West1\">us-west-1</label>\n						<input type=\"radio\" id=\"s3West2\" name='S3_Region' value=\"us-west-2\"/><label for=\"s3West2\">us-west-2</label>\n						<input type=\"radio\" id=\"s3East1\" name='S3_Region' value=\"us-east-1\"/><label for=\"s3East1\">us-east-1</label>\n						<script type = \"text/javascript\">\n							$(document).ready(function(){\n									$.get('/getS3Region', function(data){\n										console.log(\"S3\",data);\n										if(\"us-west-1\" == data|| \"s3West1\" == data){\n											document.getElementById(\"s3West1\").checked = true;\n										}\n										else if(\"us-west-2\" == data || \"s3West2\" == data){\n											document.getElementById(\"s3West2\").checked = true;\n										}\n										else if(\"us-east-1\" == data || \"s3East1\" == data){\n											document.getElementById(\"s3East1\").checked = true;\n										}\n									});\n								});\n						</script>\n						<hr>\n";
},"8":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "						"
    + escapeExpression(lambda((depth0 != null ? depth0.title : depth0), depth0))
    + "\n						<br> \n						<input type=\"checkbox\" id = \"awsWest1\" name='AWS_Regions' value=\"us-west-1\"/><label for=\"awsWest1\">us-west-1</label>\n						<input type=\"checkbox\" id = \"awsWest2\" name='AWS_Regions' value=\"us-west-2\"/><label for=\"awsWest2\">us-west-2</label>\n						<input type=\"checkbox\" id = \"awsEast1\" name='AWS_Regions' value=\"us-east-1\"/><label for=\"awsEast1\">us-east-1</label>\n						<script type = \"text/javascript\">\n							$(document).ready(function(){\n									$.get('/getAWSRegion', function(data){\n										console.log(\"AWS\",data);\n										if(data.indexOf('us-west-1')!=-1){\n											document.getElementById('awsWest1').checked = true;\n										}\n										if(data.indexOf('us-west-2')!=-1){\n											document.getElementById('awsWest2').checked = true;\n										}\n										if(data.indexOf('us-east-1')!=-1){\n											document.getElementById('awsEast1').checked = true;\n										}\n									});\n								});\n						</script>\n						<hr>\n";
},"10":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "						"
    + escapeExpression(lambda((depth0 != null ? depth0.title : depth0), depth0))
    + "<br> \n						<input type=\"text\" name=\"Credits\" id=\"myCredits\">\n							<script type = \"text/javascript\">\n								$(document).ready(function(){\n									$.get('/getAccountBalance', function(data){\n										var elem = document.getElementById(\"myCredits\");\n										elem.value =data; \n									});\n								});\n							</script>\n						<br>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<html>\n	<head>\n		<title>Credential Input</title>\n		<script type=\"text/javascript\">\n			$(document).ready(function(){\n				$.get('/getAccount', function(data){\n					$(\"#div1\").append(data);\n				});\n			});\n			// $(document).ready(function(){\n			// 	$.get('/getAccount', function(data){\n		// var rds= /getRDSRegion\n		// var s3 = getS3Region\n		// var regions= getAWSRegion\n		</script>\n	\n	</head>\n	<body>\n		<div class=\"slider\">\n			<form id=\"credentials\" action=\"/setCredentials\" method=\"post\">\n				<div>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.pages : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "				<br>\n				<hr>\n				<input type=\"submit\" value=\"Save\">\n			</form>\n		</div>\n\n	</body>\n</html>\n\n";
},"useData":true});
templates['EC2BillingView'] = template({"1":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "			<tr class=\"tablesorter-body\">\n				<td>"
    + escapeExpression(lambda((depth0 != null ? depth0.resourceId : depth0), depth0))
    + "</td>\n				<td>"
    + escapeExpression(lambda((depth0 != null ? depth0.cost : depth0), depth0))
    + "</td>\n				<td>"
    + escapeExpression(lambda((depth0 != null ? depth0.volumeId : depth0), depth0))
    + "</td>\n				<td>"
    + escapeExpression(lambda((depth0 != null ? depth0.date : depth0), depth0))
    + "</td>					\n			</tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div id=\"billingcontainer\"></div>\n\n<!-- <div>\n	<table id=\"BillingTable\" class=\"tablesorter-metro\" cellspacing=\"1\">\n		<thead>\n			<tr class=\"dark-row\" role=\"row\">\n\n				<th class=\"tablesorter-header\" data-column=\"2\" unselectable=\"on\">\n					<div class=\"tablesorter-header-inner\">Resource ID</div>\n				</th>\n				<th class=\"tablesorter-header\" data-column=\"0\" unselectable=\"on\">\n					<div id=\"time\" class=\"tablesorter-header-inner\">Cost</div>\n				</th>\n				<th class=\"tablesorter-header\" data-column=\"1\" unselectable=\"on\">\n					<div class=\"tablesorter-header-inner\">VolumeId</div>\n				</th>\n						<th class=\"tablesorter-header\" data-column=\"3\" unselectable=\"on\">\n					<div class=\"tablesorter-header-inner\">Date</div>\n				</th>\n			</tr>\n			</tr>\n		</thead>\n		<tbody id=\"billingData\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.billing : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "		</tbody>	\n	</table>\n</div> -->\n\n\n\n\n\n";
},"useData":true});
templates['EC2CostView'] = template({"1":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "			<tr class=\"tablesorter-body\">\n				<td>"
    + escapeExpression(lambda((depth0 != null ? depth0.productName : depth0), depth0))
    + "</td>\n				<td>"
    + escapeExpression(lambda((depth0 != null ? depth0.cost : depth0), depth0))
    + "</td>				\n			</tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div id=\"ec2CostContainer\"></div>\n\n<!-- <div>\n	<table id=\"BillingTable\" class=\"tablesorter-metro\" cellspacing=\"1\">\n		<thead>\n			<tr class=\"dark-row\" role=\"row\">\n\n				<th class=\"tablesorter-header\" data-column=\"2\" unselectable=\"on\">\n					<div class=\"tablesorter-header-inner\">Resource ID</div>\n				</th>\n				<th class=\"tablesorter-header\" data-column=\"0\" unselectable=\"on\">\n					<div id=\"time\" class=\"tablesorter-header-inner\">Cost</div>\n				</th>\n			</tr>\n		</thead>\n		<tbody id=\"billingData\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.product : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "		</tbody>	\n	</table>\n</div> -->";
},"useData":true});
templates['EC2InstancesView'] = template({"1":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "		<tr>\n			<td >"
    + escapeExpression(lambda((depth0 != null ? depth0.instance : depth0), depth0))
    + "</td>\n			<td>"
    + escapeExpression(lambda((depth0 != null ? depth0.state : depth0), depth0))
    + "</td>\n			<td>"
    + escapeExpression(lambda((depth0 != null ? depth0.keyName : depth0), depth0))
    + "</td>\n			<td>"
    + escapeExpression(lambda((depth0 != null ? depth0.instanceType : depth0), depth0))
    + "</td>\n			<td>"
    + escapeExpression(lambda((depth0 != null ? depth0.launchTime : depth0), depth0))
    + "</td> \n			<td>"
    + escapeExpression(lambda((depth0 != null ? depth0.zone : depth0), depth0))
    + "</td>\n			<td>"
    + escapeExpression(lambda((depth0 != null ? depth0.duration : depth0), depth0))
    + " min</td>\n			<td>"
    + escapeExpression(lambda((depth0 != null ? depth0.email : depth0), depth0))
    + "</td>\n			<td>"
    + escapeExpression(lambda((depth0 != null ? depth0.volumeid : depth0), depth0))
    + "</td>\n			<td>"
    + escapeExpression(lambda((depth0 != null ? depth0.lastActiveTime : depth0), depth0))
    + "</td>\n		</tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<table id=\"InstanceTable\" class=\"hover\">\n	<thead>\n		<tr class=\"dark-row\">\n			<th>Instance ID</th>\n			<th>State</th>\n			<th>Key Name</th>\n			<th>Type</th>\n			<th>Launched</th>\n			<th>Zone</th>\n			<th>Lifetime</th>\n			<th>E-Mail</th>\n			<th>Volume ID</th>\n			<th>LastActiveTime</th>\n		</tr>\n	</thead>\n	<tbody id=\"instanceData\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.instances : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "	</tbody>	\n</table>\n";
},"useData":true});
templates['EC2MetricsView'] = template({"1":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "			<tr class=\"tablesorter-body\">\n				<td>"
    + escapeExpression(lambda((depth0 != null ? depth0.instance : depth0), depth0))
    + "</td>\n				<td>"
    + escapeExpression(lambda((depth0 != null ? depth0.networkIn : depth0), depth0))
    + "</td>\n				<td>"
    + escapeExpression(lambda((depth0 != null ? depth0.networkOut : depth0), depth0))
    + "</td>\n				<td>"
    + escapeExpression(lambda((depth0 != null ? depth0.cpuUtilization : depth0), depth0))
    + "</td>\n				<td>"
    + escapeExpression(lambda((depth0 != null ? depth0.time : depth0), depth0))
    + "</td>\n			</tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div id=\"networkContainer\"></div>\n<div id=\"cpuContainer\"></div>\n<div class=\"clear\"></div>\n\n<!-- <div id=\"Metrics\">\n	<table id=\"MetricsTable\" class=\"tablesorter-metro\" cellspacing=\"1\">\n		<thead>\n			<tr class=\"dark-row\">\n				<th class=\"tablesorter-header\" data-column=\"0\">\n					Instance ID\n				</th>\n				<th class=\"tablesorter-header\" data-column=\"1\">\n					Network In\n				</th>\n				<th class=\"tablesorter-header\" data-column=\"2\">\n					Network Out\n				</th>\n				<th class=\"tablesorter-header\" data-column=\"3\">\n					Cpu Utilization\n				</th>\n				<th class=\"tablesorter-header\" data-column=\"4\">\n					Time\n				</th>\n			</tr>\n		</thead>\n		<tbody id=\"metricsData\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.metrics : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "		</tbody>	\n	</table>\n</div>\n -->\n\n";
},"useData":true});
templates['EC2View'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "";
},"useData":true});
templates['FooterView'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "";
},"useData":true});
templates['HeaderView'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"setting\"><i class=\"fa fa-cogs fa-1x\"></i></div>\n\n<div class=\"budget\" data-toggle=\"modal\" data-target=\"#myModal\"> </div>\n<div class=\"menu\"><i class=\"fa fa-bars fa-1x\"></i></div>\n";
},"useData":true});
templates['IAMGroupsView'] = template({"1":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "		<tr>\n			<td >"
    + escapeExpression(lambda((depth0 != null ? depth0.groupName : depth0), depth0))
    + "</td>\n			<td>"
    + escapeExpression(lambda((depth0 != null ? depth0.groupId : depth0), depth0))
    + "</td>\n			<td>"
    + escapeExpression(lambda((depth0 != null ? depth0.arn : depth0), depth0))
    + "</td>\n			<td>"
    + escapeExpression(lambda((depth0 != null ? depth0.createDate : depth0), depth0))
    + "</td>\n		</tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<table id=\"GroupsTable\" class=\"hover\">\n	<thead>\n		<tr class=\"dark-row\">\n			<th>GroupName</th>\n			<th>GroupId</th>\n			<th>Arn</th>\n			<th>CreateDate</th>\n		</tr>\n	</thead>\n	<tbody id=\"instanceData\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.instances : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "	</tbody>	\n</table>\n";
},"useData":true});
templates['IAMUsersView'] = template({"1":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "		<tr>\n			<td >"
    + escapeExpression(lambda((depth0 != null ? depth0.userName : depth0), depth0))
    + "</td>\n			<td>"
    + escapeExpression(lambda((depth0 != null ? depth0.userId : depth0), depth0))
    + "</td>\n			<td>"
    + escapeExpression(lambda((depth0 != null ? depth0.arn : depth0), depth0))
    + "</td>\n			<td>"
    + escapeExpression(lambda((depth0 != null ? depth0.createDate : depth0), depth0))
    + "</td>\n		</tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<table id=\"UsersTable\" class=\"hover\">\n	<thead>\n		<tr class=\"dark-row\">\n			<th>UserName</th>\n			<th>UserId</th>\n			<th>Arn</th>\n			<th>CreateDate</th>\n		</tr>\n	</thead>\n	<tbody id=\"instanceData\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.instances : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "	</tbody>	\n</table>\n";
},"useData":true});
templates['MeterView'] = template({"1":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "		$"
    + escapeExpression(lambda((depth0 != null ? depth0.value : depth0), depth0))
    + "/Hour\n";
},"3":function(depth0,helpers,partials,data) {
  return "	 	<div id = \"div2\"></div>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<script type=\"text/javascript\">\n		var response = '';\n			$(document).ready(function(){\n				$.get('/getAccountBalance', function(data){\n						$(\"#div2\").append('$'+data);\n				});\n			});\n				\n		</script>\n\n<div class=\"rate\">Rate: \n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.rate : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "</div>\n\n\n<div class=\"usage\">Usage:      N/A\n</div>\n\n<div class=\"balance\">Balance:\n\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.rate : depth0), {"name":"each","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n</div>\n";
},"useData":true});
templates['NavView'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = "<div class=\"page\" page-id=\""
    + escapeExpression(lambda((depth0 != null ? depth0.page_id : depth0), depth0))
    + "\">"
    + escapeExpression(lambda((depth0 != null ? depth0.title : depth0), depth0))
    + "</div>\n\n";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, (depth0 != null ? depth0.title : depth0), "==", "Amazon Elastic Compute Cloud", {"name":"ifCond","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, (depth0 != null ? depth0.title : depth0), "==", "Amazon RDS Service", {"name":"ifCond","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, (depth0 != null ? depth0.title : depth0), "==", "Usage Monitor", {"name":"ifCond","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  return "<div class=\"subpage\" subpage-id=\"0\"> EC2 Instances</div>\n";
  },"4":function(depth0,helpers,partials,data) {
  return "<div class=\"subpage\" subpage-id=\"1\"> RDS Instances</div>\n";
  },"6":function(depth0,helpers,partials,data) {
  return "<div class=\"subpage\" subpage-id=\"2\"> IAM Groups</div>\n<div class=\"subpage\" subpage-id=\"3\"> IAM Users</div>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"slider\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.pages : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n</div>";
},"useData":true});
templates['NonFreeBillingView'] = template({"1":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "			<tr class=\"tablesorter-body\">\n				<td>"
    + escapeExpression(lambda((depth0 != null ? depth0.resourceId : depth0), depth0))
    + "</td>\n				<td>"
    + escapeExpression(lambda((depth0 != null ? depth0.cost : depth0), depth0))
    + "</td>\n				<td>"
    + escapeExpression(lambda((depth0 != null ? depth0.volumeId : depth0), depth0))
    + "</td>\n				<td>"
    + escapeExpression(lambda((depth0 != null ? depth0.date : depth0), depth0))
    + "</td>					\n			</tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div id=\"nonfreebillingcontainer\"></div>\n\n<!-- <div>\n	<table id=\"BillingTable\" class=\"tablesorter-metro\" cellspacing=\"1\">\n		<thead>\n			<tr class=\"dark-row\" role=\"row\">\n\n				<th class=\"tablesorter-header\" data-column=\"2\" unselectable=\"on\">\n					<div class=\"tablesorter-header-inner\">Resource ID</div>\n				</th>\n				<th class=\"tablesorter-header\" data-column=\"0\" unselectable=\"on\">\n					<div id=\"time\" class=\"tablesorter-header-inner\">Cost</div>\n				</th>\n				<th class=\"tablesorter-header\" data-column=\"1\" unselectable=\"on\">\n					<div class=\"tablesorter-header-inner\">VolumeId</div>\n				</th>\n						<th class=\"tablesorter-header\" data-column=\"3\" unselectable=\"on\">\n					<div class=\"tablesorter-header-inner\">Date</div>\n				</th>\n			</tr>\n			</tr>\n		</thead>\n		<tbody id=\"billingData\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.billing : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "		</tbody>	\n	</table>\n</div> -->\n\n\n\n";
},"useData":true});
templates['OperationsView'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div id=\"operationscontainer\"></div>\n";
  },"useData":true});
templates['ProductCostView'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div id=\"productcostcontainer\"></div>\n";
  },"useData":true});
templates['RDSBillingView'] = template({"1":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "			<tr class=\"tablesorter-body\">\n				<td>"
    + escapeExpression(lambda((depth0 != null ? depth0.resourceId : depth0), depth0))
    + "</td>\n				<td>"
    + escapeExpression(lambda((depth0 != null ? depth0.cost : depth0), depth0))
    + "</td>\n				<td>"
    + escapeExpression(lambda((depth0 != null ? depth0.volumeId : depth0), depth0))
    + "</td>\n				<td>"
    + escapeExpression(lambda((depth0 != null ? depth0.date : depth0), depth0))
    + "</td>					\n			</tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<!-- <div id=\"rdsbillingcontainer\"></div> -->\n\n<!-- <div>\n	<table id=\"BillingTable\" class=\"tablesorter-metro\" cellspacing=\"1\">\n		<thead>\n			<tr class=\"dark-row\" role=\"row\">\n\n				<th class=\"tablesorter-header\" data-column=\"2\" unselectable=\"on\">\n					<div class=\"tablesorter-header-inner\">Resource ID</div>\n				</th>\n				<th class=\"tablesorter-header\" data-column=\"0\" unselectable=\"on\">\n					<div id=\"time\" class=\"tablesorter-header-inner\">Cost</div>\n				</th>\n				<th class=\"tablesorter-header\" data-column=\"1\" unselectable=\"on\">\n					<div class=\"tablesorter-header-inner\">VolumeId</div>\n				</th>\n						<th class=\"tablesorter-header\" data-column=\"3\" unselectable=\"on\">\n					<div class=\"tablesorter-header-inner\">Date</div>\n				</th>\n			</tr>\n			</tr>\n		</thead>\n		<tbody id=\"billingData\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.billing : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "		</tbody>	\n	</table>\n</div> -->\n\n\n\n\n\n";
},"useData":true});
templates['RDSCostView'] = template({"1":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "			<tr class=\"tablesorter-body\">\n				<td>"
    + escapeExpression(lambda((depth0 != null ? depth0.productName : depth0), depth0))
    + "</td>\n				<td>"
    + escapeExpression(lambda((depth0 != null ? depth0.cost : depth0), depth0))
    + "</td>				\n			</tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div id=\"RDSCostContainer\"></div>\n\n<!-- <div>\n	<table id=\"rdsBillingTable\" class=\"tablesorter-metro\" cellspacing=\"1\">\n		<thead>\n			<tr class=\"dark-row\" role=\"row\">\n				<th class=\"tablesorter-header\" data-column=\"2\" unselectable=\"on\">\n					<div class=\"tablesorter-header-inner\">Resource ID</div>\n				</th>\n				<th class=\"tablesorter-header\" data-column=\"0\" unselectable=\"on\">\n					<div id=\"time\" class=\"tablesorter-header-inner\">Cost</div>\n				</th>\n			</tr>\n		</thead>\n		<tbody id=\"billingData\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.product : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "		</tbody>	\n	</table>\n</div> -->\n";
},"useData":true});
templates['RDSInstancesView'] = template({"1":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "		<tr>\n			<td >"
    + escapeExpression(lambda((depth0 != null ? depth0.dbIdentifier : depth0), depth0))
    + "</td>\n			<td>"
    + escapeExpression(lambda((depth0 != null ? depth0.dbClass : depth0), depth0))
    + "</td>\n			<td>"
    + escapeExpression(lambda((depth0 != null ? depth0.dbEngine : depth0), depth0))
    + "</td>\n			<td>"
    + escapeExpression(lambda((depth0 != null ? depth0.dbStatus : depth0), depth0))
    + "</td>\n			<td>"
    + escapeExpression(lambda((depth0 != null ? depth0.masterUsername : depth0), depth0))
    + "</td> \n			<td>"
    + escapeExpression(lambda((depth0 != null ? depth0.dbName : depth0), depth0))
    + "</td>\n			<td>"
    + escapeExpression(lambda((depth0 != null ? depth0.allocatedStorage : depth0), depth0))
    + " GB</td>\n			<td>"
    + escapeExpression(lambda((depth0 != null ? depth0.launchTime : depth0), depth0))
    + "</td>\n			<td>"
    + escapeExpression(lambda((depth0 != null ? depth0.zone : depth0), depth0))
    + "</td>\n			<td>"
    + escapeExpression(lambda((depth0 != null ? depth0.type : depth0), depth0))
    + "</td>\n		</tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<table id=\"RDSInstanceTable\" class=\"hover\">\n	<thead>\n		<tr class=\"dark-row\">\n			<th>Identifier</th>\n			<th>Class</th>\n			<th>Engine</th>\n			<th>Status</th>\n			<th>MasterUsername</th>\n			<th>DBName</th>\n			<th>AllocatedStorage</th>\n			<th>Launch Time</th>\n			<th>Zone</th>\n			<th>StorageType</th>\n		</tr>\n	</thead>\n	<tbody id=\"instanceData\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.instances : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "	</tbody>	\n</table>\n";
},"useData":true});
templates['RDSMetricsView'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div id=\"rdsCpuContainer\"></div>\n<div id=\"readWriteIopsContainer\"></div>\n<div id=\"queueDepthContainer\"></div>\n<div class=\"clear\"></div>";
  },"useData":true});
templates['UsageMonitorView'] = template({"1":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "		<tr>\n			<td >"
    + escapeExpression(lambda((depth0 != null ? depth0.budgetName : depth0), depth0))
    + "</td>\n			<td>"
    + escapeExpression(lambda((depth0 != null ? depth0.batchType : depth0), depth0))
    + "</td>\n			<td>"
    + escapeExpression(lambda((depth0 != null ? depth0.batchName : depth0), depth0))
    + "</td>\n			<td>"
    + escapeExpression(lambda((depth0 != null ? depth0.startDate : depth0), depth0))
    + "</td>\n			<td>"
    + escapeExpression(lambda((depth0 != null ? depth0.endDate : depth0), depth0))
    + "</td> \n			<td>"
    + escapeExpression(lambda((depth0 != null ? depth0.amount : depth0), depth0))
    + "</td>\n		</tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<table id=\"BudgetTable\" class=\"hover\">\n	<thead>\n		<tr class=\"dark-row\">\n			<th>BudgetName</th>\n			<th>BatchType</th>\n			<th>BatchName</th>\n			<th>StartDate</th>\n			<th>EndDate</th>\n			<th>Amount</th>\n		</tr>\n	</thead>\n	<tbody id=\"budgetData\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.budgets : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "	</tbody>	\n</table>\n";
},"useData":true});
})();