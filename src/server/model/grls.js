grlsInstanceSchema = new mongoose.Schema({
	timeBudgetName: String,
	instanceId: String,
	user: String,
	group: String,
	instanceRegion: String,
	serviceType: String,
	//ec2 t2 instance type
	instanceType: String,
	//rds max allowed connections
	maxConnectionsLimit: Number,
	lifetime: Number,
	//under profile decay coefficient
	uDecay: Number,
	//over profile decay coefficient
	oDecay: Number,
	state: String
});

mongoose.model('grlsInstances', grlsInstanceSchema, 'grlsInstances');