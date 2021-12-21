const createError = require('http-errors')
const User = require('../models/User.model')

module.exports = {
  getAllusers: async (req, res, next) => {
    res.send({
      message: 'All users will be listed here soon!'
    })
  },

  registerUser: async (req, res, next) => {
    try {
      const { name, email, password } = req.body

      // check if user with the email exists
      const userExist = await User.findOne({ email: email })

      if (userExist) throw createError.Conflict(`The user with the ${email} is already registered`)

      const newUser = new User({
        ...req.body
      })

      const user = await newUser.save()

      res.status(201).json({
        message: 'User saved successfully',
        user: user
      })
    } catch (err) {
      next(err)
    }
  }
}