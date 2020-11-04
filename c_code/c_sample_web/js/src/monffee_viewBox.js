// monffee_viewBox.js
(function($){
  var viewBox = $('#viewBox');
  viewBox.css({'overflow': 'hidden'});
  var backImg = viewBox.find('.back_image');
  var backLi = backImg.find('li');
  var permission =true; // 일정 텀을 두고 
  // 순서를 언급시에는 eq()메소드를 사용 0~...., -1,-2......fa-js
  // 복제의 기능은 clone() -> 복제된 기능을 원본처럼 수행하게 하려면 true라는 매개변수 입력
  // console.log(backLi);

  var indicator = viewBox.find('.slide_indicator');
  var indiLi = indicator.find('li');

  // 마지막광고요소 복제에 의한 내용변경
  var backLiLast = backLi.eq(-1).clone(); // 마지막광고영역 복제
  backImg.prepend(backLiLast); // 복제한 것 맨 앞에 추가
  var reBackLi = backImg.find('li'); // 복제 후 갯수 재파악
  backImg.css({ 'marginLeft':-100 + '%', 'width': reBackLi.length * 100 +'%'}); // 크기 변경
  reBackLi.css({ 'width': (100 / reBackLi.length) + '%' }); // 내부요소 크기 변경
 
  // 슬라이드 버튼
  var slideBtn = viewBox.find('.slide_btn');
  var nextSlideBtn = slideBtn.children('button').eq(0); // next 버튼
  var prevSlideBtn = slideBtn.children('button').eq(1); // prev 버튼
  // console.log(nextSlideBtn, prevSlideBtn);
  var slideN = 0;
  nextSlideBtn.on('click', function(e){
    // a, button 기능처럼 이벤트 기능이 이미 내장된 요소는 미리 이벤트 기능을 제거할 필요가 있다.
    // a 가 가진 기능 -> 페이지 이동(href) / button : submit 
    e.preventDefault();
    if(permission){
      permission = false;
      slideN +=1;
      // if(){}else{}
      // 콜백함수
      backImg.stop().animate({'left':slideN * -100 + '%'}, function(){
        if(slideN >= backLi.length-1){
          slideN =-1;
          backImg.stop().css({'left':slideN * -100 + '%'});
        }
        setTimeout(function(){
          permission = true;
        }, 100);
      });
      indiLi.eq(slideN).siblings().removeClass('action');
      indiLi.eq(slideN).addClass('action');
    }
  });

  prevSlideBtn.on('click', function(e){
    e.preventDefault();
    if(permission){
      permission = false;
        slideN -=1;
        backImg.stop().animate({'left':slideN * -100 + '%' }, function(){
          if(slideN <= -1){
            slideN = backLi.length-1;
            backImg.stop().css({'left':slideN * -100 + '%' });
          }
          setTimeout(function(){ permission = true; }, 1000);
      });
      indiLi.eq(slideN).siblings().removeClass('action');
      indiLi.eq(slideN).addClass('action');
    }
  });
// -------------------------------------------------------------------
// indicator로 광고슬라이드 통제 기능
indiLi.on('click', function(e){
  e.preventDefault();
  var its = $(this);
  var slideN = its.index();
  // console.log(slideN);
  backImg.stop().animate({'left': slideN * -100 + '%'});
  // indiLi.removeClass('action'); // <-아래와 동일한 명령이지만 아래형식 추천
  indiLi.eq(slideN).siblings().removeClass('action');
  indiLi.eq(slideN).addClass('action');
});
// -------------------------------------------------------------------------
indiLi.children('a').on('focus', function(e){
  e.preventDefault();
  var its = $(this);
  slideN = its.parent().index();
  backImg.stop().animate({'left': slideN * -100 + '%'});
  indiLi.eq(slideN).siblings().removeClass('action');
  indiLi.eq(slideN).addClass('action');
});

})(jQuery);

/** jQuery 선택자
 * #box  -> $('#box');
 * .box  -> $('.box');
 * ul>li -> $('ul>li);  -> $('ul').childern('li');
 * ul li -> $('ul li'); -> $('ul').find('li');
 * dt+dd -> $('dt+dd'); -> $('dt').next('dd');
 * dt~dd -> $('dt~dd'); -> $('dt').nextAll('dd');
 * 이전형제선택         -> $('dt').prev('dd');
 * 이전형제모두         -> $('dt').pervAll('dd');
 * 자신을 제외한 형제   -> $('dt').siblings('dd');
 * 부모형제를 선택      -> $('dt').parent('dl');   $('dt').parentUntil('dd');
// ----------------------------------------------------------------------------------
 ** css
 선택자.style.backgroundColor = #acf;
 선택자.style = 'backgroundColor:#fca; color:#fff';
 선택자.css({속성명:속성값 , 속성명:속성값 ... });
*/
/*
var reFn = function(i){
  i +=1;
  console.log(i);
  if(i < 20){
    reFn(i);
  }
  else{ console.log('i는 20이 되었습니다.'); }

}
reFn(1);
*/
/* jQuery에서 콜백함수란?
   하나의 메소드(함수)를 수행한 후에, 다시 함수를 수행할 수 있도록 처리하는 형태
   단, animation 기능을 가진 메소드 내 및 이벤트에서만 콜백함수 기능을 가질 수 있다.

   선택자.on('click', function(){
     선택자.animate({기능수행}, function(){})
   })
*/

