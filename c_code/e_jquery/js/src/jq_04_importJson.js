// jq_04_importJson.js

(function($){
  // 비동기란 필요할 때마다 업무가 바뀌는 것 (병렬적 수행), 실시간 처리
  $.ajax({
    url: '../data/make_json.json', // 외부파일 주소 입력
    dataType:'json', // 데이터 타입
    context: document.body // 어디에 적용할 것인지 // document.body는 웹에 적용
  }).done(function( data ){ // 불러오기 위한 작업을 다 끝내면 done(function(){})을 이용하여 적용시킨다.

    var wrap = $('#wrap');
    wrap.append('<ul class="list_insert"></ul>');
    var Insert = wrap.children('ul');

    var i=0;
    for(; i<data.length; i+=1){
      Insert.append('<li></li>');
      Insert.children('li').eq(-1).text( data[i].name );
    }
   
  });


// -------------------------------------------
$.ajax({url:'불러올파일'}).done(function(data){});
// -------------------------------------------


})(jQuery);