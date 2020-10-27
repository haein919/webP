// js_06_function.js

// var i = 0;
// console.log(i);

// 함수는 어떠한 기능을 수행하도록 처리하게만든 형태
// 함수를 호출하여 사용할때에는 '함수의이름()'을 사용한다.

var fnR = 10;
// console.log( fnR );
var fn = function(){ return 20; };

fnR = fn();
// console.log( fnR );

var fn2 = function(a){ return a*a; };
fnR = fn2(16);
// console.log( fnR );

// var old = 35;
var MyOld = function(old){
  var ret;
  if(old < 20){
    ret = '아직 미성년입니다.';
  }else if(old < 30){
    ret = '아직 순수(?) 하시군요';
  }else if(old < 60){
    ret = '가장 열심히 일하시고있는 시기이군요.';
  }else {
    ret = '이제 즐기면서 ~~';
  }
  return ret;
};

// console.log(ret);
// console.log(MyOld(15));
// console.log(ret);

// 함수 : 함수 선언식, 함수 표현식

//함수자체가 호이스팅현상 발행하여 시작점에 있는것처럼 인지
function DecFn(){ return 1;} 

// 변수명이 호이스팅현상 발생
var ExpFn = function(){ return 2;}

// console.log( DecFn() );
// console.log( ExpFn() );

// 매개변수(argument), 인수, 인자, 전역변수(global), 지역변수(local), 익명함수, 기명함수,
// 함수 선언식(declarations), 함수 표현식(Expression), hoisting, 생성자함수

// 함수는 최초의 형태 하나만 존재하므로 이를 복제하여 사용한다는 개념으로 인지-생성자함수
var myNewFn = function(nick){
  this.name = nick;
  this.family = 'lee';
  this.fullName = this.name + ' ' + this.family;
  // return nick + ' ' + family;
};

var a = new myNewFn('xido');
// console.log( a.fullName );

// this는 js에서 2가지의 개념을 가진다: 1(window), 2(생성자처리시 매개변수 또는 선택자체)
// console.log( this );
// -------------------------------------------------------------------------------------

// 선언식 (함수자체에 이름을 부여하는 방법)
// 표현식 (함수를 변수에 대입하는 방법)

// 생성자함수(함수기능을 복제하여 재처리하는 함수)
// 즉시 실행함수(함수지만 재활용이 불가능한 일회용함수)
/*
  var ffn = function(){
    var i = 10;
    var j = 7;
    return i + j;
  };
  console.log( ffn() );
*/


// 즉시실행함수(IIFE:Immediately Invoked Function Expression) 
(function(k){
  var i = k;
  var j = 7;
  console.log(i * j);
  return i * j;
})(10);

/*
var a = [1,2,3];
a.push('one'); // push : 뒤에 내용 추가
console.log(a);
a.shift(); // shift : 맨 앞에 있는 것을 삭제하는 것.
console.log(a);
a.push('three');
a.push('four');
console.log(a);
a.pop(); // pop : 끝에서부터 하나씩 삭제
a.pop();
console.log(a);
a.unshift('before'); // unshift : 맨앞에 내용 추가
console.log(a);
*/

/*
var b = [1,2,3];
var c = [4,5,6];
var d;
d = b.concat(c); // concat : 두개의 변수 합치기
console.log(b);
console.log(c);
console.log(d);
*/

/*
var ar;
// ar[0]=10;
// console.log(ar); // ar이라는 변수만 생성했고 그 객체의 성격을 나타내지 않았기에 알 수 없음.
// ar = new Array // javascript에서는 이렇게 처리해서 쓰지 않음.
ar = [];
ar[4]='in string';
console.log(ar);
console.log(ar[2]);
*/

var arrQ_01=[];
var i =0;
for( ; i < 100; i+=1 ){
  arrQ_01[i]=i+1;
}
console.log(arrQ_01);

var arrQ_02=[];
var j =0, k, l;
for( ; j < 100; j+=1){
  k=j%2;
  if(k !== 0){
    arrQ_02.push(j);
   }
 //if(k === 0){ continue;}
 //l= parseInt(j/2)
// arrQ_02[l]=j;}  
}
console.log(arrQ_02);

var arrQ_03=[];
var p =0;
for( ; p < 100; p+=1){
  arrQ_03[p]=100-p;
}
console.log(arrQ_03);

var arrQ_04=[];
var o =0, t;
for( ; o < 100; o+=1){
  t=o%2;
  if(t===0){
    arrQ_04.push(100-o);
  }
}
console.log(arrQ_04);
