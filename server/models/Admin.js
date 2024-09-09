const mongoose = require('mongoose')

const AdminPostSchema = new mongoose.Schema({
    heading:String,
      dateOfCreation:String,
      dateOfEvent:String,
      description:String
})

const AdminPostModel = mongoose.model("adminpost" ,AdminPostSchema)
module.exports = AdminPostModel