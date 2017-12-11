const blockChainApi = require('../utils/blockchainInfoApi')

const historicalController = {}

historicalController.getData = (req,res) => {
	blockChainApi.getData()
		.then(response => {
			res.json({
				status:200,
				data:response,
				message:'Historical BTC Data retrieved succesfully'
			})
		})
		.catch(err => {
			res.json({
				status:500,
				message:'Something went wrong...'
			})
		})
}

module.exports = historicalController 