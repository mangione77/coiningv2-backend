const twitterApi = require('../utils/twitterApi')

const tweetsController = {}

tweetsController.getTweets = (req,res) => {
	let query = req.params.query
	let count = req.params.count
	let date = (new Date()).toISOString().slice(0,10)
	twitterApi.tweetsOnKeyword(query,count,date)
		.then(data => {
			if (data.statuses.length) {
				res.json({
					status:200,
					data:data.statuses,
					message:'Tweets retrieved successfully'
				})
			}
			else {
				res.json({
					status:404,
					message: 'Something went wrong with your query, as a result, there are no tweets to show. Try again with another keyword'
				})
			}	
		})
		.catch(console.error)
}

module.exports = tweetsController