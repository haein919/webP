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
  var fashionBtn = fashionBox.find('button');
  var fashionTitle = fashionBox.find('h3');
  var fashionImg = fashionBox.find('.fashion_img_area');
  var fashionUl = fashionImg.find('ul');
  var fashionLi = fashionUl.find('li');
  var showN = 0;
  var timed = 1;
 
  fashionImg.hide();
  fashionBtn.hide();
  fashionTitle.hide();
  win.on('scroll',function(e){
    var winSt = win.scrollTop();
    if(winSt >= 500){
      fashionImg.stop().fadeIn();
      fashionBtn.stop().fadeIn();
      fashionTitle.stop().fadeIn();
      // fashionTitle.stop().animate({'left':10+'%', 'opacity':1});
    }
  });


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
