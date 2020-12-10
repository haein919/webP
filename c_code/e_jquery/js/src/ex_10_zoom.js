// ex_10_zoom.js

(function($){
 // jQuery start
 $.ajax({
  url:"../data/zoom_img.json",
  dataType:'json',
  context:document.body

 }).done(function(data){
  var imgData = data; 
  var imgUrl = '../img/zoom/';

  var viewArea = $('.view_area');
  var product = viewArea.find('.product');
  var viewLi = viewArea.find('li');
  var viewLink = viewLi.children('a');
  var scaleArea = $('.scale_area');

  var i = viewLi.length-1;
  var vLink;
  for(; i >= 0; --i ){
    vLink = viewLi.eq(i).children('a');
    vLink.css({backgroundImage:'url('+ imgUrl+ imgData[i].thum +')'});
  }

  var setImg = function(n){
    var myN = n || 0;
    product.css({ backgroundImage:'url(' + imgUrl + imgData[myN].detail +')'});
    scaleArea.css({ backgroundImage:'url(' + imgUrl + imgData[myN].detail +')'});
  };
  setImg();

  // viewLink 클릭
  viewLink.on('click', function(e){
    e.preventDefault();
    var index = $(this).parent('li').index();
    setImg(index);
  });

  scaleArea.hide();
  // product 마우스 올렸을 때 처리
  product.on('mouseenter', function(e){
    scaleArea.stop().fadeIn();
  });
  product.on('mouseleave', function(e){
    scaleArea.stop().fadeOut();
  });
  product.on('mousemove', function(e){
    e.preventDefault();
    var thisWidth = $(this).outerWidth();
    var thisHeight = $(this).outerHeight();

    var x = e.originalEvent.offsetX;
    var y = e.originalEvent.offsetY;

    var xPer = x / thisWidth * 100;
    var yPer = y / thisHeight * 100;
    // console.log(x,y);

    scaleArea.css({backgroundPosition: xPer + '%' + ' ' + yPer + '%'});
  });
  // clientX : 브라우저크기(window)를 기준으로 x,y 좌표 확인
  // screenX : 보여지는 화면크기(모니터)를 기준으로 x,y 좌표 확인 -> 듀얼모니터인 경우 듀얼모니터 화면 크기 기준
  // offsetX : 이벤트 대상을 기준으로 x,y 좌표 확인
  // pageX : 전체 문서를 기준으로(document 브라우저 내부에 있는 화면 )

 }); // $.ajax()

 // jQuery end
})(jQuery);
