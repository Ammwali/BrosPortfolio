const User = require("../model/dataModel")

const addUser = async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body
  try {
    if(!firstName, !lastName , !email, !phone, !message) {
      return res.status(400).json({ message: "Please fill in all fields" })
    }
    const user = await User.create({
      firstName,
      lastName,
      email,
      phone,
      message
    })
    if (user){
      return res.status(201).json({ message:
         "Form Submission successful", user })
    }
    res.status(400).json({message: "Failed to submit form. Please try again"})
  } catch (error) {
    res.status(500).json({message: "Internal server error. Try again later", error})
  }
}

const getUsers = async (req, res) => {
  try {
    const users = await User.find()
    if (users) {
      return res.status(200).json({ users })
    }
    res.status(400).json({message: "Users not found"})
  }catch(err){
    res.status(500).json({message: "Internal server error. Try again later", err})
  }
}

module.exports = {addUser, getUsers}