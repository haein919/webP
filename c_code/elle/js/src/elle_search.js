// elle_search.js

(function($){
 // jQuery start
 var headBox = $('#headBox');
 var searchBox = headBox.find('.searchBox');
 var isuueArea = searchBox.find('.issue_area');
 var issueUl = isuueArea.find('ul');
 var issueLi = issueUl.find('li');
 var time = 5000;

  // var copyLi = issueLi.clone();
  // issueUl.append(copyLi);
  // var reIssueLi = issueUl.find('li');
  // var textN = 0;
  
  issueLi.slideUp({
    animationtype: 'slide',    //animationtype: 'fade', animationtype: 'slide',
    speed: 2000,      //speed:'slow' , speed: 'normal' , speed: 'fast'   milliseconds
    timeout: 2000,      //milliseconds
    type: 'sequence',     //type: 'random', type: 'random_start',
    containerheight: '1em'    //containerheight:'auto' , containerheight: '1em'   css-height-value
    //runningclass: 'innerfade'   //CSS-Class which the container get's applied ( Default : 'innerfade')
 });


 // jQuery end
})(jQuery);
