// js_09_object.js

// var obj = new Object;
// var obj = {};  위와 똑같은 것. 'obj는 객체이다'
// obj = {'':''}; 앞은 property
var obj = {'samsung':'galaxy',
            'apple':'iphone',
            'google':'pixel',
            'lg':'belbet'};
// console.log(obj.google);
// console.log(obj['google']);

obj.nokia = 'banana';
obj.Fn = function(person){
  return person + '님 반가워요!'; 
};

// console.log(obj);
var x = obj.Fn('haein'); // 
// console.log(x);

var arrObj = [
  { 'company':'apple',
    'serise':'iphone',
    'site':'http://apple.com',
    'content':'2020년 애플의 최신 아이폰 출시'
  },
  { 'company':'samsung',
    'serise':'galaxy',
    'site':'http://samsung.com',
    'content':'갤럭시21 부품 유출'
  },
  { 'company':'lg',
    'serise':'wing',
    'site':'http://lg.com',
    'content':'과거의 가로본능을 기억하게하는 윙'
  },
  { 'company':'oneplus',
    'serise':'oneplus',
    'site':'http://oneplus.com',
    'content':'삼성,애플에 뒤쳐지지 않는 성능, 하지만 중국 제품이라는 현실.'
  }
];
// console.log(arrObj.length);
// console.log(arrObj[0].serise);
var p = 0;
for(; p < arrObj.length; p += 1){
  // console.log( (p+1) + '. ' + arrObj[p].serise );
}
arrObj.forEach(function(data, idx){
  // console.log( (idx + 1) +'. ' + data.serise)
});

var product = document.getElementsByClassName('product')[0];
var newDiv = document.createElement('div');
product.append(newDiv);
newDiv.classList.add('lg');
var h3 = document.createElement('h3');
newDiv.append(h3);
h3.innerText="lg";
var p = document.createElement('p');
newDiv.append(p);
var a = document.createElement('a');
p.append(a);
a.setAttribute('href', 'http://lg.com' );
a.innerText="lg";

