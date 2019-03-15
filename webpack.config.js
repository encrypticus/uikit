const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");// создает index.html из index.pug
const CleanWebpackPlugin = require("clean-webpack-plugin");// очищает папку сборки перед пересборкой
const MiniCssExtractPlugin = require("mini-css-extract-plugin");// обрабатывает css
const styleLintPlugin = require("stylelint-webpack-plugin"); // линтер стилевых файлов
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin"); // минификатор css
const UglifyJsPlugin = require("uglifyjs-webpack-plugin"); // минификатор js
const autoprefixer = require("autoprefixer");

// функция вторым аргументом принимает args.mode от прописанных в package.json скриптов: args.mode = development или args.mode = production
module.exports = (env, args) => {

  if (args.mode !== "development" && args.mode !== "production") {
    args.mode = "development";
  }

  let mode = "development";
  let isDev = mode === args.mode; //флаг, указывающий режим сборки

  const config = {
    entry: './src/index.js',// точка входа

    output: {// точка выхода
      filename: 'scripts.js', // имя выходного js-файла
      path: path.resolve(__dirname, 'dist'),// директория, в которой будет лежать выходной файл
    },

    optimization: {// минификация css и js в prod-режиме
      minimizer: [
        // Параметр optimization.minimizer переопределяет значения по умолчанию, предоставляемые сборщиком,
        // поэтому нужно обязательно указать также JS minimizer:
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
        }),
        // минификация css
        new OptimizeCSSAssetsPlugin({})
      ]
    },

    module: {// модули, обрабатывающие файлы с указанным расширением
      rules: [
        {
          test: /\.pug$/,
          loaders: [
            "html-loader",
            // минифицировать или нет index.html в зависимости от режима сборки
            `pug-html-loader?{"pretty": ${isDev ? true : false}, "exports": false}`
          ]
        }
      ]
    },

    plugins: [
      // преобразует uikit.pug в index.html и кладет в папку dist
      new HtmlWebpackPlugin({
        filename: "uikit.html",
        template: "src/pages/uikit.pug"
      }),

      // преобразует index.pug в index.html и кладет в папку dist
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "src/pages/index.pug"
      })
    ]
  }

  return config;
}