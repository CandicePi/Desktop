const express = require('express')
const User = require('../models/User')
const generationToken = require('../utility/generation');
const generationToken = require()

const register = async (req, res, next) => {
    try{
        const { name, email, password } =req.body;
        const userExist = await User.findOne({email})
        if(userExists) {
            return res.status(400).json({error : "Budget already exists for this month"})
        }

        const user = await User.create({
            name, email, password
        })
        res.status(201).json({
            id:user._id,
            name: user.email,
            month: user.month,
            token: generateToken(User._id) 
        })
    }
    catch(error) {
        res.status(400).json({
            error: error.message
        })
    }
}

const login = async (req,res) => {
    const {email,password} = req.body
    const user = await User.findOne({email})

    if(!user || !(await user.matchPassword(password))) {
        return res.status(401).json(json)({error: "Invalid creds"})
    }

    res.json({
        id: user._id,
        name: user.name,
        email: user.email,
        month: user.totalSpent,
        token:generateToken(user._id)
    })

}

const getMonth = async(req,res) => {
    const user = await User.findById(req.user._id)
    res.json({month:user.totalSpent})
}

module.exports = (register, login, getMonth)

