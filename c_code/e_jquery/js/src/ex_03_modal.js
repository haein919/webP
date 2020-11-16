// ex_03_modal.js
(function($){
  var modal = $('.modal_01');

  var modalLi = modal.find('li');
  var btn = modalLi.find('button');
  var galleryBox = $('.gallery_box');
  var close = galleryBox.find('.close');

  var url = '../../img/modal/';
  var bigImg = galleryBox.find('.big_img');
  
  btn.on('click', function(e){
    e.preventDefault();
    var it = $(this).parent('li');
    var itI = it.index();
    indexCheck = itI; 
    var thisBig = it.attr('data-big');
    galleryBox.stop().fadeIn(function(){
      close.children('button').focus();
    });
    bigImg.css({'background-image':'url('+ url + thisBig + ')'});

  });
  close.on('click', function(e){
    e.preventDefault();
    galleryBox.stop().fadeOut();
    modalLi.eq(indexCheck).find('button').focus();
  });

})(jQuery);