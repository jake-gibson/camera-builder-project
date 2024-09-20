const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

const resultsController = require('./controllers/resultsController');
const buildController = require('./controllers/buildController');
const aiController = require('./controllers/aiController');

const corsOptions = {
  origin: function (origin, callback) {
    const allowedOrigins = ['http://localhost:3000', 'http://localhost:7300'];

    // Allow requests from localhost in development or if the origin ends with the Vercel domain
    if (
      !origin ||
      allowedOrigins.includes(origin) ||
      origin.endsWith('vercel.app')
    ) {
      callback(null, true); // Allow the request
    } else {
      callback(new Error('Not allowed by CORS')); // Deny the request
    }
  }, // Allow requests from the frontend in development and production
  optionsSuccessStatus: 200, // Some legacy browsers (IE11, etc.) choke on 204
};

app.use(cors(corsOptions));

app.use(express.static(path.resolve(__dirname, '../build')));
app.use(express.json()); //body-parser
app.use(express.urlencoded({ extended: true }));
//cookie-parser?

app.get('/aiProductInfo', aiController.getProductInfo, (req, res) => {
  console.log('back from ai');
  res.status(200).send({ aiRes: res.locals.aiRes });
});

app.post('/resultsLoad', resultsController.getResults, (req, res) => {
  console.log('sending');
  const results = res.locals.scrapeData;
  res.status(200).send(results);
});

app.post('/saveBuild', buildController.saveBuildDB, (req, res) => {
  console.log('back from DB');
  const newBuild = res.locals.newBuild;
  res.status(200).json(newBuild);
});

app.post('/deleteBuild', buildController.deleteBuildDB, (req, res) => {
  console.log('back from DB');
  const deletedBuild = res.locals.deletedBuild;
  res.status(200).json(deletedBuild);
});

app.get('/getAllBuilds', buildController.getAllBuildsDB, (req, res) => {
  console.log('back from DB');
  const allBuilds = res.locals.allBuilds;
  res.status(200).json(allBuilds);
});

//Serving Home Page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../template.html'));
});

//Wildcard 404
app.use('*', (req, res) => {
  res.status(404).send("Uh, looks like you're outta bounds...");
});

//Global Error Handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };

  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).send(errorObj.message);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

// module.exports = app;
