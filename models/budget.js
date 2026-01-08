const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    food: {type: Number, default: 0},
    travel: {type: Number, defaault: 0},
    entertainment: {type: Number, default: 0},
    accounts: { type: Number, default: 0},
    Utilities : {type:Number, default: 0}
});

const budgetSchema = new mongoose.Schema(
    {
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    month: {
        type: Date,
        required: true
    },
    totalBudget: {
        type: Number,
        required: true

    },
    categories: {
        type: categorySchema,
        default: () => ({
            food: 0,
            travel: 0,
            entertainment: 0,
            accounts: 0,
            Utilities: 0 
        })
    },
    totalSpent: {
        type: number, 
        default: 0
    }

},
{ timestamps: true}
);

export default Budget