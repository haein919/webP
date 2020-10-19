// js_04_condition.js

// var myOld =prompt('당신의 태어난 연도를 입력하세요.')
// console.log (myOld);

// var nowYear = new Date().getFullYear(); //올해 파악하는 기능
// console.log( nowYear - myOld );

// var myNai = nowYear - myOld + 1;
/*
if( myNai < 20 ){ console.log('당신은 아직 미성년자 입니다.')}  
else if( myNai >= 40 ) { console.log('당신은 40대 입니다.')}
else { console.log('2~30대의 청년입니다.')}
*/

// ----------------------------------------------------------------------------
// <다수분기 : 여러작업 동시 수행>
// switch(값){ 
//  case 값1: 참이면 수행 break; 
//  case 값2: 참이면 수행 break; 
//  case 값3: 참이면 수행 break; 
//  case 값4: 참이면 수행 break; 
//  case 값5: 참이면 수행 break; 
//  case 값6: 참이면 수행 break; 
//  default: 위기능이 모두 거짓이면 수행; 
// }
// break가 없으면 다음으로 넘어가서 또 수행되기 때문에 break를 반드시 적어줘야한다.

/*
var n = parseInt( Math.random() * 5 ); //랜덤숫자 0~5 미만까지 생성
var r;
switch(n){ 
  case 1:
    r = '1이 나온 당신: 바보입니다.';
    break;
  case 2:
    r = '2가 나온 당신: 똑똑한 천재입니다.';
    break;
  case 3:
    r = '3이 나온당신: 킈야 .';
    break;
  case 4:
    r = '4가 나왔군요~';
    break;
  case 5:
    r = '5가 나왔네요 츅츅!';
    break;
  default:
    r = '의외의 결과입니다....';
  }
  console.log(n, ':', r );
*/

// -----------------------------------------------------------------
// if, switch 는 하나의 문법구조를 이용하여 처리하는 것
// 삼항 연산자 : 3가지의 항목을 가진 연산자 기법
var i = 1;
// (조건)? 조건이 참이면 수행 : 거짓이면 수행;
// (i > 10) ? console.log('i는 10보다 크다') : console.log('i는 10보다 작다') ;

// if(조건1){ 조건1 참}else if(조건1아닌조건2){조건2 참...} else if(){} else{}
// switch(매개변수){ case 값1:... break; case 값2: ...break; ... default: 최종; }
// (조건) ? 조건이 참이면: 조건이 거짓이면;