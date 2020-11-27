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
    var searchPopDp = searchPop.css('display');
    if(searchPopDp === 'none'){
      searchPop.stop().fadeIn();
    }else{
      searchPop.stop().fadeOut();
    }
  });

  searchClose.on('click', ['button'], function(e){
    e.preventDefault();
    var searchPopDp = searchPop.css('display');
    if(searchPopDp === 'block'){
      searchPop.stop().fadeOut();
    }else{
      searchPop.stop().fadeIn();
    }
  });

// fashionBox 이미지 slide
  var fashionBox = $('#fashionBox');
  var fashionBtn = fashionBox.find('button');
  var fashionImg = fashionBox.find('.fashion_img_area');
  var fashionUl = fashionImg.find('ul');
  var fashionLi = fashionUl.find('li');
  var showN = 0;
  var timed = 1;

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
    };
  });

 // jQuery end
})(jQuery);
