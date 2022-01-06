// number1.js

let num1 = 100.123;
//소숫점 내림 & 정수 반환 Math.floor()
console.log(Math.floor(num1));
//소숫점 올림 & 정수 반환 Math.ceil()
console.log(Math.ceil(num1));
//입력값 반올림한 수와 가장 가까운 정수값 반환 Math.round()
console.log(Math.round(num1));
// 1 ~ 2 : 1.4
//  2
//  1.4
//  1
let findVal = 1;
let order = parseInt(Math.random() * 9) + 1;
for (let i = 0; i < 9; i++) { //1밑의 소숫점을 10번 랜덤반복
    let temp = parseInt(Math.random() * 9) + 1;
    document.write(`<div>${temp}</div>`)
    if (i % 3 == 2) {
        document.write('<br>')
    }
    if (i == order) {
        findVal = temp;
    }
}
window.alert(findVal + '를 찾으세요')
// console.log(Math.floor(Math.random() * 5) + 1); //1 ~ 5 사이의 임의의 숫자
//Math.floor, parseInt 정수만

function clickFnc(e) {
    console.log(e.target.innerText)

    if (e.target.innerText == findVal) {
        window.alert(findVal + '를 찾았습니다!');
        e.target.style.color = 'blue';
    }
}


let divElem = document.getElementsByTagName('div'); 
//태그이름의 갯수를 찾아주는 문구 getElementsByTagName
for (let i = 0; i < divElem.length; i++) {
    divElem[i].onclick = clickFnc;
}