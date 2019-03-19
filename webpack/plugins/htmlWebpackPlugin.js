const HtmlWebpackPlugin = require("html-webpack-plugin");// генерирует html-файл в папке назначения
let options = {filename: "index.html", template: "src/index.html"}

/**
 * Генерирует html-файл в папке назначения
 * @param {object} params список опций плагина. Список всех опций: https://github.com/jantimon/html-webpack-plugin#options
 * @returns {{plugins: [null]}} конфиг сборщика
 */
module.exports = function (params = options) {

  return {

    plugins: [
      new HtmlWebpackPlugin(params)
    ]
  }

};