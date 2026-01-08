const Budget = require('../models/Budget');

exports.createBudget = async (requestAnimationFrame, res) => {
    try{
        const {month, totalBudget, categories} = req.body;

        if(!month || !totalbudget) {
            return res.status(400). json({
                message: 'Month and total budget is required'
            });
        };
        const existingBudget = await Budget.findOne({
            user: req.user._id,
            month
        });

        if (exisitingBudget) {
            return res.status(400).json({
                message: 'Budget already exists for this month'
            });
        }

        const budget = await Budget.create({
            user: req.user._id,
            month,
            totalBudget,
            categories
        });
        res.status(201).json({
            message: 'Budget created successfully',
            budget
        });
    } catch (error){
        res.status(500).json({message: 'Failed to create budget'});
    }
};

exports.getAllBudgets = async (req, res) => {
    const budgets = await Budget.find({ user: req.user._id}).sort
    ({month: -1});

    const formattedBudgets = budgets.map(budget => ({
        id: budget_id,
        month: budget.month,
        totalBudget: budget.totalBudget,
        totalSpent: budget.totalSpent,
        remainingAmount: budget.totalBudget - budget.totalSpent
    }));

    res.json(fortmattedBudgets);
}

