// monffee_main_module.js

// $(document).ready(function(){/* jQuery */});
// $(function(){/* jQuery */});
// 위 두가지는 예전 버전

(function($){
  // jQuery
  var headBox = $('#headBox');
  var viewBox = $('#viewBox');
  var bestNewsBox = $('#bestNewsBox');
  var issueBox = $('#issueBox');

  headBox.load('./monffee/headBox.html');
  viewBox.load('./monffee/viewBox.html');
  bestNewsBox.append('<script src="../js/src/monffee_bestNewsBox.js"></script>');
  issueBox.load('./monffee/issueBox.html', function(){
    $(this).append('<script src="../js/src/monffee_issueBox.js"></script>');
  });

})(jQuery);

// 불러오는 파일의 위치는 html 기준이다!!
// jQuery에서는 선택자의 형태가 css와 매우 유사하다.
// 단, $(' ')를 이용하여 내부에 선택자를 작성해야 한다. 
