const express = require("express");
const devConfig = require("./webpack.config");
const webpack = require("webpack");
const path = require("path");

const app = express();

app.use("/assets", express.static("public"));

app.use(express.static(__dirname + "/dist"));

const port = process.env.PORT || 8080;

// const devModeEnabled = process.env.NODE_ENV === "development" ? true : false;

// if (!devModeEnabled) {
//   app.use(express.static(__dirname + "/dist"));
// }

// if (devModeEnabled) {
//   const compiler = webpack(devConfig);

//   const webpackDevMiddleware = require("webpack-dev-middleware")(compiler, {
//     publicPath: devConfig.output.publicPath,
//   });

//   const webpackHotMiddleware = require("webpack-hot-middleware")(compiler, {
//     path: "/__webpack_hmr",
//   });

//   app.use(webpackDevMiddleware);

//   app.use(webpackHotMiddleware);
// } else {
//   app.get("/", (_, res) => {
//     res.sendFile(path.join(__dirname, "dist", "index.html"));
//   });
// }

app.get("/", (_, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(port, () => {
  console.log(`server running at port ${port}`);
});
