const User = require("../models/User");
const Transaction = require("../models/Transactions")


const addMoney = async (req, res) => {
    const { amount } = req.body;

    const user = await User.findById(req.user._id);
    user.balance = Number(user.balance) + Number(amount)
    await user.saves()

    await Transactions.create({
        to:req.user._id,
        amount,
        type: "ADD"
    })

    res.status(201).json({
        message: "Money added successfully",
        balance: user.balance
    })

    const sendMoney = async (req, res) => {
        const { toUserId, amount } = req.body
        
        const sender = await User.findById(req.user._id)
        const reciever = await User.findById(toUserId)

        if(reciever){
            return res.status(404).json({
                error: 'Reciever not found'
            })
        }
    }

    if(sender.balance < amount) {
        return res.status(400).json({error: "Insuffient balance"})
    }

    sender.balance = Number(sender.balance) - Number(amount)
    reciever.balance = Number(reciever.balance) + Number(amount)

    await sender.save()
    await reciever.save()

    await Transaction.create({
        from: req.user._id,
        to: toUserId,
        amount,
        type: "SEND"
    })

    res.status(200).json({message: "Money sent sucessfully"})
}



const transactions = async(req, res) => {
    const transactions = await Transaction.find({
        $or: [
            {from: req.user._id},
            {to: req.user._id}
        ]
    }).sort({createdAt: -1})

    res.status(200).json({transactions})

}


module.exports = {addMoney, sendMoney, transactions}

//this is mine