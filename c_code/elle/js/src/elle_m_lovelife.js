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

  var offsetTop = lovelifeBox.offset().top; // 선택자가 얼만큼 떨어져있는지
  console.log(offsetTop);

  loveArea.hide();
  lovelifeArea.hide();
  lifeArea.hide();
  win.on('scroll',function(e){
    var winSt = win.scrollTop();
    if(winSt >= 2900){
      loveArea.stop().fadeIn();
      lovelifeArea.stop().fadeIn();
      lifeArea.stop().fadeIn();
      lovelifeDl.addClass('action');
    }
  });

  // jQuery end
})(jQuery);
