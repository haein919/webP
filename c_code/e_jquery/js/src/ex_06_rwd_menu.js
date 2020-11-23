// ex_06_rwd_menu.js

(function($) {
  var winSize = deviceSize();
  var deviceType = [ 'mobile', 'tablet', 'laptop', 'pc', 'pcfull' ];
  // console.log(winSize);
  
  var headBox = $('#headBox');
  var menuBtn = $('.menu_btn');
  
  if(winSize === deviceType[0] || winSize === deviceType[1]){
    headBox.append('<script src="../js/src/rwd_menu_mobile.js"></script>');
  }else{
    menuBtn.remove();
    // headBox.append('<script src="../js/src/rwd_menu_mobile.js"></script>'); pc버전에서 따로 또 하나 만들고 싶으면 추가하면 됨
  }

})(jQuery);