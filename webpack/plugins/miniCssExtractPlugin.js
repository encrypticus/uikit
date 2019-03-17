const MiniCssExtractPlugin = require("mini-css-extract-plugin");// обрабатывает css

module.exports = function (path = "styles.css") {

  return {

    plugins: [
      // извлекает файл стилей и кладет в папку dist
      new MiniCssExtractPlugin({
        filename: path,
        chunkFilename: "[id].css"
      })
    ]
  }
}