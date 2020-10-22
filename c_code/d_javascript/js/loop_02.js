// loop_02.js
// 시작의 값, 조건비교, 값의 연산

/*
  var n = 0;
  while(n < 5){
    console.log(n);
    n += 1;
}
*/

// for(var n = 0; n < 5 ; n+=1 ){
//   console.log(n);
// }

/*
var y = 0;
for( ; y < 10; ){
  console.log(y);
  y += 1;
}
// 위와 동일한 형태 for(var y=0; y<10; y+=1){}
*/
/*
var k=0; // var을 for문 밖으로 빼는 이유 : for문이 끝나도 사용할 경우를 위해
for( ; k < 5; k += 1 ){
  console.log(k);
}
console.log('k: ', k);
*/

var arr = ['포도', '사과', '바나나', '딸기']
var classN = ['grape', 'apple', 'banana', 'strawberry'];
var testEl = document.getElementsByClassName('test')[0];
// 요소를 삽입하기 조건: 1.요소생성, 2.요소내용기입. 3.요소삽입
var pEl;

var i = 0;
for(; i < 4; i +=1){
  pEl = document.createElement('p');
  pEl.innerText = arr[i] + '를 먹는다';
  // <각각의 p에 class 이름을 설정>
  // 1. attribute 속성으로 설정하는 방법(어떠한 속성명이든 관계없다.)
  // pEl.setAttribute('class', classN[i]); 
  // 2. className 방법 단점은 한개 class name밖에 설정 안됨
  // pEl.className = classN[i]; 
  // 3. classList : 클래스 속성을 리스트처럼 여러개 설정 가능
  pEl.classList = classN[i];
  pEl.classList.add('testClass');
  // pEl.classList.add( classN[i] ); // class이름을 추가해주는 것으로 이미 있는것에 다른 이름 하나 더 추가 가능
  // pEl.classList.remove( classN[i] );
  // pEl.classList.toggle( classN[i] ); // class이름을 넣었다 뺐다 하는 것 ex.이벤트 배너 같은 느낌

  testEl.append(pEl); // append(덧붙이다,첨부하다) 생성한 데이터를 넣어서 나타내는 것
 // console.log(arr[i]);
}
// for(최초의 값; 조건; 연산수행){}

var coffee = ['esspresso', 'americano', 'latte', 'flatwhite', 'cafe mocha', 'macchiato'];
// for(var j =0; j< coffee.length ; j +=1){
//   console.log('1:', coffee[j]);
// }
// for ~ in문법은 객체를 위한 형식, 배열을 위해 만든 형식이 아니다.
// for (var i in coffee) { console.log('2:', coffee[i]); }

// 배열형식을 사용할 때는 for, forEach를 사용
/*
coffee.forEach(function(data, index){ // data, index 처럼 매개변수는 여러개 들어갈 수 있다.
  console.log( data, index );
});
*/

// for ~ in을 위해서는 객체를 위해 사용
var obj = {
  'spring':'black tea', // 'spring'이 key 'black tea'가 값
  'summer':'ice americano',
  'autumn':'hot choco',
  'winter':'milk tea'
};
// var o =0;
// for(; o<4; o +=1){  console.log(obj); }
//for(var o in obj){
 // console.log(o); // 보여지는 것은 'spring' 'summer' 'autumn' 'winter'이지만 실제로는 그 키 안에 값을 불러옴.
  //console.log(obj[o]); // 이때 보여지는 것이 값
//}
// 반복문
// for, forEach, for-in

var i = 0;
for(; i <100; i +=1){
  if(i < 10){
    console.log( '0' + i);
  }else if(i == 50){
    // break;
    continue;
  }else{
    console.log( i );
  }

}