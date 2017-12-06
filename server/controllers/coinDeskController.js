const coinDeskApi = require('../utils/coinDeskApi')
const coinDesk = {}


coinDesk.getEUR = (req,res) => {
	coinDeskApi.getEUR()
		.then(data => {
			res.json({
				status:200,
				data:data,
				message:'Price (EUR) retrieved from CoinDesk OK'
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

coinDesk.getUSD = (req,res) => {
	coinDeskApi.getUSD()
		.then(data => {
			res.json({
				status:200,
				data:data,
				message:'Price (USD) retrieved from CoinDesk OK'
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

module.exports = coinDesk