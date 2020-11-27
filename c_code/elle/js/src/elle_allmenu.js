// elle_allmenu.js

(function($){
 // jQuery start
 
 var menuList = [
   {'titlemenu': {'tname': 'fashion', 'tlink': 'url(./elle.html)','target':'_blank'},
    'submenu': [{'sname':'trends', 'slink': 'https://www.elle.co.kr/fashion/trends'},
                {'sname': 'celebrity style', 'slink':'https://www.elle.co.lr/fashion/celebritystyle'},
                {'sname': 'howto', 'slink':'https://www.elle.co.lr/fashion/howto'},
                {'sname': 'street style', 'slink':'https://www.elle.co.lr/fashion/streetstyle'},
                {'sname': 'fashion week', 'slink':'https://www.elle.co.lr/fashion/fashionweek'},
                {'sname': 'designers', 'slink':'https://www.elle.co.lr/fashion/designers'}] },
  
   {'titlemenu': {'tname': 'beauty', 'tlink': 'url(./elle.html)','target':'_blank'},
   'submenu': [{'sname':'make-up', 'slink': 'https://www.elle.co.kr/beauty/makeup'},
               {'sname': 'skincare', 'slink':'https://www.elle.co.lr/beauty/skincare'},
               {'sname': 'hair', 'slink':'https://www.elle.co.lr/beauty/hair'},
               {'sname': 'tips', 'slink':'https://www.elle.co.lr/beauty/tips'},
               {'sname': 'health', 'slink':'https://www.elle.co.lr/beauty/health'},
               {'sname': 'beauty item', 'slink':'https://www.elle.co.lr/beauty/beautyitem'}] },

   {'titlemenu': {'tname': 'star', 'tlink': 'url(./elle.html)','target':'_blank'},
   'submenu': [{'sname':'interview', 'slink': 'https://www.elle.co.kr/star/interview'},
               {'sname': 'gossip', 'slink':'https://www.elle.co.lr/star/gossip'},
               {'sname': 'celeb news', 'slink':'https://www.elle.co.lr/beauty/celebnews'}] },

   {'titlemenu': {'tname': 'love&life', 'tlink': 'url(./elle.html)','target':'_blank'},
   'submenu': [{'sname':'travel', 'slink': 'https://www.elle.co.kr/loveandlife/travel'},
               {'sname': 'food', 'slink':'https://www.elle.co.lr/loveandlife/food'},
               {'sname': 'tech', 'slink':'https://www.elle.co.lr/loveandlife/tech'},
               {'sname': 'place', 'slink':'https://www.elle.co.lr/loveandlife/place'},
               {'sname': 'relation tips', 'slink':'https://www.elle.co.lr/loveandlife/relationtips'},
               {'sname': 'love', 'slink':'https://www.elle.co.kr/loveandlife/love'}] },

   {'titlemenu': {'tname': 'horoscope', 'tlink': 'url(./elle.html)','target':'_blank'}},
   {'titlemenu': {'tname': 'event', 'tlink': 'url(./elle.html)','target':'_blank'}}
 ];

 var menuTag ='<li><dl><dt></dt><dd></dd></dl></li>';

 var navBox = $('.navigation');
 var allMenu = navBox.find('.allmenu');
 var allMenuUl = allMenu.children('ul');
 var allMenuLen = menuList.length;
 var menuDt, menuDd, subMenuLen, i, j, tMenu, sMenu ;
 for(i=0; i < allMenuLen; i +=1){
   allMenuUl.append(menuTag);
   menuDt = allMenuUl.children('li').eq(i).find('dt');
   menuDd = allMenuUl.children('li').eq(i).find('dd');
   tMenu = menuList[i].titlemenu;

   menuDt.append('<a href="'+ tMenu.tlink +'">' + sMenu.sname + '</a>');

   subMenuLen = menuList[i].submenu.length;
   for( j=0; j<subMenuLen; j+=1){
     sMenu = menuList[i].submenu[j];
     menuDd.append('<a href="'+sMenu.slink+'">'+'</a>');
   };
 };

 var menuFindDt = navBox.find('dt');
 var menuFindDtLink = menuFindDt.find('a');
 var menuFindDd = navBox.find('dd');
 var menuFindDdLink = menuFindDd.find('a');
 menuFindDd.hide();

 munuDt.on('click',['a'], function(e){
  e.preventDefault();
  var it = $(this);
  it.next('dd').stop().slideToggle(function(){
    var itDdDisplay = it.next('dd').css('display');
    // console.log(itDdDisplay);
    if(itDdDisplay === 'block'){
      it.addClass('action');
      it.siblings().removeClass('action');
    }else if(itDdDisplay === 'none'){
      it.removeClass('action');
    }
  });
  it.siblings('dt').next('dd').stop().slideUp();
});

 // jQuery end
})(jQuery);
