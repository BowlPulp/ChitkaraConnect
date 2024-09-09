const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
    name:String,
    email: String, 
    password: String,
    RollNo:Number,
    FatherName:String,
    MotherName:String,
    Gender:String,
    Dob:String,
    Category:String,
    phoneNo:String
})

const StudentModel = mongoose.model("students" ,StudentSchema )
module.exports = StudentModel