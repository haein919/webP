// ex_09_notice.js

(function($){
 // jQuery start
 $.ajax({
   url:'../data/random_people.json',
   dataType:'json',
   context: document.body
 }).done(function(data){
  // 1. 순서 뒤집어서 배치
  // 2. 한번에 보일 내용(30개)을 적당히 줄여서 배치
  // 2-1. 인디케이터 생성하여 그 순번에 맞는 내용 나타나기
  // 3. 오름차순, 내림차순 연결해 보기

   var dataFile;
   dataFile = data.sort(function(a,b){  // sort(): 순서를 정리하는 a,b를 써주고 return을 뒤집어서 빼주면 역순으로 정리가 됨
    return b.id - a.id;
   });

  //  console.log(dataFile);
  var noticeCode = '<li><a href="#"><em></em><span></span></a></li>';
  var indiCode = '<li><a href="#"></a></li>';

  var notice = $('.notice_board');
  var noticeCon = notice.children('.context');
  var noticeArea = noticeCon.children('ul');

  var indiCon = notice.children('.indicator');
  var indiArea = indiCon.children('ul');
  
  // 기본 세팅
  var myViewLen = 20; // 한번에 보일 갯수

  // 인디케이터 생성하기
  var indiLen = Math.ceil(dataFile.length / myViewLen);
  var indiN = 0;
  var indiLi;
  for(; indiN < indiLen; indiN += 1 ){
    indiArea.append(indiCode);
    indiLi = indiArea.children('li').eq(indiN);
    indiLi.find('a').text(indiN + 1);
  }

  // 인디케이터 보일 개수 조정하기
  var indiViewLen = 5; // 보고싶은 아이
  var iv = 0; // 최초값
  indiLi = indiArea.children('li');
  var memoryN;

  for(; iv < indiLen; iv +=1 ){ // iv를 전체 인디갯수(25)전까지 +1하면서 아래 기능을 반복해줌
    if(iv < indiViewLen){ // 근데 iv가 indiViewLen(5)보다 작으면
      memoryN = iv+1; // 빠져나가기 전 마지막 숫자 카운트는 기억해 줘야함
      continue; // 건너뛰어라 (5가 될때 까지 기능하지 말고): ↑위와 같은 기능이 없을 때를 위해 작성해줘야하고 기능이 있으면 없어도 됨
    }else{
      indiLi.eq(iv).hide(); // 1부터 5까지만 보이고 나머지는 display:none; 상태
    }
  }

  var nBtn = indiCon.find('.next_notice');
  var pBtn = indiCon.find('.prev_notice');

  nBtn.on('click', function(e){
    e.preventDefault();
    var nbn = memoryN;
    indiLi.hide();
    for(; nbn < memoryN+indiViewLen; nbn += 1 ){
      indiLi.eq(nbn).show();
    }
    memoryN = nbn;
  });

  // 내용 넣기
  var reSetting = function(n){
    // var i = 0;
    var i =  0;
    var k = n || 0;
    noticeArea.empty();

    var noticeLi; 
    for(; i < myViewLen; i+=1){
      if(dataFile[i+k] === undefined){
        break;
      }else{
        noticeArea.append(noticeCode);
        noticeLi = noticeArea.children('li').eq(i);
        noticeLi.find('em').text(dataFile[i+k].id);
        noticeLi.find('span').text(dataFile[i+k].address);
      }
    }
  };
  // 기능 수행(차후 인디케이터 기능 포함시키기)
  reSetting();

  var indiLiBtn = indiArea.children('li');
  indiLiBtn.on('click', function(e){
    e.preventDefault();
    var liN = parseInt( $(this).text() ) - 1;
    var liSetN = liN * myViewLen;
    // console.log(liN-1);
    reSetting(liSetN); // 0, 70, 140
  });

/*
  var select_area = $('.select_area').find('button');
   select_area.on('click', function(e){
     e.preventDefault();
     var i = $(this).index();
     switch(i){
       case 0:
         dataFile = data.sort(function(a,b){
         return b.id - a.id;
       });
       reSetting();
       break;
       case 1:
         dataFile = data.sort(function(a,b){
          return a.id - b.id;
         });
         reSetting();
         break;
     }
   });
   */
});

 // jQuery end
})(jQuery);