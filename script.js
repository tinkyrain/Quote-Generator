$(document).ready(function () {
  getQuote();

  function getQuote(){
    $.getJSON('http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=?&lang=ru',
    function(quoteObj){
      $('#Quote').html(quoteObj.quoteText);

      if(quoteObj.quoteAuthor === ''){
        $('#author').html('Неизвестный');
      } else {
        $('#author').html(quoteObj.quoteAuthor);
      }
      
    });
    return;
  }

  $('#button').click(getQuote);

  setTimeout(function(){
	   $('body').addClass('body_visible');
  }, 200);
});
