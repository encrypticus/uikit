/**
 * Обрабатывает pug-модули;
 * pug-html-loader кодирует содержимое в строковую переменную, и передает содержимое строки в цепочку загрузчиков.
 * Подробнее про загрузчик: https://github.com/willyelm/pug-html-loader.
 *
 * @param {boolean} pretty булево значение, в зависимости от которого будет или нет минифицироваться сгенерированный код
 * @returns {{module: {rules: [null]}}} конфиг лоадера
 */
module.exports = function (pretty = true) {

  return {

    module: {

      rules: [
        {
          test: /\.pug$/,
          use: [
              "html-loader",
            {
              loader: "pug-html-loader",
              options: {
                pretty: pretty ? true: false,
                exports: false
              }
            }
          ]
        }
      ]

    }
  }

};