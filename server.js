const express = require("express");
const devConfig = require("./webpack.config");
const webpack = require("webpack");
const path = require("path");

const app = express();

app.use("/assets", express.static("public"));

// app.use(express.static(__dirname + "/assets"));

const port = 8080;

const devModeEnabled = true;

if (devModeEnabled) {
  const compiler = webpack(devConfig);

  const webpackDevMiddleware = require("webpack-dev-middleware")(compiler, {
    publicPath: devConfig.output.publicPath,
  });

  console.log("running dev");
  app.use(webpackDevMiddleware);
}

app.listen(port, () => {
  console.log("server running at port 8080");
});
