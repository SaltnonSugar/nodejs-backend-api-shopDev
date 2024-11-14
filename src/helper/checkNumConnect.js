"use strict";

const mongoose = require("mongoose");
const os = require("os");
const process = require("node:process");

const countConnections = () => {
  const numConnections = mongoose.connections.length;
  console.log(`Number of connections: ${numConnections}`);
};

// check overloading
const _SECONDS = 5000; // 5 seconds
const checkOverloading = () => {
  setInterval(() => {
    const numConnections = mongoose.connections.length;
    const numCores = os.cpus().length;
    const memoryUsed = process.memoryUsage().rss;

    const maxConnections = numCores * 5;

    console.log(`Connections: ${numConnections}`);
    console.log(`Memory: ${memoryUsed / 1024 / 1024} MB`);

    if (numConnections > maxConnections) {
      console.log(`Overloading connection`);
    }
  }, _SECONDS);
};
module.exports = { countConnections, checkOverloading };
