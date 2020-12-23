// ex_16_like_pinterest.js

(function($){
  /** todo list
   * [o] 카드 js에서 구현하기
   * [x] json 파일 생성해서 불러오기 / 이미지 리스트화 처리
   * [o] 생성된 ul의 가로 크기를 li의 갯수만큼 담을 수 있도록 수정
   */

   // 실제 데이터 형식에서는
  //  [
  //    {"title":"카드 제목", "content":"카드내용",
  //     "imgSrc":"random_001.jpg", "imgAlt":"이미지설명"},
  //    {"title":"카드 제목", "content":"카드내용",
  //     "imgSrc":"random_001.jpg", "imgAlt":"이미지설명"},
  //    {"title":"카드 제목", "content":"카드내용",
  //     "imgSrc":"random_001.jpg", "imgAlt":"이미지설명"}
  //  ];

  var cardData = [];
  var k=0, l;
  var url = "../img/random/";
  var imgT = 'random_';
  for(; k < 20; k +=1){
    if(k <9 ){
      l = '00' + (k+1); // 8일때 --> 009
    }else if(k < 99){ // 9일때 --> 010
      l ='0' + (k+1);
    }
    // cardData[k] = imgT + l + '.jpg';

    cardData[k] = {}; // cardData를 객체화 시킴
    cardData[k].title = 'title' + l;
    cardData[k].imgSrc = url + imgT + l + '.jpg'; // json에서는 url 빼야함
    cardData[k].imgAlt = imgT + l + '이미지설명';
  };
  console.log(cardData);

  var win = $(window);
  var cardBox =$('#cardBox');
  cardBox.append('<ul></ul>'); // ul 태그 생성
  var cardUl = cardBox.children('ul');
  var liText = ' <li><a><div class="img_temp"><img></div><span></span></a></li>'
  var y = 0;
  var listEl;
  for(; y <cardData.length; y+=1){
    cardUl.append(liText);
    listEl = cardUl.children('li').eq(y);
    listEl.find('img').attr({'src':cardData[y].imgSrc, 'alt':cardData[y].imgAlt});
    listEl.find('span').text(cardData[y].title);
    listEl.children('a').attr({'href':'#'});
  }
  var cardLi = cardUl.children('li');

  // ul의 크기설정에서 필요한 것들
  // 1. li의 가로크기, li의 margin값(공백)
  // 2. 브라우저에서의 기준 크기 값
  // li의 값이 먼저 설정되고 그에 의해 ul의 크기가 결정되도록 역순 처리
  // li값은 알고 있음(css에서 설정했기 때문)

  var cardLiWidth = cardLi.eq(0).outerWidth();
  var cardMargin = cardLi.eq(0).outerWidth(true) - cardLiWidth; 
  // outerWidth(true) : true를 포함한 outerWidth는 margin까지 포함한 가로값
  // outerWidth() : margin값을 제외한 가로값(padding+border+width)

  /* 여기서부터 브라우저 크기가 변경되면 모든 작업 다시 수행 옵션걸기!!! -> 함수처리 */
  var browserSet = function(){
    cardLi.removeAttr('style');
    var winW = win.outerWidth();
    var liLen = parseInt( winW / (cardLiWidth + cardMargin) ); // li가 브라우저 크기 변화에 따라 ul안에 총 몇개 들어갈 수 있는지 파악하기 위해
    // 소수점 정수화 처리 : parseInt();
    // 버림, 올림, 반올림 : Math.floor(), Math.ceil(), Math.round()
    // console.log(liLen);
    var ulWidth = ( (cardLiWidth + cardMargin) * liLen) - cardMargin; // 마지막 list의 margin-rigth 값을 빼줌
    cardUl.css({'width': ulWidth + 'px' });
    // console.log(liLen, ulWidth);
    
    // li 설정
    // 1. li의 순번에서 가로 행의 마지막 아이의 margin값 제거
    // cardLi.eq(liLen-1).css({'margin':0}); // 한 행의 마지막 list의 margin값을 없애줌 
    // 2. 각각의 행에 들어가는 모든 마지막번째 위치의 li margin값 제거
    var lin = 0;
    var liNth = Math.ceil(cardLi.length / liLen);
    var n;
    for(; lin < liNth; lin +=1){
      n = (liLen * lin) - 1;
      // console.log(n);
      cardLi.eq(n).css({'margin-right':0});
    };

    // 가로에 4개씩 --> 4번째( eq(4*n-1) )마다 margin값 제거 -> 4,8,12,16 순으로 실제 eq값은(3,7,11,15...)
    // 가로에 6개씩 --> 46번째( eq(6*n-1) )마다 margin값 제거 -> 6,12,18,24 순으로 실제 eq값은(5,11,17,23...)
    // 브라우저 크기가 변경될때마다 재측정
  }; // browserSet();
  browserSet();

  win.on('resize', function(){
    browserSet();
  });

 // jQuery end
})(jQuery);
