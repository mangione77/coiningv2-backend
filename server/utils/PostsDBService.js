const Posts = require('../models/PostSchema')

const PostsDBService = {}

PostsDBService.listPosts = (limit) => {
	return new Promise((resolve,reject) => {
		Posts.find()
			.limit(limit)
			.select('title link from')
			.then(posts => {
				resolve(posts)
			})
			.catch(console.error)
	})
}

module.exports = PostsDBService