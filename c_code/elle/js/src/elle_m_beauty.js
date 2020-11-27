// elle_m_beauty.js

(function($){
  // jQuery start

 // beautyBox 이미지 slide
 var beautyBox = $('#beautyBox');
 var beautyBtn = beautyBox.find('button');
 var beautyImg = beautyBox.find('.beauty_img_area');
 var beautyUl = beautyImg.find('ul');
 var beautyLi = beautyUl.find('li');
 var permission = true;

 beautyImg.css({'overflow':'hidden'});

 // 이미지 전체 복사
 var beautySize = function(){
  var copyImg = beautyLi.clone();
  beautyUl.append(copyImg);
  var rebeautyLi = beautyUl.find('li');
  var slideN = 0;
  var beautiLiMargin = parseFloat(rebeautyLi.css('marginRight')); // li의 margin-right값을 소수점까지 측정
  //  console.log(beautiLiMargin);
  var beautiUlWidth = beautyImg.width() * rebeautyLi.length / 2; // ul넓이 측정(ul부모 * 복사된 전체 li길이 나누기 2)
  
  beautyUl.css({'width':rebeautyLi.length * 100 + '%'}); // ul css값 중 넓이 값 변경
  rebeautyLi.css({'width':beautiUlWidth /  rebeautyLi.length /2 - beautiLiMargin + 'px'});
  var beautyLiWidth = beautyLi.outerWidth(true);

  beautyBtn.on('click', function(e){
    e.preventDefault();
    if(permission){
      permission = false;
      slideN +=1;
      beautyUl.stop().animate({ 'margin-left':-beautyLiWidth * slideN },function(){
        if(slideN > beautyLi.length-1){
          slideN = 0;
          beautyUl.stop().css({'margin-left':-beautyLiWidth  * slideN});
        }
        setTimeout(function(){
          permission = true;
        },100);
      });
    }
  });
};
beautySize();
$(window).on('resize', function(){
  beautySize();
});
// jQuery end
})(jQuery);