// ex_03_modal.js
(function($){
  var data = [
    { "title":"juice_01", "thumImg":"juice_small_01.jpg", "bigImg" :"juice_big_01.jpg", "content" :"image_01 설명 lorem2" },
    { "title":"juice_02", "thumImg":"juice_small_02.jpg", "bigImg" :"juice_big_02.jpg", "content" :"image_02 설명 lorem5" },
    { "title":"juice_03", "thumImg":"juice_small_03.jpg", "bigImg" :"juice_big_03.jpg", "content" :"image_03 설명 lorem10" },
    { "title":"juice_04", "thumImg":"juice_small_04.jpg", "bigImg" :"juice_big_04.jpg", "content" :"image_04 설명 lorem15" }
  ];
  var url = '../../img/modal/';
  // -------------------------------------------------------------------------------
  var modalInCode = '<li><button type="button"><span></span></button></li>';
  var galleryCode = '<div class="gallery_box"><div class="gallery_area"><div class="close"><button type="button"><span>닫기</span></button></div><div class="big_img"><p>narration</p></div></div></div>';
  // -------------------------------------------------------------------------------
  var modal = $('.modal_01');


  
  var modalUl = modal.children('ul');
  
  var i = 0;
  var modalBtn;
  var temLi;
  modalUl.empty(); // 선택자 내부를 지우기
  
  for(; i < data.length; i+=1){    
    modalUl.append(modalInCode);
    temLi = modalUl.children('li').eq(-1);
    modalBtn = temLi.find('button');
    modalBtn.css({'background-image':'url('+ url + data[i].thumImg + ')', textTransform:'uppercase'});
    modalBtn.find('span').text(data[i].title);

    // temLi.attr({'data-big':data[i].bigImg, 'data-narr':data[i].content});
  };

  var modalLi = modal.find('li');
  var btn = modalLi.find('button');

  var galleryBox, close, bigImg, narr;
  var timed = 500;
  var indexCheck;

  btn.on('click', function(e){
    e.preventDefault();
    var it = $(this).parent('li');
    var itI = it.index();
    indexCheck = itI; 
 // ------------------------------------------------
    modal.after(galleryCode);     // 선택자 바로 뒤에
    galleryBox = $('.gallery_box');
    close = galleryBox.find('.close');
    bigImg = galleryBox.find('.big_img');
    narr = bigImg.children('p');

 // ---------------------------------------------------------------------------------
    bigImg.css({'background-image':'url('+ url + data[indexCheck].bigImg + ')'});
    narr.text(data[indexCheck].content);
    
    galleryBox.stop().fadeIn(function(){
      close.children('button').focus();
      setTimeout(function(){
        narr.addClass('action');
      }, timed/2);
    });
 // ----------------------------------------------
    close.on('click', function(e){
      e.preventDefault();
      galleryBox.stop().fadeOut();
      modalLi.eq(indexCheck).find('button').focus();
      narr.removeClass('action');
      galleryBox.remove(); // galleryBox 해당 내용 자체를 삭제(F12로 확인 시 생성되면 사라지지 않고 계속 생기기 때문에 기입)
    });
 // ------------------------------------------------
  });

})(jQuery);