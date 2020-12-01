// ex_08_moreBtn.js

(function($){
  $.ajax({
    url: '../data/random_people.json',
    dataType:'json', // 생략가능
    context:document.body // 생략가능
  }).done(function(data){
    var people = data;
    var i=0; // 임의의 변수
    var myLen = i; // 임의의 변수
    var myViewLen = 10; // 임의의 변수(최대 수를 지정)
    var maxLen = people.length; // people의 수
    var part = $('.part');
    var partUl = part.find('ul');
    var insertCode = '<li><div class="num"></div><div class="image"></div><dl><dt>title</dt><dd>email</dd></dl></li>';
    var more = $('.more_btn');
    var moreBtn = more.children('button');
    var liEq;
// ---------------------------------------------------
    var moreFn = function(j){
      var k;
      // 1번째 방법
      // if( j === undefined){ 
      //   k = myViewLen; 
      // }else{
      //   k = j;
      // }
      // 2번째 방법 (제일 많이 쓰는 방법:오류가 많이 안나는 방법)
      // (j === undefined)? k = myViewLen : k = j;

      // 3번째 방법(많이 쓰지만 2번보다 오류가 많다)
      k = j || myViewLen;

      myLen =  i + k; // 임의의 변수에 i + myViewLen 값을 넣어줌 (즉 i+4)
      for(; i < myLen; i+=1){ // 반복문을 통해 위에 더한 값까지 반복하게 함
        if( i >= maxLen){ // i를 최대값과 비교
          more.remove(); // 최대값까지 되면 more버튼을 지워라
          break // for문을 빠져나가라
        }else {
          partUl.append(insertCode);  // 아니면 코드를 집어넣어서 i값만큼 코드를 생성해라
          liEq = partUl.children('li').eq(i);
          liEq.find('.num').text( data[i].id );
          liEq.find('.image').css({backgroundImage: 'url(' + data[i].image_data + ')' });
          liEq.find('dt').text(data[i].first_name);
          liEq.find('dd').text(data[i].address);
        }
      }// for
    };
    moreFn();
// ---------------------------------------------------
    moreBtn.on('click', function(e){
      e.preventDefault();
      moreFn(15); // 위에서 만든 함수를 버튼 이벤트에 넣어 기능하게끔 해줌
    });
// ---------------------------------------------------
/*
  처음에 4개의 li를 만들어줌
  이후 5번부터 8번까지의 요소를 버튼을 클릭했을 때 보여줘야 하고
  이를 수행하게 하기 위해서 i+myViewLen을 해줌.
  즉, 4+4까지 나타나게 해라를 수행하게 됨
  이와같은 방식으로 for문을 통해 i의 값이 변경되고 이를 외부에서
  4씩 더하여 해당 값까지만 for문을 수행하게 해줌으로써 
  버튼을 클릭하면 원하는 갯수만큼만 추가 되게끔 한다.
*/

  });
})(jQuery);
