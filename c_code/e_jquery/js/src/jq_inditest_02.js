// jq_inditest_02.js
(function($){
  var miniProduct = $('#miniProduct');
  var productImg = miniProduct.find('.product');
  var productLi = productImg.find('li');
  var permission = true;

  var indiBtn = miniProduct.find('.indicator');
  var nextBtn = indiBtn.children('button').eq(0);
  var prevBtn = indiBtn.children('button').eq(1);

  var productLiLast = productLi.eq(-1).clone();
  productImg.prepend(productLiLast);
  var reproductLi = productImg.find('li');
  var slideN = 0;
  
  productImg.css({ 'margin-left': -100 + '%', 'width' : reproductLi.length * 100 +'%' });
  reproductLi.css({'width': (100/reproductLi.length) + '%' });

  nextBtn.on('click', function(e){
    e.preventDefault();
    if(permission){
      permission=false;
      slideN +=1;
      productImg.stop().animate({'left':slideN * -100 + '%' }, function(){
        if(slideN >= productLi.length-1){
          slideN = -1;
          productImg.stop().css({'left':slideN * -100 + '%'});
        }
        setTimeout(function(){
          permission = true;
        },100);
      });
    }
  });
  prevBtn.on('click', function(e){
    e.preventDefault();
    if(permission){
      permission=false;
      slideN -=1;
      productImg.stop().animate({'left':slideN * -100 +'%' }, function(){
        if(slideN <=-1){
          slideN = productLi.length-1;
          productImg.stop().css({'left':slideN * -100 + '%'});
        }
        setTimeout(function(){ permission = true;},100);
      });
    }
  });

})(jQuery);