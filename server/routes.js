const express = require('express')
const routes = express()

// Controllers
const welcomeController = require('./controllers/welcomeController')
const bitcoinAverageController = require('./controllers/bitcoinAverageController')
const coinDeskController = require('./controllers/coinDeskController')
const windexController = require('./controllers/windexController')
const tweetsController = require('./controllers/tweetsController')

// Basic Route
routes.get('/', welcomeController.get)

/// INDEXES \\\
routes.get('/indexes', welcomeController.get)

routes.get('/indexes/btcaverage/eur', bitcoinAverageController.getEur)
routes.get('/indexes/btcaverage/usd', bitcoinAverageController.getUSD)

routes.get('/indexes/coindesk/eur', coinDeskController.getEUR)
routes.get('/indexes/coindesk/usd', coinDeskController.getUSD)

routes.get('/indexes/windex/usd', windexController.getUSD)


/// MARKETS \\\

routes.get('/exchanges', bitcoinAverageController.getAll)


/// TWEETS \\\

routes.get('/tweets/:query', tweetsController.getTweets)

module.exports = routes