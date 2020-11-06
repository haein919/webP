// jq_03-1_scroll.js

(function($){
  var win = $(window); // 브라우저를 말하는 것으로 괄호 안 따옴표 쓰지 않음
  var wrap = $('#wrap');
  // wrap.height(3000); // 아래와 같은 것으로 단위 쓰지 않아도 됨
  wrap.css({'height':3000+'px', 'backgroundImage':'linear-gradient(45deg, #ccc, #fca)'});

  /** offset
   * 선택자.offset().top , 선택자.offset().left 
   * -> 브라우저기준 0,0 좌표에서부터 선택자가 얼만큼 떨어져 있는지를 판단하는 기능
  */

  var fix = $('.fix');
  var offsetTop = fix.offset().top; // 선택자가 얼만큼 떨어져있는가?
  // console.log(offsetTop); // 위에서부터 얼마나 떨어져있는지 알려주는 것

  win.on('scroll', function(){
    var st = win.scrollTop(); // 스크롤이 얼만큼 이동했는가?
    console.log(st);

    if(offsetTop < st){
      fix.css({'position':'fixed'});
    }else{
      // fix.css({'position':'relative'});
      fix.removeAttr('style');
    }
  });

})(jQuery);