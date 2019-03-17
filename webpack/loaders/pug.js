/**
 * Обрабатывает pug-модули;
 * pug-html-loader кодирует содержимое в строковую переменную, и передает содержимое строки в цепочку загрузчиков
 * @param {boolean} pretty булево значение, в зависимости от которого будет или нет минифицироваться сгенерированный код
 * @returns {{module: {rules: [null]}}} конфиг лоадера
 */
module.exports = function (pretty = true) {

  return {

    module: {

      rules: [
        {
          test: /\.pug$/,
          loaders: [
              "html-loader",
            // минифицировать или нет index.html в зависимости от режима сборки
            `pug-html-loader?{"pretty": ${pretty ? true : false}, "exports": false}`
          ]
        }
      ]

    }
  }

};