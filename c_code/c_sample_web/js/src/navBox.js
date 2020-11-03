// navBox.js
(function($){
  // ==============================================================
  // navigation 내용을 담을 형식 설정

  var navBox = [
    {'titleNav' : {'tname':'story', 'tlink':'http://naver.com', 'target':'_blank'},
    'subNav' : [{'sname':'몽피이야기', 'slink':'http://google.com'}, 
                {'sname':'회사소개', 'slink':'http://google.com'}, 
                {'sname':'후원', 'slink':'http://google.com'}, 
                {'sname':'sns', 'slink':'http://google.com'}] },

    {'titleNav' : {'tname':'menu', 'tlink':'http://naver.com', 'target':'_blank'},
    'subNav' : [{'sname':'커피류', 'slink':'http://google.com'}, 
                {'sname':'기타음료', 'slink':'http://google.com'}, 
                {'sname':'음식 및 디저트', 'slink':'http://google.com'}, 
                {'sname':'선물상품', 'slink':'http://google.com'}, 
                {'sname':'기타안내', 'slink':'http://google.com'}] },

    {'titleNav' : {'tname':'store', 'tlink':'http://naver.com', 'target':'_blank'},
    'subNav' : [{'sname':'신규매장', 'slink':'http://google.com'}, 
                {'sname':'매장찾기', 'slink':'http://google.com'}, 
                {'sname':'가맹문의', 'slink':'http://google.com'}, 
                {'sname':'창업설명회', 'slink':'http://google.com'}, 
                {'sname':'창업스토리', 'slink':'http://google.com'}] },

    {'titleNav' : {'tname': 'news', 'tlink':'http://naver.com', 'target':'_blank'},
    'subNav' : [{'sname':'이벤트', 'slink':'http://google.com'}, 
                {'sname':'공지사항', 'slink':'http://google.com'}, 
                {'sname':'프로모션', 'slink':'http://google.com'}, 
                {'sname':'미디어광고', 'slink':'http://google.com'} ]}
  ];
  // console.log(navBox.length);
  // ==============================================================
  // #navBox 내부에 각가의 요소 삽입
  var navList = '<li><dl><dt></dt><dd></dd></dl></li>';

  var navBoxSel = $('#navBox');
  var navBoxSelUl = navBoxSel.children('ul');
  var navLen = navBox.length;
  var navDt, navDd, subNavLen, i, j, tNav, sNav;
  for(i=0; i < navLen; i+=1){
    navBoxSelUl.append(navList);
    navDt = navBoxSelUl.children('li').eq(i).find('dt');
    navDd = navBoxSelUl.children('li').eq(i).find('dd');
    tNav = navBox[i].titleNav;

    navDt.append('<a href="'+ tNav.tlink +'" target="'+ tNav.target +'">'+ tNav.tname +'</a>'); // 구형 인터넷익스까지 위함 (모든 브라우저)
    // navDt.append(`<a href="${tNav.tlink}" target="${tNav.target}">${tNav.tname}</a>`); // ES6이상
   
    subNavLen = navBox[i].subNav.length;
    for( j=0; j<subNavLen; j+=1){
      sNav = navBox[i].subNav[j];
      navDd.append('<a href="'+ sNav.slink +'">' + sNav.sname + '</a>');
    }
} // for end
// -------------------------------------------------------------------------
var navBoxFindDt = navBoxSel.find('dt');
var navBoxFindDtLink = navBoxFindDt.find('a');
var navBoxFindDd = navBoxSel.find('dd');
var navBoxFindDdLink = navBoxFindDd.find('a');
navBoxFindDd.hide();

// navBoxSelUl.addEventListener('mouseenter', function(){});
var navSlideDown = function(){ navBoxFindDd.stop().slideDown(); };
var navSlideUp = function(){ navBoxFindDd.stop().slideUp(); };

// navBoxSelUl.on('mouseenter', navSlideDown );
// navBoxSelUl.on('mouseleave', navSlideUp );
navBoxSelUl.on({
  'mouseenter':navSlideDown, 
  'mouseleave':navSlideUp 
});

navBoxFindDtLink.on('focus', navSlideDown );
navBoxFindDdLink.eq(-1).on('blur', navSlideUp );

})(jQuery);

/* 선택 시
js에서는 자식을 선택할 경우에 children() -> jQuery에서도 children()
js에서 내부 자손요소를 선택할 경우 getElement...() -> jQuery에서는 find()
*/
/** 요소 첨부시 
js에서는 
document.createElement(); // 생성 후
??.appeng()               // 삽입
====================================
-- jQuery에서는 
선택자.append('요소이름') // 생성과 동시에 삽입
*/