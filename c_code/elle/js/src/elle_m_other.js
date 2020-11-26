// elle_m_other.js

(function($){
 // jQuery start

// 메뉴버튼 기능
  var headBox = $('#headBox');
  var menuBtn = headBox.find('.btn_area');
  var allmenu = headBox.find('.allmenu_outer');

  menuBtn.on('click', ['button'], function(e){
    e.preventDefault();

    var allmenuDp = allmenu.css('display');
    if(allmenuDp === 'none'){
      allmenu.stop().fadeIn();
      menuBtn.addClass('on');
    }else{
      allmenu.stop().fadeOut();
      menuBtn.removeClass('on');
    }
  });
 
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

// beautyBox 이미지 slide
  var beautyBox = $('#beautyBox');
  var beautyBtn = beautyBox.find('button');
  var beautyImg = beautyBox.find('.beauty_img_area');
  var beautyUl = beautyImg.find('ul');
  var beautyLi = beautyUl.find('li');

// top버튼 기능  
  var win = $(window);
  var topBtn = $('.top_btn');
  topBtn.hide();
 
  win.on('scroll',function(e){
    var winSt = win.scrollTop();
    if(winSt >= 900){
      topBtn.stop().fadeIn();
    }else{
      topBtn.stop().fadeOut();
    }
  });
  topBtn.on('click', ['a'], function(e){
    e.preventDefault();
    var it = $(this).find('a');
    var itAttr = it.attr('href');
    var itOffset = $(itAttr).offset().top;
    $('html, body').animate({scrollTop: itOffset });
  });
 
 // jQuery end
})(jQuery);
