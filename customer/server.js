const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
var cors = require("cors");
require("dotenv").config();

const app = express();
require('./Configs/global');
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});

const PORT = process.env.PORT || 5000;

const language = require('i18n');
language.configure({
    locales: ['en'],
    defaultLocale: 'en',
    autoReload: true,
    directory: __dirname + '/Locales',
    queryParameter: 'lang',
    objectNotation: true,
    syncFiles: true,
});

// ------------------------    RESPONSE HANDLER    -------------------
app.use((req, res, next) => {
  const ResponseHandler = require('./Configs/responseHandler')
  res.handler = new ResponseHandler(req, res);
  next()
})

const router = require("./Routes/index");
const server = http.createServer(app);

app.use(router);


server.listen(PORT, () => console.log(`Customer Server running on port ${PORT}`));