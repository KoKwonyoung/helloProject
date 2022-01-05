// UI 테스트 : 화 ~ 월(자바스크립트)
//function6.js

// function sum(a, b) { //펑션 정의방식 문
//     return a + b;
// }
let sum = function (first, last) { //펑션 표현방식 문
    return first + last;
}

let anotherSum = sum;
console.log(sum(10, 20));
console.log(anotherSum(30, 40));

// => : 화살표 함수(Arrow function)
let getMinVal = (first, last) => {
    return first > last ? last : first; //방식 3
}

//최솟값 구하기
//방식 1
// if(first > last) {
//     result = last;
// }else {
//     result = first;
// }
//방식 2
// var first > last ? last : first;
// return result;


console.log(getMinVal(10, 5));