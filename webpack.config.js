const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");// создает index.html из index.pug
const CleanWebpackPlugin = require("clean-webpack-plugin");// очищает папку сборки перед пересборкой
const styleLintPlugin = require("stylelint-webpack-plugin"); // линтер стилевых файлов
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin"); // минификатор css
const UglifyJsPlugin = require("uglifyjs-webpack-plugin"); // минификатор js
const merge = require("webpack-merge"); // объединяет массивы и объекты конфигураций из нескольких файлов-модулей

const pug = require("./webpack/loaders/pug"); // модуль обработки pug-файлов
const sass = require("./webpack/loaders/sass"); // модуль обработки sass|scss-файлов
const miniCssExtractPlugin = require("./webpack/plugins/miniCssExtractPlugin");// модуль обработки css-файлов

// функция вторым аргументом принимает args.mode от прописанных в package.json скриптов: args.mode = development или args.mode = production
module.exports = (env, args) => {

  if (args.mode !== "development" && args.mode !== "production") {
    args.mode = "development";
  }

  let mode = "development";
  let isDev = mode === args.mode; //флаг, указывающий режим сборки

  const config = merge({
    entry: "./src/index.js",// точка входа

    output: {// точка выхода
      filename: "scripts.js", // имя выходного js-файла
      path: path.resolve(__dirname, "dist"),// директория, в которой будет лежать выходной файл
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

    watch: true,// отслеживать файлы в директории src для горячей пересборки

    module: {// модули, обрабатывающие файлы с указанным расширением
      rules: [

        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },

        // {
        //   test: /\.pug$/,
        //   loaders: [
        //     "html-loader",
        //     // минифицировать или нет index.html в зависимости от режима сборки
        //     `pug-html-loader?{"pretty": ${isDev ? true : false}, "exports": false}`
        //   ]
        // },

        // {
        //   test: /\.(scss|sass)$/,
        //   use: [
        //     MiniCssExtractPlugin.loader,
        //     // генерация sourcemap в зависимости от режима сборки; для того чтобы карта сгенерировалась обязательно
        //     // нужно у обоих лоадеров: sass-loader и css-loader установить параметр sourceMap=true + прописать
        //     // свойство сборщика "devtool: 'source-map'"
        //     `css-loader?sourceMap=${isDev ? true : false}`,
        //     {
        //       loader: "postcss-loader",
        //       options: {
        //         plugins: () => [autoprefixer()]
        //       }
        //     },
        //     `sass-loader?sourceMap=${isDev ? true : false}`
        //   ]
        // },

        {// обработка шрифтов
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          loader: 'file-loader?name=./fonts/[name].[ext]',
        },

        {// обработка svg-шрифтов
          test: /\.svg$/,
          exclude: [/img/],
          loader: 'file-loader?name=./fonts/[name].[ext]'
        }
      ]
    },

    plugins: [
      // преобразует uikit.pug в uikit.html и кладет в папку dist
      new HtmlWebpackPlugin({
        filename: "uikit.html",
        template: "src/pages/uikit.pug"
      }),

      // преобразует index.pug в index.html и кладет в папку dist
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "src/pages/index.pug"
      })/*,

      // извлекает файл стилей и кладет в папку dist
      new MiniCssExtractPlugin({
        filename: "styles.css",
        chunkFilename: "[id].css"
      })*/
    ]
  }, miniCssExtractPlugin());

  if (isDev) {
    // генерировать карту кода
    config.devtool = "source-map";

    return merge(
        config,
        pug(true),
        sass(true),
        // miniCssExtractPlugin()
    );
  }

  if (!isDev) { // в режиме продакшн
    // очищать папку dist перед сборкой
    config.plugins.push(new CleanWebpackPlugin(['dist']));// в параметре директория, подлежащая очистке

    return merge(
        config,
        pug(false),
        sass(false),
        // miniCssExtractPlugin()
    );
  }

  // return config;
}