/**
** Checkout price converter endpoint: https://apiv2.bitcoinaverage.com/#converter
**/

const bitcoinAverageApi = require('../utils/bitcoinAverageApi')
const bitcoinAverageMarketsApi = require('../utils/bitcoinAverageMarketsApi')
const bitcoinAverage = {}

bitcoinAverage.getEur = (req,res) => {
	bitcoinAverageApi.getGlobalBTCEUR()
		.then(data => {	
			res.json({
				status:200,
				data:data,
				message:'Latest price from BTC Average (EUR) retrieved OK'
			})
		.catch(err => {
			console.error(err)
			})
		})
}

bitcoinAverage.getUSD = (req,res) => {
	bitcoinAverageApi.getGlobalBTCUSD()
		.then(data => {
			res.json({
				status:200,
				data:data,
				message:'Latest price from BTC Average (USD) retrieved OK'
			})
		})
		.catch(err => {
			res.json({
				status:500,
				data:err,
				message:'Something went wrong...'
			})
		})
}

bitcoinAverage.getAll = (req,res) => {
	bitcoinAverageMarketsApi.getMarkets()
		.then(data => {
			res.json({
				status:500,
				data:data.data,
				message:'Latest market prices from BTC Average (BTC/EUR) retrieved OK'
			})
		})
		.catch(console.error)
}

module.exports = bitcoinAverage