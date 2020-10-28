// js_08_array2.js

var coffee = ['esspresso', 'americano', 'cappuccino', 'cafe latte', 'cafe mocha','vanila latte'];
// console.log(coffee);

var cLen = coffee.length;
// console.log(cLen);

// pop(), push(), shift(), unshift(), concat()
// console.log(coffee[2]);

var i = coffee.indexOf('cafe mocha'); // 해당 목록이 배열에 없을 때 -> -1, 있을 경우에는 해당 위치 값 표현
// console.log(i); // 해당하는 배열 목록이 몇번 째에 있는지 확인할 때.

var str = '안산, 수원, 강릉, 부산, 제주, 서울, 태안, 순천, 여수, 거제, 인천';
// console.log(str.indexOf('부산')); // 글자 하나당 하나의 숫자로 인식 띄어쓰기도 인정 따라서 부산은 13으로 나옴

var strToArray = str.split(', '); // split : 배열을 만드는 기능; ('')안에 기준을 두면 그 기준에 따라 나뉘어짐
// console.log(strToArray);

var tel = '031-111-1111';
// console.log(tel.split('-'));

var coffeeToPar = coffee.join(', '); // join: 하나의 문장으로 바꾸는 것
// console.log(coffeeToPar);

// console.log(coffee);
var coffeeSort = coffee.sort(); // 알파벳 순으로 정리
// console.log(coffeeSort);
var coffeeSortReverse = coffeeSort.reverse();
// console.log(coffeeSortReverse);
var coffeeDec = coffee.sort(function(a, b){ return b-a});
// console.log(coffeeDec);

var arr = [1,5,10,3,2,7,6,8,9];
// console.log(arr.sort(function(a,b){return a-b}) );

coffee.push('macchiato');
coffee.pop();
coffee.shift();

// 변수.splice(시작순서, 갯수); -> 원하는 배열의 순서를 삭제(시작순서부터)
var sp = coffee.splice(0,1); 
// console.log(coffee);

var a = 'hi';
var b = a;
    a = 'bye'; 
console.log(a, b); // -> 결과: bye hi // a는 마지막 최종 바뀐 값

var c = ['toDay'];
var d = c;
        c[0] = 'nextDay';
// console.log(c[0], d[0]);

var e = c.slice(); // slice의 기능:복제 기능
    c[0] = 'prevDay';
console.log(c,e);