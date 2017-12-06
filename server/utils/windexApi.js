const axios = require('axios')

const baseURL = 'https://winkdex.com/api/v0/price'
const windexApi = {}

windexApi.getUSD = () => {
	return new Promise((resolve,reject) => {
		axios.get(baseURL)
			.then(data => {
				resolve(data.data)
		})
		.catch(err => {
			reject(err)
		})
	})		
}	


module.exports = windexApi