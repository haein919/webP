// banner_test.js

(function($){
 // jQuery start
  var viewBox = $('#viewBox'); // viewBox 선택
  var viewImg = viewBox.find('.view_img'); // html상 ul
  var viewLi = viewImg.find('li'); // ul 안에 li 선택
  var permission = true; // 기능이 여러번 수행되지 않도록 제어해주는 변수

  var indicator = viewBox.find('.slide_indi'); // indicator 선택
  var indiLi = indicator.find('li'); // indicator 안에 li 선택

// 마지막 광고 이미지 복제 후 맨 앞에 붙여넣는 기능
  var viewImgLast = viewLi.eq(-1).clone(); // viewImg(ul) 안에 여러 li들 중 마지막[eq(-1)] li를 복사
  viewImg.prepend(viewImgLast); // 복사한 li를 viewImg(ul)안에서 맨 앞에 추가
  var noviewLi = viewImg.find('li'); // 복사된 li까지 포함된 li들을 다시 선택
  viewImg.css({ 'margin-left':-100 + '%', 'width': noviewLi.length * 100 +'%' }); 
  // ul의 넓이를 복사한 li까지 포함된 넓이로 다시 값 변경 + 현재 보이는 이미지가 첫번째 이미지여야 하므로 margin-left를 -100으로 왼쪽으로 밀어줘 첫번째 이미지가 보이도록 조정
  noviewLi.css({ 'width': (100/ noviewLi.length) + '%' }); // 복사된 li가 포함된 li 각각 넓이들도 값 변경

// 슬라이드 버튼 동작 기능
  var indiBtn = viewBox.find('.indi_btn'); // indicator에서 버튼 선택
  var nextBtn = indiBtn.children('button').eq(1); // 버튼들 중 next button 선택
  var prevBtn = indiBtn.children('button').eq(0); // 버튼들 중 prev button 선택

  var slideN = 0; // slideN이라는 임의의 값 설정
  var timed = 3000; // 시간 변수 설정

// 다음 버튼 클릭
  nextBtn.on('click', function(e){ // next버튼 클릭하면 아래 함수를 수행
    e.preventDefault(); // 기존에 버튼이 하는 기능을 없애줌
    if(permission){
      permission = false; // 버튼 클릭 시 한번만 수행되도록 true값을 false로 변경
      if(slideN >= viewLi.length-1){
        slideN = -1; // 복제된 마지막 요소를 의미
        viewImg.stop().css({ 'left': slideN * -100 + '%' }); // slideN값이 전체 갯수 수(여기선 5)보다 커지면 복제된 마지막 요소(-1값)로 jump느낌으로 이동시켜줌
      }
      slideN +=1; // slideN값에 +1을 해줌(다음 버튼을 클릭하기 때문에 수가 커져야 함)
      viewImg.stop().animate({ 'left' : slideN * -100 + '%' }) // 전체 ul이 왼쪽으로 움직이는 걸 애니메이션으로 처리
        setTimeout(function(){ // 시간제어
          permission = true; // permission을 다시 true로 바꿔주면서 다음 기능이 실행될 수 있도록 처리
        },100); // 0.1초 이후 기능 가능하도록 처리
      indiLi.eq(slideN).siblings().removeClass('action'); // 선택된 이미지에 해당하는 indicator에 색 변화주고 나머지 indicator들은 색변화 되지 않도록 처리
      indiLi.eq(slideN).addClass('action'); // 선택된 이미지에 해당하는 indicator에 색 변화주기
    }
  });

// 이전 버튼 클릭
  prevBtn.on('click', function(e){
    e.preventDefault();
    if(permission){
      permission = false; // 버튼 클릭 시 한번만 수행되도록 true값을 false로 변경
      slideN -=1;  // slideN값에 -1을 해줌 (이전버튼을 클릭하기 때문에 수가 작아져야 함)
      viewImg.stop().animate({ 'left': slideN * -100 + '%' }, function(){ // 전체 ul이 왼쪽으로 움직이는 걸 애니메이션 처리
        if(slideN <= -1){ // slideN에 -1을 하나씩 해주는데 그 수가 -1보다 작아진다면,
          slideN = viewLi.length-1; // 제일 마지막 li요소로 간다는 의미
          viewImg.stop().css({ 'left': slideN * -100 + '%' }); // 마지막 li요소로 이동시키도록 css 값 변경
        }
        setTimeout(function(){ // 시간제어 기능
          permission = true; // permission 값을 false에서 다시 true로 바꿔주면서 다음 기능이 수행될 수 있도록 처리
        },100); // 0.1초 이후 가능하도록 처리
      });
      indiLi.eq(slideN).siblings().removeClass('action'); // 선택되지 않은 이미지들에 해당하는 indicator에 action이라는 css 적용하지 않기
      indiLi.eq(slideN).addClass('action'); // 선택된 이미지에 해당하는 indicator에 action css 적용
    }
  });

// indicator 버튼 기능
  indiLi.on('click', function(e){ // indicator의 li를 클릭하면 수행되는 함수
    e.preventDefault(); // 기존 indicator 기능 없애기
    var its = $(this); // 하나하나 클릭하는 바로 그 값을 지정
    var slideN = its.index(); // slideN을 클릭한 indicator의 순번 값으로 지정
    viewImg.stop().animate({ 'left': slideN * -100 + '%' }); // 전체 ul이 왼쪽으로 움직이는 걸 애니메이션 처리
    indiLi.eq(slideN).siblings().removeClass('action'); // 선택되지 않은 이미지들에 해당하는 indicator에 action이라는 css 적용하지 않기
    indiLi.eq(slideN).addClass('action');  // 선택된 이미지에 해당하는 indicator에 action css 적용
  })
// indicator 포커스 기능
  indiLi.children('a').on('focus', function(e){ // indicator의 li안에 a 자식요소를 포커스하면 수행되는 함수
    e.preventDefault(); // 기존 a의 기능 없애기
    var its = $(this); // 각각 li의 a를 포커스 하는 것을 지정
    slideN = its.parent().index(); // slideN을 a의 부모인 li의 순번 값으로 지정
    viewImg.stop().animate({'left':slideN * -100 + '%'}); // 전제 ul이 왼쪽으로 움직이는 걸 애니메이션 처리
    indiLi.eq(slideN).siblings().removeClass('action');  // 선택되지 않은 이미지들에 해당하는 indicator에 action이라는 css값 적용하지 않기
    indiLi.eq(slideN).addClass('action'); // 선택된 이미지에 해당하는 indicator에 action css 적용(background-color:#ff0)
  });

// 자동 슬라이드 기능
  var startInterval; // startInterval 변수 생성
  var start = function(){ // start 변수 함수 값
    startInterval = setInterval(function(){ // 위에서 생성한 startInterval 변수 정의해주고 함수 기능 넣어줌
      nextBtn.trigger('click'); // nextBtn(다음버튼)을 누르지 않아도 자동으로 클릭해 주는 느낌
    },timed); // 다음버튼을 위에서 var timed = 2000; 지정해준 시간(2초를 의미)의 간격을 두고 실행 되도록 처리
  };
  start(); // start 기능 실행
  var stop = function(){ // stop이라는 변수 함수로 정의
    clearInterval(startInterval); // 위에서 설정한 startInterval 기능을 아예 삭제시킴
  };

// 이미지에 마우스 올렸을 경우 정지
  viewBox.on({'mouseenter': stop, 'mouseleave':start}); 
  //viewBox에 mouseenter와 mouseleave기능 실행 --> mouseenter(마우스오버)이면 위에 설정한 stop 함수 기능 실행, mouseleave(해당영역 벗어남)이면 start 함수 실행

// headBox 스크롤 45px이동 후 상단 고정, 가로값 100%으로 변경  & top버튼 300px 스크롤 이동 후 나타나기
  var win = $(window); // 전체 window화면 'win'변수로 지정
  var headBox = $('#headBox'); // headBox 변수 지정
  var topBtn = $('.top_btn'); // html상 top_btn 클래스이름 선택 변수 지정

  topBtn.hide(); // 일단 topBtn을 안보이게 처리
  win.on('scroll', function(e){ // win에 scroll이라는 기능을 수행할 경우 함수 아래 실행 
    var winSt = win.scrollTop(); // winSt는 scroll 했을 시 생기는 값으로 변수로 지정
    if(winSt >= 45 ){ // 스크롤 값이 45보다 크거나 같으면 아래 기능 수행
      headBox.css({'position':'fixed', 'top':0, 'z-index':1500, 'width': 100 + '%' }); // headBox의 css값을 position:fixed, top:0; z-index:1500, width:100%;로 변경
    }else{ // 45보다 크거나 같지 않으면, 아래기능 수행
      headBox.removeAttr('style'); // if문에서 headBox에 변경해준 css값을 없애줌
    };
    if(winSt >= 300){ // 스크롤 값이 300보다 크거나 같으면 아래 기능 수행
      topBtn.stop().fadeIn(); // top버튼을 fade효과로 나타나게 처리
    }else{ // 300보다 크거나 같지 않으면 즉 300보다 작으면, 아래 기능 수행
      topBtn.stop().fadeOut(); // top버튼을 fade효과로 없어지게 처리
    };
  });

// top button 클릭 시 맨 상단으로 이동
  topBtn.on('click', ['a'], function(e){ // top버튼 자식인 a를 클릭할 때 함수 실행
    e.preventDefault(); // 기존 a에 있는 기능을 없애줌
    var it = $(this).find('a'); // top버튼 클릭했을 때 자식인 a를 지정
    var itAttr = it.attr('href'); // a의 속성인 href(#wrap)를 선택
    var itOffset = $(itAttr).offset().top; // a 속성인 href값이 상단에서 얼마나 떨어져있는 그 양을 체크 -> wrap은 상단에서 떨어져 있지 않음 상단에 붙어있으므로 값은 =>0이다
    $('html, body').animate({ scrollTop: itOffset }); // html body부분을 스크롤을 이용하여 상단으로 이동
  });
 // jQuery end
})(jQuery);
