var mongoose = require('mongoose')
var MovieSchema = mongoose.Schema('../schemas/movie')
var Movie = mongoose.model('Movie', MovieSchema)

module.exports = Movie