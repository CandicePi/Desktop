const express = require('express')
const User = require('../models/User')
const generationToken = require('../utility/generation');
const generateToken = require('../../../Users/Candice/AppData/Local/Temp/419597b9-0462-4056-a84c-f2aab7b3a5e5_DigitalWallet.zip.DigitalWallet.zip/DigitalWallet/Backend/utility/generateToken');

const register = async (req, res, next) => {
    try{
        const { name, email, password } = req.body;

        const userExist = await User.findOne({email})
        if(userExists) {
            return res.status(400).json({error : "User already exisits"})
        }

        const user = await User.create({
            name,email, password
        })
        res.status(201).json({
            id:user._id,
            name: user.name,
            email: user.email,
            balance: user.balance,
            token: generateToken(user._id)
        })
    }
    catch(error) {
        res.status(400).json({
            error: error.message
        })
    }
}





const login = async (req, res) => {
    const { email, password} = req.body
    const user = await User.findOne({email})

    if(!user || !(await user.matchPassword(password))) {
        return res.status(401).json({error: "Invalid creds"})
    }


    res.json({
        id: user._id,
        name: user.name,
        email: user.email,
        balance: user.balance,
        token:generateToken(user._id)
    })

}

const getBalance = async(req, res) => {
    const user = await User.findById(req.user._id)
    res.json({ balance: user.balance })
}

module.exports = {register, login, getBalance }

//This is mine