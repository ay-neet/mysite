$(function(){

  /* headのボタン */
  $('header a').click(function(){
    var id = $(this).attr('href');
    var pos = $(id).offset().top;

    $('html, body').animate({
      'scrollTop': pos }, 1000);
  });
});
