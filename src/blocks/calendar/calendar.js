import "./datepicker.min";

$.fn.datepicker.language['en'] =  {
  days: ['Sunday','Mondey','Вторник','Среда','Четверг','Пятница','Суббота'],
  daysShort: ['Sun','Mon','Вто','Сре','Чет','Пят','Суб'],
  daysMin: ['Su','Mo','Вт','Ср','Чт','Пт','Сб'],
  months: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
  monthsShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
  today: 'Сегодня',
  clear: 'Очистить',
  dateFormat: 'dd.mm.yyyy',
  timeFormat: 'hh:ii',
  firstDay: 1
};

$('.datepicker-here').datepicker({
  language: 'en',
  todayButton: new Date()
});