// ex_07_mousewheel.js

(function($){
  // var win = $(window);
  var web = $('html, body');
  var wrap = $('#wrap');
  var permission = true;
  var count = 0;
  var pageOffset = [];
  var pageRoll = $('.page_roll');
  var i = 0;
  for(; i<pageRoll.length; i+=1){
    pageOffset[i] = pageRoll.eq(i).offset().top;
  }
  // console.log(pageOffset);

  web.animate({scrollTop:pageOffset[0]}); // 새로고침 시 상단으로 이동하기
  wrap.on('mousewheel DOMMouseScroll', function(e){ //DOMMouseScroll은 파이어폭스용
    e.preventDefault();
    if(permission){
      permission = false;
    
    // 마우스휠 움직임 파악
    // - 파이어폭스외 다른 브라우저 용
    // console.log(e.originalEvent.wheelDelta);
    // - 파이어폭스
    // console.log(e.originalEvent.detail);

    var eOriginal = e.originalEvent;
    // 수치값을 가질 수 있는지 확인 여부(반대성향으로 처리)
    // console.log(!eOriginal.wheelDelta);
    var mWheel;
    if(!eOriginal.wheelDelta){ // 파이어폭스 브라우저에서 처리하는 내용
      mWheel = eOriginal.detail * -40; // 3또는 -3의 값을 가짐 // -40을 곱하게되면 120또는 -120이 되기때문에 이외의 브라우저와 같은 값을 갖게 해줌
    }else{
      // 파이어폭스 이외의 브라우저
      mWheel = eOriginal.wheelDelta; // -120또는 120의 값을 가짐
     }
    //  console.log(mWheel);
     if(mWheel < 0 && count < pageOffset.length-1){ // 휠을 아래로 스크롤 시
      count += 1;
     }else if(mWheel > 0 && count > 0){ // 휠을 위로 스크롤 시
      count -= 1;
     }
    //  console.log(count, ':', pageOffset[count]);
    web.animate({scrollTop:pageOffset[count] + 'px'}, function(){
      setTimeout(function(){
        permission = true;
      },100);
    });
// ---------------------------------------------------------------------------------------------------
     // 터치마우스 또는 노트북에 있는 터치패드, 트랙패드 ....의 경우에는 수치가 일정하지 않음
     // --> if문을 이용하여 처리
    } // if(permission)
  });

})(jQuery);