const merge = require("webpack-merge");
const baseConfigGenerator = require("./webpack.config.base.js");
const prodConfig = require("./webpack.config.prod.js");
const devConfig = require("./webpack.config.dev.js");
function webpackEnviromentSelector(env) {
  let config;
  if (env.production) config = prodConfig;
  if (env.development) config = devConfig;
  const baseConfig = baseConfigGenerator(env);
  return merge(baseConfig, config);
}
module.exports = webpackEnviromentSelector;
const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtract = require("mini-css-extract-plugin");
const basePath = __dirname;
const distPath = "dist";
const indextInput = "./src/index.html";
const indexOutput = "index.html";
function webpackConfigGenerator(env) {
  const sourcemaps = !!env.development;
  const webpackInitConfig = {
    resolve: {
      extensions: [".js", ".ts"],
    },
    entry: {
      app: ["@babel/polyfill", "./src/index.js"],
    },
    output: {
      path: path.join(basePath, distPath),
      filename: "[chunkhash][name].js",
    },
    module: {
      rules: [
        {
          test: /\.js/,
          exclude: /node_modules/,
          use: ["babel-loader", "eslint-loader"],
        },
        {
          test: /\.ts/,
          exclude: /node_modules/,
          use: ["ts-loader"],
        },
        {
          test: /\.css/,
          exclude: /node_modules/,
          use: [
            MiniCSSExtract.loader,
            { loader: "css-loader", options: { sourceMap: sourcemaps } },
            { loader: "postcss-loader", options: { sourceMap: sourcemaps } },
          ],
        },
        {
          test: /\.less/,
          exclude: /node_modules/,
          use: [
            MiniCSSExtract.loader,
            { loader: "css-loader", options: { sourceMap: sourcemaps } },
            { loader: "postcss-loader", options: { sourceMap: sourcemaps } },
            { loader: "less-loader", options: { sourceMap: sourcemaps } },
          ],
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                // outputPath: 'images/',
                // publicPath: 'images/',
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new HTMLWebpackPlugin({
        filename: indexOutput,
        template: indextInput,
      }),
      new MiniCSSExtract({
        filename: "[name].css",
        chunkFilename: "[id].css",
      }),
      new webpack.DefinePlugin({
        ENV: JSON.stringify(env),
      }),
    ],
  };
  return webpackInitConfig;
}
module.exports = webpackConfigGenerator;
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const webpackConfig = {
  mode: "production",
  plugins: [new OptimizeCssAssetsPlugin()],
};
module.exports = webpackConfig;
const webpackConfig = {
  mode: "development",
  devtool: "inline-source-map",
};
module.exports = webpackConfig;
