const CleanWebpackPlugin = require("clean-webpack-plugin");// очищает папку сборки перед пересборкой
const options = ["dist"];

/**
 * Очищает папку сборки перед пересборкой
 * @param {Array.<string>} params список директорий, подлежащих очистке
 * Подробнее об опциях: https://github.com/johnagan/clean-webpack-plugin#options-and-defaults-optional
 * @returns {{plugins: [null]}} конфиг сборщика
 */
module.exports = function (params = options) {

  return {

    plugins: [
      new CleanWebpackPlugin(params)
    ]
  }
};