const Posts = require('../models/PostSchema')

const PostsDBService = {}

PostsDBService.listPosts = () => {
	return new Promise((resolve,reject) => {
		Posts.find()
			.select('title link from')
			.then(posts => {
				resolve(posts)
			})
			.catch(console.error)
	})
}

module.exports = PostsDBService