// loop_01.js

/*
var n = 0;
console.log(n);
n += 1;
console.log(n);
n += 1;
console.log(n);
n += 1;
console.log(n);
n ++;
console.log(n);
*/

/*
var k = 0;
while( k < 10 ){
  console.log('k: ', k);
  k += 1;
  // break;
}

console.log('k는 이제', k, '이 되었습니다.');
console.log('k는 이제', k, '이 되었습니다!');
*/

/*
while은 어떠한 값을 도출하기 위해 계속 반복하는 형태
3가지 조건을 갖춰야 한다.
1. 최초의 값
2. while의 조건 값
3. 변동(연산)을 주는 값
*/

/*
// var test = document.getElementsByClassName('test')[0];
// var test = document.getElementsByTagName('div')[0];
var test = document.getElementById('wrap');

var l = 0;  // 보편적으로 0부터 시작 
while(l <= 5){  // 5랑 같다 까지 총 6번 실행
  var p = document.createElement('p');
  p.innerText = (l) + '번째 p요소에 글자를 작성합니다.';
  test.append(p);
  l += 1; // 빼먹으면 큰일!
}
*/

var m = 0;
do{
  console.log(m)
  m += 1;
} while( m < 0 );

// 반복문의 중요 포인트 3가지 : 첫번째 값, 조건, 조건의 수행연산(증감)
// while(조건){ 조건이 참이면, 기능 수행}
// do{ 일단 수행} while(조건비교)