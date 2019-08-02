let mongoose = require('mongoose')
mongoose.set('debug', true);let userSchema = new mongoose.Schema({
    user: String,
    pass: String
})

module.exports = mongoose.model('User', userSchema)