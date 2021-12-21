const { Schema, model } = require('mongoose')

const userSchema = Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    minLength: [3, 'A name must have at least three characters'],
    maxLength: [64, 'Name can\'t have more than 64 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    maxLength: [128, 'Email can\'t have more than 128 characters'],
    index: true
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  },
  isActive: {
    type: Boolean,
    default: true
  },
  isDeleted: {
    type: Boolean,
    default: false
  }

}, { timestamps: true })

module.exports = model('user', userSchema)