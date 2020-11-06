// jq_03_makeRemove.js

(function($){
  var part = $('.part');
  var p = part.children('p');
  var div = part.find('div');
  console.log(div);
  p.css ({'border':'0.065rem solid #7a0'});

  var p1 = part.find('.text');
  p1.text('원하는 글자를 <br /> 입력할 수 있습니다.');
  // text이기때문에 br도 글자로 인식

  var p2 = part.find('.html');
  p2.html('원하는 요소를 <br /> 삽입할 수 있습니다.')
  // html은 요소를 뜻하기 때문에 br을 요소로 인식 // 기존에 있는 요소는 삭제하고 새로 작성한 내용 삽입
  // $('head').html('<style>');

  var p3 = part.find('.wrap');
  p3.wrap('<dl><dt></dt></dl>'); // 감싸는 요소 생성
  p3.unwrap().unwrap(); // 감싸는 요소 삭제

  // prepend는 내부의 앞에 생성하게 되는 method이며,
  // 요소의 형태로 사용하지 않으면, 다른곳의 요소도 강제로 함께 가져온다.
  var p4 = part.find('.prepend');
  p4.prepend('<span>삽입되었나요?</span>'); // p요소 내부 앞에 span 삽입
  // var span = $('span'); 
  // prepend.prepend(span); // 문서상의 span 요소들 모두 다 가져옴
  var mySpan = $('.preto');
  mySpan.prependTo(p4); // .preto요소를 p요소 내부앞에 삽입

  /*
    1. 선택자 A.prepend(선택자B);
    2. 선택자 C.prepend(선택자D);

    1번의 경우 A내부에 B를 담는것 (이런거 할 수 있어?)
    2번의 경우 D내부에 C를 담는것 (할 수 있어 이런거?)
  */
  
  var p5 = part.find('.append'); // 내부의 뒤에 삽입
  p5.append('<span>내부 뒤에 삽입완료!!</span>');
  mySpan.appendTo(p5) // 위에서 p4영역에 삽입한 것을 p5로 가져오게 됨

  var p6 = part.find('.context');
  var p6Con = p6.contents(); // p요소 내부에 들어있는 모든 내용을 가져오는 기능
  // console.log(p6Con);
  // html메소드는 기존내용을 삭제하고 새로 작성한 내용을 삽입함
  // p6.html('<a href="#"></a>'); // 원래 작성된 자리에 a 태그를 생성 (기존의 것 지워짐 ;덮여씌어지는 것)
  // p6.children('a').html(p6Con); // 그래서 원래 작성되었던 내용을 다시 써줌

  // console.log( p6.html() ); // html은 코드까지 같이 보여줌
  // console.log( p6.text() ); // 안에 내용만 보여줌

  var p6Html = p6.html();
  p6.html('<a href="#">'+ p6Html +'</a>')

  var p7 = part.find('.before');
  p7.before('<div>.before 앞에 요소를 생성</div>');

  var p8 = part.find('.after');
  p8.after ('<div>.after 뒤에 요소를 생성</div>');

  div = part.find('div');
  console.log(div);

  // attribute -> 속성을 처리하는 기능
  var p8Attr = p8.attr('title').split(' ');
  console.log(p8Attr);
  p8.attr({'data-x':'what is the data'}); // data-x라는 속성을 사용자가 임의로 만들어줌 그 속성의 내용이 what is the data
  // p8.removeAttr('style'); // style 속성을 지움
  // p8.removeAttr('class'); // class 속성을 지움
  // p8.removeAttr('title'); // title 속성을 지움
  // p8.removeAttr('data-x'); // data-x 속성을 지움
 
  // 한번에 지우는 방식
  var arr= ['style', 'class', 'title', 'data-x'];

  // javascript 방식
  // arr.forEach(function(){})
  // arr.forEach(function(d,i){
  //   p8.removeAttr(d);
  // });

  // jquery 방식
  $.each(arr, function(i, d){
    p8.removeAttr(d);
  });

})(jQuery);