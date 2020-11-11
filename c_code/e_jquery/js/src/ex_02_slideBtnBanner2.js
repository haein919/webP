// ex_02_slideBtnBanner2.js

(function($){
  var slide = $('.slide_02');
  var slideBtnPart = slide.find('.slide_btn');
  var slideBtn = slideBtnPart.children('button');

  var indexSlide = slide.find('.index_slide');
  var slideLi = indexSlide.find('li');
  var liLen = slideLi.length;

  var indexN = 0;
  var permission = true; 
  var timed = 500;

  slideLi.not( $('.action') ).hide(); // action이라는 클래스만 제외하고 숨기기
  /*
  slideLi.hide();
  indexSlide.find('.action').show();
  */
// action클래스가 몇번째에 있는지 파악하는 기능
var actionIndex;
var MyActionIndex = function(){
  var i = 0, actionCheck;
  for(; i<liLen; i+=1){
    actionCheck = slideLi.eq(i).hasClass('action');
    if(actionCheck){
      actionIndex = i;
      break;
    } // if()
  } // for()
  return actionIndex;
} // MyActionIndex()
// --------------------------------------------------------------
var SlideAction = function(){
  slideLi.eq(indexN).show();
  slideLi.eq(actionIndex).stop().fadeOut(timed/2, function(){
    slideLi.eq(indexN).addClass('action');
    slideLi.eq(indexN).siblings().removeClass('action');
    permission = true;
    setTimeout(function(){
      permission = true;
    }, timed/100);
  });
}; // SlideAction()

// ----------------------------------------------------------------
 slideBtn.on('click', function(e){
  e.preventDefault();
  MyActionIndex();

  if(permission){
    permission = false;
    var it = $(this).attr('class');

    if(it === 'next'){
      indexN += 1;
      if(indexN >= liLen){
        indexN = 0;
      } // if()

      // slideLi.eq(indexN).show();
      // slideLi.eq(actionIndex).fadeOut(function(){
      //   slideLi.eq(indexN).addClass('action');
      //   slideLi.eq(indexN).siblings().removeClass('action');
      // });
      SlideAction();

    }else if(it === 'prev'){
      indexN -= 1;
      // slideLi.eq(indexN).show();
      // slideLi.eq(actionIndex).fadeOut(function(){
      //   slideLi.eq(indexN).addClass('action');
      //   slideLi.eq(indexN).siblings().removeClass('action');
      // }); // fadeOut()
      SlideAction();

      if(indexN <= -1){
        indexN = liLen -1;
      } // if()

    } // if(it === 'prev') End --------------------

    console.log(indexN);
  }  // if(permission)

 }); // slideBtn.on('click') End

})(jQuery);