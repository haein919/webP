// elle_m_lovelife.js
(function($){
  // jQuery start
  var win = $(window);
  var lovelifeBox = $('#lovelifeBox');
  var lovelifeImgArea = lovelifeBox.find('.lovelife_img_area');
  var loveArea = lovelifeImgArea.find('.love_area');
  var lovelifeArea = lovelifeImgArea.find('.lovelife_area');
  var lifeArea = lovelifeImgArea.find('.life_area');
  var lovelifeDl = lovelifeImgArea.find('dl');

  var winH = win.outerHeight(); 
  var offsetTop = lovelifeBox.offset().top; // 선택자가 얼만큼 떨어져있는지
  // console.log(offsetTop - winH);
  var myLoveLifeOffset = offsetTop - winH;

  loveArea.hide();
  lovelifeArea.hide();
  lifeArea.hide();
  win.on('scroll',function(e){
    var winSt = win.scrollTop();
    if(winSt >= myLoveLifeOffset){
      loveArea.stop().fadeIn();
      lovelifeArea.stop().fadeIn();
      lifeArea.stop().fadeIn();
      lovelifeDl.addClass('action');
    }
  });

  // jQuery end
})(jQuery);
