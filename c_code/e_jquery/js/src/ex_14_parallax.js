// ex_14_parallax.js

(function($){
  var win = $(window);
  var viewBox = $('#viewBox');
  var viewBoxHeight = viewBox.outerHeight();
  var viewDiv = viewBox.children('div');

  var sampleBox = $('#sampleBox');
  var sampleUl = sampleBox.children('ul');
  var sampleList = sampleUl.children('li');
  var sampleBoxOffset = sampleBox.offset().top;

  win.on('scroll', function(e){
    var winSt = win.scrollTop();
    var setScroll = winSt/ 100;
    // console.log(winSt);
    var i =0;
    for(; i< viewDiv.length-1; i++){
      viewDiv.eq(i).css({'bottom': -(setScroll* (10 - i) *10)+'px'})
    }

    // viewDiv.eq(0).css({'bottom': -(setScroll*100) + 'px'}); // 사실상 스크롤에 따라 움직이고 있음
    // viewDiv.eq(1).css({'bottom': -(setScroll*90) + 'px'}); 
    // viewDiv.eq(2).css({'bottom': -(setScroll*80) + 'px'}); 
    // viewDiv.eq(3).css({'bottom': -(setScroll*70) + 'px'}); 
    // viewDiv.eq(4).css({'bottom': -(setScroll*60) + 'px'}); 
    // viewDiv.eq(5).css({'bottom': -(setScroll*50) + 'px'}); 
    // viewDiv.eq(6).css({'bottom': -(setScroll*40) + 'px'}); 
    // viewDiv.eq(7).css({'bottom': -(setScroll*30) + 'px'}); 
    // viewDiv.eq(8).css({'bottom': -(setScroll*20) + 'px'});

    // sampleBox 영역 이미지
    if( winSt+viewBoxHeight > sampleBoxOffset ){ // winSt+viewBoxHeight - sampleBoxOffset 가 스크롤 값의 시작점이 된다
      var winR = ((winSt + viewBoxHeight) - sampleBoxOffset) / viewBoxHeight * 100; // viewBoxHeight가 기준치
      console.log(winR);
      sampleList.css({ 'background-positionY':(100 - ( winR / 2 )) + '%' }); // 이미지가 어떤 사이즈에 관계없이 영역 밖을 벗어나도 이미지가 사라지지 않게 하기위해 %를 쓴다.
    }


  });

 // jQuery end
})(jQuery);
