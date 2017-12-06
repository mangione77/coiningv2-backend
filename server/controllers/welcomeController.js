const welcomeController = {}

welcomeController.get = (req,res) => {
	res.status(200).json({
		status:200,
		data:'Bienvenid@ a la API de Coining'
	})
}

module.exports = welcomeController