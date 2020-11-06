// ex_02_accordion.js

(function($){
  var part = $('.part');
  var accorDl = part.children('.accor');
  var accorDt = accorDl.children('dt');
  var accorDd = accorDl.children('dd');

  accorDt.on('click',['a'], function(e){
    e.preventDefault();
    var it = $(this);
    it.next('dd').stop().slideToggle(function(){
      var itDdDisplay = it.next('dd').css('display');
      // console.log(itDdDisplay);
      if(itDdDisplay === 'block'){
        it.addClass('action');
        it.siblings().removeClass('action');
      }else if(itDdDisplay === 'none'){
        it.removeClass('action');
      }
    });
    it.siblings('dt').next('dd').stop().slideUp();
  });
})(jQuery);