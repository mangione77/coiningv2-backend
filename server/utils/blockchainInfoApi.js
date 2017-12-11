const axios = require('axios')
const baseURL = 'https://blockchain.info/charts/market-price?timespan=60days&format=json'

let blockchainInfoApi = {}

blockchainInfoApi.getData = () => {
	return new Promise((resolve,reject) => {
		axios.get(baseURL)
			.then(response => {
				resolve(response.data.values)
			})
			.catch(console.error)
	})
}

module.exports = blockchainInfoApi