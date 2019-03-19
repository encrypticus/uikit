const MiniCssExtractPlugin = require("mini-css-extract-plugin");// обрабатывает css
const autoprefixer = require("autoprefixer");

/**
 * Обрабатывает sass|scss-модули
 * @param loadMap {boolean} булево значение, в зависимости от которого будет или нет генериться карта кода
 * @returns {{module: {rules: [null]}}} конфиг лоадера
 */
module.exports = function (loadMap) {

  return {

    module: {

      rules: [
        {
          test: /\.(scss|sass)$/,
          use: [
            MiniCssExtractPlugin.loader,
            // генерация sourcemap в зависимости от режима сборки; для того чтобы карта сгенерировалась обязательно
            // нужно у обоих лоадеров: sass-loader и css-loader установить параметр sourceMap=true + прописать
            // свойство сборщика "devtool: 'source-map'"
            // `css-loader?sourceMap=${loadMap ? true : false}`,
            {
              loader: "css-loader",
              options: {
                sourceMap: loadMap ? true : false
              }
            },
            {
              loader: "postcss-loader",
              options: {
                plugins: () => [autoprefixer()]
              }
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: loadMap ? true : false
              }
            }
            // `sass-loader?sourceMap=${loadMap ? true : false}`
          ]
        }
      ]

    }
  }

};