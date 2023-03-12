/*$(document).ready(()=>{

let result = $('.content').closest('.outer');

console.log(result);
})*/

$(document).ready(()=>{

  let result = $('.top').nextAll('.outer') //prev - метод соседям сверху, siblings - соседи сверху и снизу, parent - родительский блок для outer это body

  console.log(result);
})