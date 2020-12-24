// ex_17_map.js
var container = document.getElementById('map');

var MysetMap = function(lat, lng){
  var options = { 
    center: new kakao.maps.LatLng(lat, lng),
    level: 3 };

  var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

  // 마커가 표시될 위치입니다 
  var markerPosition  = new kakao.maps.LatLng(lat, lng); 

  // 마커를 생성합니다
  var marker = new kakao.maps.Marker({
      position: markerPosition
  });
  // 마커가 지도 위에 표시되도록 설정합니다
  marker.setMap(map);

  // 마우스 휠과 모바일 터치를 이용한 지도 확대, 축소를 막는다
	map.setZoomable(false);   
	// 지도에 확대 축소 컨트롤을 생성한다
	var zoomControl = new kakao.maps.ZoomControl();
	// 지도의 우측에 확대 축소 컨트롤을 추가한다
	map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
}; // MysetMap()
MysetMap(37.26277801916164, 127.02996568532602);

(function($){
  var store = $('.store');
  var storeLi = store.find('li');

  storeLi.on('click', function(e){
    e.preventDefault();
    $('#map').empty();
    
    var liLink = $(this).children('a');
    // parseInt() -> 정수로 변환
    // parseFloat() -> 소수점까지 숫자로 변환
    // parseFloat()로 하지 않으면 문자로 전달되기 때문에
    var liLat = parseFloat(liLink.attr('data-X'));
    var liLng = parseFloat(liLink.attr('data-Y'));
    console.log(liLat, liLng);
    MysetMap(liLat, liLng);

    $(this).addClass('action');
    $(this).siblings().removeClass('action');
  });
})(jQuery);