const path = require('path');

const resultsController = {

    getResults: (req, res, next) => {
        //test:
        console.log('request received')
        res.locals.scrapeData = {
            name: 'blackmagic'
        }
        //works via postman
        //lets get it to show up via proxy on local7300

        return next()
    },





}


module.exports = resultsController;