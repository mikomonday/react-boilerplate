const express = require('express');
const webpack = require('webpack');
const devMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./webpack.config');

const app = express();
const port = 3000;
// const env = process.env.NODE_ENV;

// HMR
const compiler = webpack(webpackConfig);
app.use(devMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
}));
app.use(webpackHotMiddleware(compiler));

app.use(express.static('dist'));

app.listen(port, () => console.log(`Application listening on port ${port}`));
