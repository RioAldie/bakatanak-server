const express = require('express');
const router = require('./routes');
const database = require('./config/database');
const app = express();
const port = 9000;
var cors = require('cors');
app.use(cors());

app.use(express.json());
app.use(router);

database
  .then(() => {
    console.log('connect database successfully !');
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(port, () => {
  console.log('server running at http://localhost:' + port);
});

module.exports = app;
