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
  issueLi.slideUp(function(){
    $(this).slideDown();
  });


 // jQuery end
})(jQuery);
