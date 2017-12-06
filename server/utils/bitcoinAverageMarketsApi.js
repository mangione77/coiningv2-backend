require('dotenv').config
const axios = require('axios')

const baseURL = 'https://bitcoinaverage-bitcoin-exchange-data-v1.p.mashape.com/exchanges/all?symbol=BTCEUR'
const config = {
	'headers':{'X-Mashape-Key':process.env.MASHAPE_KEY}
}

const bitcoinAverageMarketsApi = {}

bitcoinAverageMarketsApi.getMarkets = (req,res) => {
	return new Promise((resolve,reject) => {
		axios.get(baseURL,config)
			.then(data => {
				resolve(data)
			})
			.catch(console.error)
	})
}

module.exports = bitcoinAverageMarketsApi