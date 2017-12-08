const PostsDBService = require('../utils/PostsDBService')
const newsController = {}

newsController.getAll = (req,res) => {
	let limit
	if (req.params.limit) {
		limit = parseInt(req.params.limit)
	}
	else {
		limit = 5
	}
	PostsDBService.listPosts(limit)
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