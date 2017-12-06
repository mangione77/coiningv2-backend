const PostsDBService = require('../utils/PostsDBService')
const newsController = {}

newsController.getAll = (req,res) => {
	PostsDBService.listPosts()
		.then(posts => {
			res.json({
				status:200,
				data:posts,
				message:'Posts retrieved from DB succesfully'
			})
		})
		.catch(console.error)
}

module.exports = newsController