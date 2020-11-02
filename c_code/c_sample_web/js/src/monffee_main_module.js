// monffee_main_module.js

// $(document).ready(function(){/* jQuery */});
// $(function(){/* jQuery */});
// 위 두가지는 예전 버전

(function($){
  // jQuery
  var headBox = $('#headBox');
  headBox.load('./monffee/headBox.html');

})(jQuery);

// jQuery에서는 선택자의 형태가 css와 매우 유사하다.
// 단, $(' ')를 이용하여 내부에 선택자를 작성해야 한다. 
