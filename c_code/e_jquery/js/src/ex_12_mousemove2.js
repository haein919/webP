// ex_12_mousemove2.js

(function($){
 // jQuery start
 var part = $('.part');
 var partOffsetX = part.offset().left;
 var partW = part.width();
 var per = 193;

 // .part 내부에 img를 생성하고 주소값을 연결
 var i = 0;
 var k;
 var fn = '../img/surfing/move_img_';
 for(; i<per; i++){
   if(i < 9){
     k = '00' + (i + 1);
   }else if(i < 99){
     k= '0' + (i + 1);
   }else{
     k = (i + 1);
   }
   part.append('<img src="'+ fn + k +'.png" alt="마우스 움직일 경우 나타나는 이미지" />');
 } // for();

// part.children('img').not( part.children('img').eq(0) ).hide(); // 아래와 같음
 var partImg = part.children('img');
 partImg.hide();
 partImg.eq(0).show();

 part.on('mousemove', function(e){
   var x = e.originalEvent.pageX;
   var myX = x - partOffsetX;
   var mySetPer = parseInt(myX / partW * per); 
  //  console.log(mySetPer);
  partImg.eq(mySetPer).show();
  partImg.eq(mySetPer).siblings('img').hide();
 });

 // jQuery end
})(jQuery);
