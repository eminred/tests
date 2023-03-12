$(document).ready(() => {
  $('.block').filter((ndx, item) => {
      return $(item).attr('id') === 'uniq';
  }).css('color', 'red');

});