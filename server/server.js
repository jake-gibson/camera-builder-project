const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

const resultsController = require('./controllers/resultsController')

app.use(express.static(path.resolve(__dirname, '../build')))
app.use(express.json()); //body-parser
app.use(express.urlencoded({ extended: true }));
//cookie-parser?

app.post('/resultsLoad', resultsController.getResults, (req, res) => {
    console.log('sending')
    const results = res.locals.scrapeData
    res.status(200).send(results);
})


//Serving Home Page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../template.html'))
})

//Wildcard 404
app.use('*', (req,res) => {
    res.status(404).send('Uh, looks like you\'re outta bounds...')
})

//Global Error Handler
app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 500,
        message: { err: 'An error occurred' },
    }

    const errorObj = Object.assign(defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).send(errorObj.message)
})


app.listen(PORT, () => console.log(`Listening on port ${PORT}`))

// module.exports = app;