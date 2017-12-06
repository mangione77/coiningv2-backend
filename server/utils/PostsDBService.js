const Posts = require('../models/PostSchema')

const PostsDBService = {}

PostsDBService.listPosts = () => {
	return new Promise((resolve,reject) => {
		Posts.find()
			.populate({
				select:'title text link'
			})
			.then(posts => {
				resolve(posts)
			})
			.catch(console.error)
	})
}

module.exports = PostsDBService