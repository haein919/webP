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
  // modal.append(galleryCode); // 선택자 내부의 뒤에
  modal.after(galleryCode);     // 선택자 바로 뒤에
  
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

    temLi.attr({'data-big':data[i].bigImg, 'data-narr':data[i].content});
  };

  var modalLi = modal.find('li');
  var btn = modalLi.find('button');

  var galleryBox = $('.gallery_box');
  var close = galleryBox.find('.close');

  var bigImg = galleryBox.find('.big_img');
  var narr = bigImg.children('p');
  var timed = 500;

  var indexCheck;

  btn.on('click', function(e){
    e.preventDefault();
    var it = $(this).parent('li');
    var itI = it.index();
    indexCheck = itI; 
    var thisBig = it.attr('data-big');
    var thisNarr = it.attr('data-narr');

    bigImg.css({'background-image':'url('+ url + thisBig + ')'});
    narr.text(thisNarr);

    galleryBox.stop().fadeIn(function(){
      close.children('button').focus();
      setTimeout(function(){
        narr.addClass('action');
      }, timed/2);
    });
  });

  close.on('click', function(e){
    e.preventDefault();
    galleryBox.stop().fadeOut();
    modalLi.eq(indexCheck).find('button').focus();
    narr.removeClass('action');
  });

})(jQuery);