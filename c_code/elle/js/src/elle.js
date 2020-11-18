var nowT = deviceType();
// console.log('device체크: ' , nowT);


(function($){
  var dType = ['mob','tab','lap','pc'];
  var wrap = $('#wrap');
  if(nowT === dType[0]){
    wrap.load('./elleMain/elle_m_mob.html');
  }else{
    wrap.load('./elleMain/elle_m_other.html');
  }

})(jQuery);