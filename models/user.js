var mongoose = require('mongoose')
var UserSchema = mongoose.Schema('../schema/user')
var User = mongoose.model('User', UserSchema)

module.exports = User