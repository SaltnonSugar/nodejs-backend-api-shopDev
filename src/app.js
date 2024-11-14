// add Morgan
const express = require("express"),
  app = express(),
  morgan = require("morgan");
app.use(morgan("dev"));

//add Helmet
const helmet = require("helmet");
app.use(helmet());

// add Compression
const compression = require("compression");
app.use(compression());

// add Database
require("./database/connect.mongodb");

// test connection
// const {
//   countConnections,
//   checkOverloading,
// } = require("./helper/checkNumConnect");
// countConnections();
// checkOverloading();

// routes
app.get("/", (req, res) => {
  return res.status(200).json({
    message: "Hello, World!",
  });
});

module.exports = app;
