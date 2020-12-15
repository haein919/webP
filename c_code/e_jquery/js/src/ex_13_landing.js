// ex_13_landing.js
(function($){
 // jQuery start

  var win = $(window);
  var conBox = $('#conBox');
  var moreBox = $('#moreBox');

  var winH = win.outerHeight() / 3;

  var conBoxOffset = conBox.offset().top;
  var moreBoxOffset = moreBox.offset().top;
  console.log(conBoxOffset, moreBoxOffset);
  win.on('scroll', function(e){
    e.preventDefault();
    var getScroll = win.scrollTop(); // 스크롤 값
    // console.log(getScroll);
    var conScroll;

    // 스크롤값이, conBox의 offset().top만큼(에서 브라우저 높이값 일부 빠진만큼) 보다 크면 수행
    if(getScroll >= conBoxOffset - winH){
      conBox.addClass('action');
      conScroll = getScroll - (conBoxOffset -winH); // parallax 기능 수행
      console.log('conScroll', conScroll);
      conBox.css({'backgroundPositionY':(-conScroll/3)+'px'}); // parallax 기능 수행
    }else{
      conBox.removeClass('action');
    }
    // moreBox offset().top(에서 브라우저 높이값 일부 빠진만큼)보다 크면 수행
    // 더 값이 커졌을 때, moreBox offset 값이 화면의 상단에 위치하면 수행
    // 조건문에서는 앞의 기능이 참이면, 뒤의 값은 전혀 수행하지 않는다
    if(getScroll >= moreBoxOffset){
      moreBox.addClass('more');
      moreBox.removeClass('action');
    }else if(getScroll >= moreBoxOffset - winH){
      moreBox.addClass('action');
      moreBox.removeClass('more');
    }else{
      moreBox.removeClass('action');
      moreBox.removeClass('more');
    }
  });

 // jQuery end
})(jQuery);
