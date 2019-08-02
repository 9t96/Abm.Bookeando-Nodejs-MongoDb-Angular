let mongoose = require('mongoose')
mongoose.set('debug', true);let bookSchema = new mongoose.Schema({
    title: String,
    author: String
})

module.exports = mongoose.model('Book', bookSchema)