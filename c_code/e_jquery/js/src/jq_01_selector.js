// jq_01_selector.fa-js
// $(document).ready(function(){});
// $(function(){});

(function(){
  var Box = $('#box');
  Box.css ({ 'width':100 +'px', 'height': 100 + 'px', 'backgroundColor':'#fa0'});

  var boxTwo = $('.box_two');
  boxTwo.css ({'width': 300 +'px', 'height': 50 +'px', 'border': 3 +'px solid #0cf'});

  var listThree = $('.list_three');
  var listLi = listThree.children('li');
  listLi.css ({'backgroundColor' :'#fac', 'marginBottom':'5px', 'width':200 +'px'});

  listThree.children( 'li:nth-child(1)').css({'color':'#03f','fontWeight':'bold'});
  listThree.children( 'li:nth-of-type(2)').css({'color':'#f30','fontWeight':'bold'});
  listThree.children( 'li:nth(3)').css({'color':'#330', 'fontSize':1.3 + 'rem'}); 
  // jQuery에서만 쓰이는 css nth방법이라 순서가0부터 시작. 3번째 아이 선택할때nth(2)를 해야 3번째 자식 선택됨
  listThree.children('li').eq(3).css({'color':'#fff', 'fontSize':1.3 + 'rem'});

  var listOl = listThree.find('ol'); // .list_three ol
  listOl.css ({'border':5 + 'px' + ' solid' + ' #777', 'padding': 10 + 'px'});
    // ol::marker, ol:before, ol:after --> js에서 컨트롤 불가
  var style = $('style');
  style.append('#wrap{width:800px; background-color:#ddd; margin:auto; }');
  style.append('#wrap::after{content:"글씨를 작성해보아요!"; }');

// ---------------------------------------------------------------------------------------------
var p2List = $('.part_2_list');
var p2Li = p2List.children('li');
p2List.css({'listStyle':'none'});
p2Li.css ({'width':100 + 'px', 'height':20 +'px', 'margin-bottom': 5 +'px', 'backgroundColor': '#fff' });

p2Li.eq(4).css ({'color':'#07f', 'fontWeight':'bold'});
p2Li.eq(4).prev().css ({'textAlign':'right'}); // 바로 직전 형제 한개만 적용
p2Li.eq(4).prevAll().css ({'borderRadius':'20px', 'boxShadow':'5px 5px 5px #555'}); // 이전 형제들 모두 적용

p2Li.eq(-5).css({'fontWeight':'bold', 'color': '#f07'});
p2Li.eq(-5).next().css ({'backgroundColor':'#ff7'});
p2Li.eq(-5).next().nextAll().css ({'boxShadow':'5px 5px 0 #f07 inset'}); // 메소드 체인 형식 (--> .메소드.메소드.메소드)

p2Li.eq(10).parents('#wrap').css ({'border':'3px dotted #57a'}); // 부모 격 모두 적용
p2Li.eq(10).parentsUntil('#wrap').css ({'outline':'5px solid rgba(51,51,255,0.3)'}); // #wrap을 제외하고 그 직전 부모까지 적용
p2Li.eq(10).parent().css ({'border':'1px dotted #171717'});

p2Li.parent().siblings().css({'backgroundColor':'#cfc', 'padding':'10px', 'margin-bottom':'10px'}); // 해당되는 선택자의 형제들만 선택됨(선택자 제외)
p2Li.parent().parent().siblings('h1').css({'backgroundColor':'#cce', 'padding':'10px', 'margin-bottom':'10px'}); // 부모의 부모의 형제중 첫째

// ----------------------------------------------------------------------------------------------------------------------------

var evt = $('.evt');
var evtLi = evt.children('li');

evtLi.eq(0).on('click', function(e){
  e.preventDefault();
  evtLi.css({'backgroundColor':'#a9d'});
});
evtLi.eq(1).on('mouseenter', function(e){
  e.preventDefault();
  evtLi.css({'backgroundColor':'transparent'});
})

evtLi.on('click', function(e){
  e.preventDefault();
  // 선택한 그것을 제외한 나머지 li에 border-bottom을 적용
  // console.log(e);
  $(this).css({'border':'0'});
  $(this).siblings().css({'borderBottom':'5px solid #333'});
  var thisI = $(this).index(); // 선택한 아이가 몇번째인지 알려주는 것
  console.log(thisI);
  // eq() : 순서를 직접 언급해서 명령실행
  // index() : 순서를 확인
});

/* 
  click, dbclick, mousedown, mouseup, mousemove,
  mouseenter, mouseleave, mouseover, mouseout,
  keypress, keydown, keyup,
  focus, blur, 
  touchstart, touchend, touchmove,
  scroll, resize
*/

})(jQuery);