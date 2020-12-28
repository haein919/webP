// ex_18_like_pinterest2.js

(function($){
  // 1. 카드 감싸는 영역 크기설정, 내용물 삽입
  // 2. 스크롤의 진행 위치값 표시
  // 3. 스크롤 시 일정 위치가 넘어가면 추가 카드가 생성되게 처리
  // 4. Math.random()을 이용하여 색상, 높이값을 변경
  // 5. 임시로 세팅했던 .card의 float기능은 삭제
  // 6. 화면상의 하나의 행에 들어갈 위치값(left값)설정
  // 7. 화면상의 열에 해당하는 위치값(top)설정
  // 8. .card_area의 높이값을 강제 설정 (5번에서 float의 기능을 삭제 후 position 처리했기 때문에 높이값이 없어졌다.)

  // 4. 랜덤 색상설정
  // var r1 = Math.floor(Math.random() * 16).toString(16); // 16진수로 문자화 처리
  // var r2 = Math.floor(Math.random() * 16).toString(16);
  // var r3 = Math.floor(Math.random() * 16).toString(16);
  // var randomColor = '#'+r1 + r2 + r3;
  var Rn = function(){
    return Math.floor(Math.random()*16).toString(16);
  };
  // var randomColor = '#'+Rn()+Rn()+Rn();
  // console.log(randomColor);
  
  // 4-2. 높이값 변경
  var myRandomN = 7;
  var myRandomH = 40;
  var randomHeight = function(){
    var h = parseInt(Math.random() * myRandomN) * myRandomH;
    return h;
  };

  // ============================================================
  // 2번 기능 스크롤시 진행 위치값
  var headBox = $('#headBox');
  headBox.prepend('<div class="scroll_percent"></div>');
  var scrollP = $('.scroll_percent');
  scrollP.css({'position':'absolute', 'top':0, 'left':0, 'z-index':-1,
  'width':0, 'height':'90%', 'opacity':0.2, 'background-color':'#f06',
  'transform':'translate(-0.5rem) scale(1.1) skew(-15deg)' });
  
  // scrollP.css({'width':적용할값 + '%'});
// 2번 기능 세팅 ------------------------------------------------
// ==============================================================
  var cardCode = '<div class="card"><div class="card_img"></div><div class="card_narr"><a href="#"><dl><dt>title</dt><dd>Lorem, ipsum.</dd></dl></a></div></div>';
  
  // window, cardBox, card_area 선택자
  var win = $(window);
  var cardBox = $('#cardBox');
  var cardArea = cardBox.children('.card_area');
  
  // 추가 선택자 및 변수 생성
  var card;
  var cardWidthLen; // 개수 파악하는 함수 이름

  // 1. card 생성
  // 3번에서 요구하는 카드생성 형태이므로 중복 수행이기때문에 함수화 처리
  var i=0;
  // 카드 전체값
  var cardCount = 0;
  var randomColor = [];
  var cardRandomHeight = [];

  var AppendCardFn = function(){
    cardCount += 50; // 50개씩 추가 생성하게끔 값을 바꿔줌
    for(; i < cardCount; i++){
      cardArea.append(cardCode);
      card = cardArea.children('.card').eq(i);
      card.find('dt').text( 'title_' + (i+1) );
      randomColor[i] = '#'+Rn()+Rn()+Rn();
      card.find('.card_img').css({'background-color':randomColor[i]});
      
      // card 높이값을 기존값과 random 함수값을 합쳐서 처리
      cardRandomHeight[i] = card.outerHeight() + randomHeight();
      card.css({'height':cardRandomHeight[i] + 'px'});
    }
    // 5. 임시로 세팅했던 .card의 float기능은 삭제
    // $('.card').css({'float':'left'});  
    card =$('.card');
  }; // AppendCardFn();
  AppendCardFn();
  // ===========================================================================
  // .card_area의 가로값 세팅
  var cardEq0 = $('.card').eq(0);
  var cardWidth = cardEq0.outerWidth(); // outerWidth = 가로+패딩+외곽선
  cardWidthSet = function(){
    cardWidthLen = parseInt(cardBox.outerWidth() / cardWidth); // 가로에 들어가는 갯수
    cardArea.css({'width':cardWidth * cardWidthLen + 'px'});
  } // cardWidthSet();
  cardWidthSet();
  // ==========================================================================
  // 6 & 7. 카드의 위치값 설정
  var remainder; // 나머지 값
  var topArr = [];

  var cardPositionSettingFn = function(){
    var j=0;
    for(; j < cardCount; j++){
      // 가로행에 들어가는 각각 n번째 (나머지값에 해당하는 번째) 
      // 6. 요소의 위치를(left값) 배치
      // 가로에 3개정도 들어갈 환경일때, remainder의 변수 값은 0,1,2로 뜸
      remainder = j % cardWidthLen; // 나눴을 때 나머지 값을 사용할 예정이기에 나머지값 처리
      card.eq(j).css({'left':cardWidth * remainder + 'px'});
      
      var setTop;
      // 7. 요소의 추가 위치(top값) 배치
      if(j < cardWidthLen){
        card.eq(j).css({'top':0});
        topArr[j] = 0;
      }else{
        setTop = parseFloat(card.eq(j - cardWidthLen).css('top')); // 첫번째 행의 아이들이 위에서 얼마나 떨어져있는지
        setHeigth = card.eq(j - cardWidthLen).outerHeight(); // 첫번째 행의 아이들의 길이
        topArr[j] = setTop + setHeigth;
        card.eq(j).css({'top':setTop + setHeigth + 'px'});
      }
    } // for()
    // 8. .card_area의 높이값 설정
    var randomHMax = card.eq(0).outerHeight() + (myRandomN * myRandomH); // 각각의 전체 카드 높이값 중 가장 큰 값 구하기 위함
    var maxN = Math.max.apply(null, topArr); // 카드의 position의 위치 top의 최대값
    cardArea.css({'height':randomHMax + maxN + 'px'});
    console.log(randomHMax, maxN);
  } // cardPositionSettingFn();
  // ===========================================================================
  // 함수 기능 수행
  cardPositionSettingFn();
  // ==========================================================================
  // 브라우저 크기 변경 시 cardArea 사이즈 재수정
  win.on('resize', function(){
    cardWidthSet();
    cardPositionSettingFn();
  });

// 2번 기능 -------------------------------------
  win.on('scroll', function(){
    var st = $(this).scrollTop();
    var wrap =$('#wrap');
    var wrapHeight = wrap.outerHeight();
    var winH = win.outerHeight();
    // 퍼센트 공식: 값/ 기준(전체) * 100
    // 스크롤 처리시에는 화면의 높이값 만큼은 빼주어야 한다.
    var per = st / (wrapHeight-winH) * 100; // percentage 만들기
    // console.log(per);
    // .scroll_percent의 가로값에 적용
    scrollP.css({'width': per + '%'}); // 상단 스크롤시 얼마나 왔는지 위치값 변하게 하는 코드
    
    // 3번 기능 : 일정 수치가 넘어가면 추가 카드를 생성
    // 카드를 생성한 영역을 재호출, *기존의 카드는 유지*
    if(per >= 100){
      AppendCardFn();
      cardPositionSettingFn();
    }
  });
// -----------------------------------------------

})(jQuery);
