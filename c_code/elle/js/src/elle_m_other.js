// elle_m_other.js

(function($){
 // jQuery start

 var headBox = $('#headBox');
 
// 검색창 기능
  var searchBtn = headBox.find('.btn_search');
  var searchPop = headBox.find('.searchpop');
  var searchClose = searchPop.find('.pop_close');

  searchBtn.on('click', function(e){
    e.preventDefault();
    searchPop.stop().fadeIn();
  });

  searchClose.on('click', ['button'], function(e){
    e.preventDefault();
    searchPop.stop().fadeOut();
  });

// fashionBox 이미지 slide
  var win = $(window);
  var fashionBox = $('#fashionBox');
  var fashionOuter = fashionBox.find('.fashion_outer');
  var fashionBtn = fashionBox.find('button');
  var fashionTitle = fashionBox.find('h3');
  var fashionImg = fashionBox.find('.fashion_img_area');
  var fashionUl = fashionImg.find('ul');
  var fashionLi = fashionUl.find('li');
  var showN = 0;
  var timed = 1;

  var winH = win.outerHeight(); 
  var offsetTop = fashionBox.offset().top; // 선택자가 얼만큼 떨어져있는지
  // console.log(offsetTop - winH);
  var myfashionOffset = offsetTop - winH /5 *4;
 
// fashion title과 img 애니메이션 적용
  fashionBtn.hide();
  win.on('scroll',function(e){
    var winSt = win.scrollTop();
    if(winSt >= myfashionOffset){
      fashionBtn.stop().fadeIn();
      fashionOuter.addClass('action');
    }else{
      fashionOuter.removeClass('action');
      fashionBtn.stop().fadeOut();
    }
  });

// fashion 이미지 slide
  var showLiImg = function(){
    var nn = fashionUl.children('.action').index();
    return nn;
  };
  fashionLi.hide();
  fashionLi.eq(showN).show().addClass('action');
  var permission = true;

  fashionBtn.on('click', function(e){
    e.preventDefault();
    if(permission){
      permission = false;
      showN +=1;
      if(showN >= fashionLi.length){
        showN = 0;
      }
      fashionLi.eq(showN).stop().show(function(){
        fashionLi.eq( showLiImg() ).stop().fadeOut(function(){
          fashionLi.removeClass('action');
          fashionLi.eq(showN).addClass('action');
          setTimeout(function(){
            permission = true;
          }, timed);
        });
      });
    }
  });

 // jQuery end
})(jQuery);
