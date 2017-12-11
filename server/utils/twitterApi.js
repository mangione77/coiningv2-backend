const axios = require('axios')
const twit = require('twit')
const Twitter = new twit({
	consumer_key:process.env.CONSUMER_KEY,
	consumer_secret:process.env.CONSUMER_SECRET,
	access_token:process.env.ACCESS_TOKEN,
	access_token_secret:process.env.ACCESS_TOKEN_SECRET
})
const twitterApi = {}
 
twitterApi.tweetsOnKeyword = (query,count,date) => {
	return new Promise((resolve,reject) => {
		Twitter.get('search/tweets', {q:`${query} since:${date}`,count:count,lang:'es'},(err,data,response) => {
			if (err) 
				throw new Error

			if (response)
				resolve(data)
		})
	})
}


module.exports = twitterApi
