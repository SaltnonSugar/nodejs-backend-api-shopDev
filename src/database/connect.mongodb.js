"use strict";

const { default: mongoose } = require("mongoose");

const connectString = "mongodb://localhost:27017/shopDevTest";

class Database {
  constructor() {
    this.connect();
  }

  connect(type = "mongodb") {
    if (1 === 1) {
      mongoose.set("debug", true);
      mongoose.set("debug", { color: true });
    }

    mongoose
      .connect(connectString)
      .then((_) => console.log(`Connected to MongoDB`))
      .catch((err) => console.log(`Error connect to Database!`));
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }
}

const instanceDatabase = Database.getInstance();

module.exports = instanceDatabase;
