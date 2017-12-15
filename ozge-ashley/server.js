'use strict';

// REVIEW: There is a package here called body-parser, which is used by the provided POST route. Be sure to install that and save it as a dependency after you create your package.json.

const bodyParser = require('body-parser').urlencoded({extended: true});
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));
// COMMENT: The public directory is the front end directory determing what the user sees. Express.js
// communicates between the front end and the back end making sure we get the data we want.

app.get('/new', (request, response) =>
  response.sendFile('new.html', {root: './public'}));

app.post('/articles', bodyParser, function(request, response) {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.send('Record posted to server!!');
});

app.use((req, res) => {
  res.status(404).send('Invaild request');
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
