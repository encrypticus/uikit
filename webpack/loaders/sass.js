const MiniCssExtractPlugin = require("mini-css-extract-plugin");// обрабатывает css
const autoprefixer = require("autoprefixer");

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
            `css-loader?sourceMap=${loadMap ? true : false}`,
            {
              loader: "postcss-loader",
              options: {
                plugins: () => [autoprefixer()]
              }
            },
            `sass-loader?sourceMap=${loadMap ? true : false}`
          ]
        }
      ]

    }
  }

};