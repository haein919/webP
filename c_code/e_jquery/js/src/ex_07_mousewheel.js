// ex_07_mousewheel.js

(function($){
  var wrap = $('#wrap');
  wrap.on('mousewheel DOMMouseScroll', function(e){
    
    // 마우스휠 움직임 파악
    // - 파이어폭스외 다른 브라우저 용
    // console.log(e.originalEvent.wheelDelta);
    // - 파이어폭스
    // console.log(e.originalEvent.detail);

    var eOriginal = e.originalEvent;
    console.log(!eOriginal.wheelDelta);
  });

})(jQuery);