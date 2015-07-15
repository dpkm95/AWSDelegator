mongoose = require('mongoose');
budgetSchema = new mongoose.Schema({
	_id: mongoose.Schema.ObjectId,
	BudgetName: String,
	BatchType: String,
	BatchName: String,
	StartDate: String,
	EndDate: String,
	Amount: Number,
	TimeOut: String,
	State: String
});

mongoose.model('Budgets', budgetSchema, 'budgets');