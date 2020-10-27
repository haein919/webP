// dom_02.js


var nav = document.getElementsByClassName('nav')[0];
var cln = ['nav_01','nav_02','nav_03','nav_04'];
var j=0, li, link;
var clnLen = cln.length;
for( ; j < clnLen; j += 1 ){
li = document.createElement('li');
link = document.createElement('a');
li.append(link);
li.classList.add(cln[j]);
link.setAttribute('href', cln[j]+'.html');
link.innerText="리스트0" + (j+1);
nav.append(li);
}

  