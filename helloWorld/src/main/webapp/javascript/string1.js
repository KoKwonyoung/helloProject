//string1.js
var val = 'hello';
val = new String('hello,world');
console.log(val.substring(2, 3));

var h3Tag = document.querySelector('h3'); // querySelector :쿼리 선택문
var text = h3Tag.innerHTML;
// var str = text.substring(2, 10);
var str = text.substr(2, 10); //2번부터 10번까지 가지고 오는 문구
str = text.slice(1, 5); //1번부터 5번 앞까지 문자를 잘라넣는 문구
// str = val.substring(0, 2);
// substring : n번 부터 n번째 앞까지 문자를 가지고와서 넣는 문구
// console.log(h3Tag.innerHTML);
var elem = document.getElementById('show'); //id값을 불러오기
// elem.innerHTML = '<h3>Hello</h3>'; //innerHTML: html 파일에 넣기
elem.innerText = str; //innerText 텍스트 처리, 문장자체를 텍스트로 변화시킨다,
console.log(elem);