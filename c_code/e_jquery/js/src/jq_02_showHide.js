// jq_02_showHide.js

(function($){

  var timed = 1000;
  var box = $('.box');
  var boxPar = box.children('p');
  boxPar.css({ 'borderRadius':'1rem'});

  var part = $('.part');
  var partUl = part.children('ul');
  var showHide = partUl.children('.show_hide');
  var fade = partUl.children('.fade');
  var slide = partUl.children('.slide');
  var className = partUl.children('.class_name');
  var other = partUl.children('.other');

  // show-hide
  var shBtn = showHide.children('button');
  shBtn.eq(0).on('click',function(e){
    e.preventDefault();
    boxPar.stop().show(timed);
  });

  shBtn.eq(1).on('click',function(e){
    e.preventDefault();
    boxPar.stop().hide(timed);
  });

  shBtn.eq(2).on('click',function(e){
    e.preventDefault();
    boxPar.stop().toggle(timed);
  });

  // fade
  var fadeBtn = fade.children('button');
  fadeBtn.eq(0).on('click',function(e){
    e.preventDefault();
    boxPar.stop().fadeIn(timed);
  });

  fadeBtn.eq(1).on('click',function(e){
    e.preventDefault();
    boxPar.stop().fadeOut(timed);
  });

  fadeBtn.eq(2).on('click',function(e){
    e.preventDefault();
    boxPar.stop().fadeToggle(timed);
  });

  // slide
  var slideBtn = slide.children('button');
  slideBtn.eq(0).on('click',function(e){
    e.preventDefault();
    boxPar.stop().slideDown(timed);
  });

  slideBtn.eq(1).on('click',function(e){
    e.preventDefault();
    boxPar.stop().slideUp(timed);
  });

  slideBtn.eq(2).on('click',function(e){
    e.preventDefault();
    boxPar.stop().slideToggle(timed);
  });

  //class_name
  var classBtn = className.children('button');
  classBtn.eq(0).on('click',function(e){
    e.preventDefault();
    boxPar.addClass('view');
  });

  classBtn.eq(1).on('click',function(e){
    e.preventDefault();
    boxPar.removeClass('view');
  });

  classBtn.eq(2).on('click', function(e){
    e.preventDefault();
    boxPar.toggleClass('view');
  });

})(jQuery);