const twitterApi = require('../utils/twitterApi')

const tweetsController = {}

tweetsController.getTweets = (req,res) => {
	let query = req.params.query
	twitterApi.tweetsOnKeyword(query)
		.then(data => {
			res.json({
				status:200,
				data:data.statuses,
				message:'Tweets retrieved successfully'
			})
		})
		.catch(console.error)
}

module.exports = tweetsController