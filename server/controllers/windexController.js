const windexApi = require('../utils/windexApi')
const winDexController = {}

winDexController.getUSD = (req,res) => {
	windexApi.getUSD()
		.then(data => {
			res.json({
				status:200,
				data:data,
				message:'Price retrieved from winkdexApi OK'
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

module.exports = winDexController