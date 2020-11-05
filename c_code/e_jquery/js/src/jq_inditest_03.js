// jq_inditest_03.js
(function($){
  var miniProduct = $('#miniProduct');
  var productImg = miniProduct.find('.product');
  var productLi = productImg.find('li');
  
  var slideBtn = miniProduct.find('.slide_btn');
  var nextBtn = slideBtn.children('button').eq(0);
  var prevBtn = slideBtn.children('button').eq(1);

  var indicator = miniProduct.find('.indicator');
  var indiLi = indicator.find('li');
  
  var permission = true;

  var productLiLast = productLi.eq(-1).clone();
  productImg.prepend(productLiLast);
  var reproductLi = productImg.find('li');

  productImg.css ({ 'marginLeft': -100 + '%', 'width': reproductLi.length * 100 + '%'});
  reproductLi.css ({ 'width': (100/reproductLi.length) + '%'});

  // 슬라이드 버튼
  var slideN=0;
  nextBtn.on('click', function(e){
    e.preventDefault();
    if(permission){
      permission = false;
      slideN += 1;
      productImg.stop().animate({ 'left': slideN * -100 + '%'}, function(){
        if(slideN >= productLi.lengt-1){
          slideN = -1;
          productImg.stop().css ({ 'left': slideN * -100 + '%' });
        }
        setTimeout(function(){ permission =true; },100);
      });
      indiLi.eq(slideN).siblings().removeClass('action');
      indiLi.eq(slideN).addClass('action');
    }
  });

  prevBtn.on('click', function(e){
    e.preventDefault();
    if(permission){
      permission = false;
      slideN -=1;
      productImg.stop().animate({ 'left': slideN * -100 + '%'}, function(){
        if(slideN <= -1){
          slideN = productLi.length-1;
          productImg.stop().css ({ 'left': slideN * -100 + '%'});
        }
        setTimeout(function(){ permission=true; }, 100);
      });
      indiLi.eq(slideN).siblings().removeClass('action');
      indiLi.eq(slideN).addClass('action');
    }
  });

  // indicator 버튼 영역
  indiLi.on('click', function(e){
    e.preventDefault();
    var its = $(this);
    var slideN = its.index();
    productImg.stop().animate({ 'left': slideN * -100 + '%'});
    indiLi.eq(slideN).siblings().removeClass('action');
    indiLi.eq(slideN).addClass('action');
  });
})(jQuery);