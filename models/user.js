const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password_digest: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('users', User)

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJydW5vIiwiZW1haWwiOiJicnVub0BicnVuby5jb20iLCJpYXQiOjE2MTczOTcwNzR9.Khxjb126M_DpaKExZow_SL0U3lkogNScqqF6MiEUd_c