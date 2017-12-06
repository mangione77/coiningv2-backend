const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
	title: String,
	text: String,
	description: String,
	date: String,
	from: String
})

module.exports = mongoose.model('Post', PostSchema)