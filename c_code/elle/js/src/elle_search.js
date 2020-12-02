// elle_search.js

(function($){
 // jQuery start
  var headBox = $('#headBox');
  var searchBtn = headBox.find('.btn_search');
  var searchPop = headBox.find('.searchpop');
  var searchClose = searchPop.find('.pop_close');
  
  var searchBox = headBox.find('.searchBox');
  var issueArea = searchBox.find('.issue_area');
  var issueUl = issueArea.find('ul');
  var issueLi = issueUl.find('li');
  var time = 500;

  var start;
  var slide = function(){
    start = setInterval(function(){
        var issueLiHeight = issueLi.eq(0).outerHeight(true); // outerHeight(true) true를 써줘야 마진값까지 같이 계산한다는 의미
        // console.log(issueLiHeight);
        issueUl.stop().animate({'marginTop': -issueLiHeight + 'px'}, time*2 , function(){
            issueUl.css({'marginTop':0});
            issueLi.eq(0).css({opacity:0}); 
            issueLi.eq(0).appendTo(issueUl); // 맨 처음 li를 잘라서 맨 마지막으로 이동시킴
            issueLi = issueUl.find('li');   // 맨 처음 li를 잘라서 밑으로 이동시킨 후 그 상태에서 li를 다시 파악해줘야함
            setTimeout(function(){
              issueLi.eq(-1).animate({opacity:1}); // 잘라온 li를 바로 붙이면 자연스러운 느낌이 나지 않아 opacity와 time으로 뒤늦게 자연스럽게 나오게 처리
            }, time*2);     
        });
    }, time*4);
  };
  searchBtn.on('click', function(e){
    e.preventDefault();
    searchPop.stop().fadeIn(function(){
      slide();
    });
  });
  var stopslide = function(){
    clearInterval(start);
  };
  searchClose.on('click',function(e){
    e.preventDefault();
    stopslide();
  });
  issueUl.on({'mouseenter':stopslide, 'mouseleave':slide});
 // jQuery end
})(jQuery);
