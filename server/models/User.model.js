const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt')

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

userSchema.pre('save', async function (next) {
  try {
    if (!this.isModified('password')) next()

    // Generate salt
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(this.password, salt)
    this.password = hashedPassword

    next()
  } catch (err) {
    next(err)
  }
})

module.exports = model('user', userSchema)