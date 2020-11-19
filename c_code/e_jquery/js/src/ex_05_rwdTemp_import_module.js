// ex_05_rwdTemp_import_module.js

(function($){
 // jQuery start
  var nowW = deviceSize(); // 디바이스 환경을 체크해 놓은 값 (ex_05_rwdTemp.js 에서 함수로 정의해놓은것을 불러옴)
  // console.log(nowW);
  var deviceType = ['mobile', 'tablet', 'laptop', 'pc', 'pcfull' ];
  var url = "./rwdTemp/"
  var viewBox = $('#viewBox');
// -----------------------------------------------------------------------------
// viewBox import file
var viewImport = function(){
  viewBox.append('<script src="../js/src/temp_mobile.js"></script>');
}; // 불러올 script 파일이 동일하다면 함수자체를 변수로 정의해서 아래 조건 식에 붙인다.
// ----------------------------------------------------------------------------------------
  if(nowW === deviceType[0]){
    viewBox.load( url + 'rwdTemp_mobile.html', function(){
      $(this).append('<script src="../js/src/temp_mobile.js"></script>'); // 원래는 이렇게 아래식 모두 동일하게 작성해야 함. 편의를 위해 위 viewBox import file 처럼 변수를 정의해줌
    } );
  
  }else if(nowW === deviceType[1]){
    viewBox.load (url + 'rwdTemp_tablet.html', viewImport );
  
  }else {
    viewBox.load( url + 'rwdTemp_pc.html', viewImport );
  }

 // jQuery end
})(jQuery);
