import './datepicker';

$.fn.datepicker.language['en'] = {
  days: ['Sunday', 'Mondey', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  daysMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
  today: 'Today',
  clear: 'Очистить',
  dateFormat: 'dd.mm.yyyy',
  timeFormat: 'hh:ii',
  firstDay: 1,
};

const $datepickerHeadres = $('.datepicker-header');
$datepickerHeadres.text(new Date().getDate());

$('.datepicker-here').datepicker({
  language: 'en',
  todayButton: new Date(),
  onSelect(formattedDate, date, inst) {
    const $datepickerHeader = $('.datepicker-header', inst.el);
    $datepickerHeader.text(date.getDate());
  },
  navTitles: {
    days: 'MM',
  },
  prevHtml: '<svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16"><g><g><path fill="#fff" d="M7.76.237L9.441 1.92 3.522 7.84l5.92 5.921-1.683 1.683L.185 7.871l.03-.03-.03-.03z"/></g></g></svg>',
  nextHtml: '<svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16"><g><g><path fill="#fff" d="M9.815 7.811l-.03.03.03.03-7.574 7.574-1.683-1.683 5.92-5.921L.559 1.92 2.24.237z"/></g></g></svg>',
});
