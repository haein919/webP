// jq_inditest.js
(function($){
  var miniProduct = $('#miniProduct');
  var productImg = miniProduct.find('.product_img');
  var productLi = productImg.find('li');

  var indicator = miniProduct.find('.indicator');
  var indiLi = indicator.find('li');

  indiLi.on('click', function(e){
    e.preventDefault();
    var its = $(this);
    var slideN = its.index();
    productImg.stop().animate({'left':slideN * -100 + '%'});
    indiLi.eq(slideN).siblings().removeClass('action');
    indiLi.eq(slideN).addClass('action');
  });
})(jQuery);