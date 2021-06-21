const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const exampleRouter = require("./endpoints/example/example.router");

class Server {
  /**
   *  Server
   * @param {String} port
   * @param {String} dataBaseUrl
   * @param {Boolean} isDev
   */
  constructor(port, dataBaseUrl, isDev = false) {
    this.app = null;
    this.port = port;
    this.dataBaseUrl = dataBaseUrl;
    this.isDev = isDev;
  }

  async start() {
    this.initServer();
    this.initMiddlewares();
    this.initRoutes();
    // await this.connectToDB();
    this.startListening();
  }

  initServer() {
    this.app = express();
  }

  initMiddlewares() {
    this.app.use(morgan("dev"));
    this.app.use(express.json());
    this.app.use(cors());
  }

  initRoutes() {
    if (!this.isDev) {
      this.app.use(
        express.static(path.resolve(__dirname, "../../react-ui/build"))
      );
    }

    this.app.use("/api/example", exampleRouter);

    if (!this.isDev) {
      this.app.get("*", function (request, response) {
        response.sendFile(
          path.resolve(__dirname, "../../react-ui/build", "index.html")
        );
      });
    }
  }

  async connectToDB() {
    try {
      await mongoose.connect(this.dataBaseUrl, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true,
      });

      console.log("Database connection successful");
    } catch (err) {
      console.log("Database connection unsuccessful");
      console.log(err.message);
      process.exit(1);
    }
  }

  startListening() {
    this.app.listen(this.port, () =>
      console.log(`Listening on port: ${this.port}`)
    );
  }
}

module.exports = Server;
