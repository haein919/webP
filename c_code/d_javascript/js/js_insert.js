// js_insert.js
var contentBox = document.getElementById('contentBox');
// var contentBox = document.querySelector('#contentBox'); 위와 같은 뜻

contentBox.innerHTML = '<h2>article 생성</h2>';
contentBox.style = 'background-color:#fa0';

// 문서에 삽입할 요소를 생성(실제 브라우저에 삽입되지 않은 상태)
var createP = document.createElement('p');

// 생성한 요소에 요소를 포함한 내용을 생성 및 삽입
// 요소를 포함하지 않고, 글자만 생성 및 삽입할 경우에는 'innerText'로 처리
var innerP = createP.innerHTML = 'p요소를\n 생성하고 <br /> 내용을 작성';
console.log('내가 원하는 검증의 자료를\n \"줄바꿈\" 처리하여\n 보고자 할때')

// 생성된 요소를 실제 요소(#contentBox)에 첨부(실제 삽입, 삽입된 요소는 재사용X)
contentBox.appendChild(createP);