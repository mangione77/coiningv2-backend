const axios = require('axios')
const baseURL = 'https://api.coindesk.com/v1/bpi/currentprice.json'

let coinDeskApi = {}

coinDeskApi.getEUR = () => {
	return new Promise((resolve,reject) => {
		axios.get(baseURL)
			.then(response => {
				resolve(response.data.bpi.EUR)
		})
		.catch(err => {
			reject(err)
		})		
	})
}

coinDeskApi.getUSD = () => {
	return new Promise((resolve,reject) => {
		axios.get(baseURL)
			.then(response => {
				resolve(response.data.bpi.USD)
			})
			.catch(err => {
				reject(err)
			})
	})
}

module.exports = coinDeskApi