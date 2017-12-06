require('dotenv').config()
const crypto = require('crypto')
const axios = require('axios')

let bitcoinAverageApi = {}

const market = 'global' // info from all listed indexes
const coin = 'BTC'
const fiat = ['EUR','USD']
// Config needed for axios
const config = {
	'headers':{'X-Testing':'testing'}
}

// URL's needed for the API Call
const baseURLEur = `https://apiv2.bitcoinaverage.com/indices/${market}/ticker/all?crypto=${coin}&fiat=${fiat[0]}`
const baseURLUSD = `https://apiv2.bitcoinaverage.com/indices/${market}/ticker/all?crypto=${coin}&fiat=${fiat[1]}`

bitcoinAverageApi.getGlobalBTCEUR = () => {
	return new Promise((resolve,reject) => {
		axios.get(baseURLEur, config)
		.then(response => {
			resolve(response.data.BTCEUR)
		})
		.catch(err => {
			console.log(err)
		})	
	})		
}

bitcoinAverageApi.getGlobalBTCUSD = () => {
	return new Promise((resolve,reject) => {
		axios.get(baseURLUSD, config)
			.then(response => {
				resolve(response.data.BTCUSD)
			})
			.catch(err => {
				reject(err)
			})
	})
}

module.exports = bitcoinAverageApi


