// ex_11_mousemove.js

(function($){
 // jQuery start
 var wrap = $('#wrap');
 var ch = wrap.find('.charactor');

 wrap.on('mouseenter', function(){ ch.show(); });
 wrap.on('mouseleave', function(){ ch.hide(); });
 
 wrap.on('mousemove', function(e){
   e.preventDefault();
   var eOrigin = e.originalEvent;
   
   // 가로, 세로값 확인
   var w = $(this).outerWidth() / 2;
   var h = $(this).outerHeight() / 2;

   // 지정 문서의 떨어진 곳 파악
   var ofX= $(this).offset().left; // 왼쪽에서부터 얼마나 떨어졌는지
   var ofY= $(this).offset().top; // 위에서부터 얼마나 떨어졌는지

   // x,y 좌표 확인
   // offsetX값을 사용하면, 내부요소와 겹침현상이 발생 그에따라 위치값이 변경됨
   // 따라서 열려있는 문서의 위치를 기준으로 좌표를 생성. 이로인해 offset() 메서드가 필요
   var x = eOrigin.pageX;
   var y = eOrigin.pageY;

  //  console.log( w - (x-ofX), h - (y-ofY));
  //  ch.css({ left: (x/2) + 'px', top: (y/5) + 'px'}); // 움직이게 하는 식

  var setX = w - (x-ofX);
  var setY = h - (y-ofY);

  ch.css({transform:'translate('+ setX/10 +'px,'+ setY/10 +'px)'});

 })

 // jQuery end
})(jQuery);
