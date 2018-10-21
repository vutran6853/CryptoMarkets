require('dotenv').config();
const express = require('express');
const { json } = require('body-parser');
const port = process.env.SERVER_PORT || 3002;
const cors = require('cors');
const app = express();
const massive = require('massive');

const { getCryptoname, getCryptoImage } = require('./cryptoContollers');

app.use(cors());

app.use(json());

// Massive connent to SQL system functionaluty
massive(process.env.CONNECTION_STRING)
.then(dbInstace => {
  //  console.log('Copy of dbInstace', dbInstace )
  app.set('db', dbInstace)
})
.catch(error => console.log('DANGER! : ', error));

app.get('/api/getcryptoname', getCryptoname)
app.get('/api/getcryptoImage/image', getCryptoImage)

app.listen(port, () => {
  console.log(`Server is UP and listening on port ${port}`);
});