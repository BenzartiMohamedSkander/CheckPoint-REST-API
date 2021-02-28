let mongoose = require('mongoose')


let usersSchema = new mongoose.Schema({

name: String,
pwd:String,
email:String


})

module.exports = mongoose.model('user',usersSchema)