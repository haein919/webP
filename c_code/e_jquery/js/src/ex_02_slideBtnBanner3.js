// ex_02_slideBtnBanner3.js

(function($){
  var indiSlide = $('.indicator_horizontal_slide');
  var indicator = indiSlide.find('.indicator');
  var indiLi = indicator.find('li');

  var slideWrap = indiSlide.find('.slide_wrap');
  var slideUl = slideWrap.children('ul');
  var slideLi = slideUl.children('li');
  var sllideLiLink = slideLi.children('a');

  var permission = true;
  var indiSlN = 0;
  var timed = 500;

  // slide_wrap 내부 a에 focus기능 강제 비처리
  sllideLiLink.attr({'tabIndex':'-1'}); 

  var typeTest = function(evt){
    // console.log(evt.type);
    if(permission && evt.type === 'focus'){
      permission = false;
      console.log('포커스 처리되었음');
    }else if(permission && evt.type === 'click'){
      permission = false;
      console.log('클릭 되었음');
    }else { 
      console.log('...');
    }
  };

  // indicator 클릭 시 ul 이동 -> a에 focus 처리로 변경 -> 실제 배너에 a는 별도로 focus 처리
  indiLi.children('a').on('mouseenter focus click', function(e){
    e.preventDefault();
  
    var it= $(this);
    indiSlN = it.parent('li').index();
    indiLi.eq(indiSlN).addClass('action');
    indiLi.eq(indiSlN).siblings().removeClass('action');
    // slideUl.stop().css({'margin-left':indiSlN * -100 + '%'})
    // typeTest(e);

    if(e.type === 'focus' || e.type === 'mouseenter'){
      slideUl.stop().animate({'margin-left': indiSlN * -100 + '%'}, timed);
    }else if(e.type = 'click'){
      setTimeout(function(){
        var thatLink = it.attr('href');
        $(thatLink).attr({'tabIndex':0});
        // $(thatLink).parent('li').siblings().children('a').attr({'tabIndex': -1});  //  아래와 같은 식
        slideLi.eq(indiSlN).siblings().children('a').attr({'tabIndex': -1});
        $(thatLink).focus();
      }, timed + 10);
    }
  }); // indiLi.children('a').on('focus')

  slideLi.find('a').on('blur', function(){
    $(this).attr({'tabIndex': -1});
  });

})(jQuery);