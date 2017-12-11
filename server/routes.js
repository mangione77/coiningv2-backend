const express = require('express')
const routes = express()

// Controllers
const welcomeController = require('./controllers/welcomeController')
const bitcoinAverageController = require('./controllers/bitcoinAverageController')
const coinDeskController = require('./controllers/coinDeskController')
const windexController = require('./controllers/windexController')
const newsController = require('./controllers/newsController')
const tweetsController = require('./controllers/tweetsController')
const historicalController = require('./controllers/historicalController')

// Basic Route
routes.get('/', welcomeController.get)

/// INDEXES \\\
routes.get('/indexes', welcomeController.get)

routes.get('/indexes/btcaverage/eur', bitcoinAverageController.getEur)
routes.get('/indexes/btcaverage/usd', bitcoinAverageController.getUSD)

routes.get('/indexes/coindesk/eur', coinDeskController.getEUR)
routes.get('/indexes/coindesk/usd', coinDeskController.getUSD)

routes.get('/indexes/historical/month', historicalController.getData)

routes.get('/indexes/windex/usd', windexController.getUSD)


/*
** FINISH COIN ROUTES
*/


/// MARKETS \\\

routes.get('/exchanges', bitcoinAverageController.getAll)


/// NEWS \\\

routes.get('/news/:limit', newsController.getAll)


/// TWEETS \\\

routes.get('/tweets/:query/:count', tweetsController.getTweets)

module.exports = routes