const twitterApi = require('../utils/twitterApi')

const tweetsController = {}

tweetsController.getTweets = (req,res) => {
	let query = req.params.query
	let count = req.params.count
	let date = (new Date()).toISOString().slice(0,10)
	twitterApi.tweetsOnKeyword(query,count,date)
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