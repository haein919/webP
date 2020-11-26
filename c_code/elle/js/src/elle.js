var nowT = deviceType();
// console.log('device체크: ' , nowT);
var body = $('body');

(function($){
  var dType = ['mob','tab','lap','pc'];
  var wrap = $('#wrap');
  if(nowT === dType[0]){
    wrap.load('./elleMain/elle_m_mob.html', function(){
      body.append('<script src="../js/src/elle_m_mob.js"></script>');
    });
  }else{
    wrap.load('./elleMain/elle_m_other.html', function(){
      body.append('<script src="../js/src/elle_m_other.js"></script>');
    });
  }
  
})(jQuery);