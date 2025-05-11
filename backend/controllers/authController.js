const bcrypt = require("bcrypt")
const User = require("../models/User")
const { generateToken } = require("../config/jwt")

const register = async (req, res) => {
    try {
        const { username, email, password, isAdmin } = req.body
        const user = await User.findOne({email})

        if(user){
            res.status(400).json({message: "User already exists!"})
            return
        }

        const hashPass = await bcrypt.hash(password, 10)
        const newUser = new User({username, email, password: hashPass, isAdmin})

        await newUser.save()
        const token = generateToken(newUser._id)

        res.status(201).json({token, newUser})

    } catch (error) {
        console.error(error.message)
        res.status(500).json({message: "Server error, Enable to register!"})
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })

        if (!user) {
            res.status(400).json({message: "Invalid credentials! (user not found)"})
            return
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            res.status(400).json({message: "Invalid credentials! (wrong password)"})
            return
        }

        const token = generateToken(user._id)
        res.status(201).json({token, user})

    } catch (error) {
        console.error(error.message)
        res.status(500).json({message: "Server error, Enable to login!"})
    }
}

const getMe = async (req, res) => {
    req.json(req.user)
}

module.exports = { register, login, getMe }