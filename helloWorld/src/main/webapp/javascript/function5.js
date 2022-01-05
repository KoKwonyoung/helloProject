//function5.js
var result = 100;
console.log(result);

function sum(first, last) {
    var result = first + last;
    console.log(result);
}
sum(10, 20);

var result = 200;
console.log(result);

// let result = 300; //중복선언시 오류가난다. 
//하지만 블록안에서 도는 특성이있기에 블록이 있으면 따로 실행 된다.
let summay = 100;
console.log(summay);

function block1() {
    let summay = 200;
    console.log(summay);

}
console.log(summay);

for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.log("--------------")
// console.log(i); //let 으로 이미 i를 쓰고있기에 출력이 안됨.

let myName = 'Hong';
myName = 'Hwang';

const pi = 3.14; //const 상수 선언 //한번 할당 되고나면 바꿀 수 없음
// pi = 3.1415;

const obj = {
    fullName: 'KildongHong',
    birth: '2012-05-04',
    score: 80,
    showInfo: function () { //메소드
        return this.fullName + ', ' + this.age;
    },
    showAge: function () {
        let today = new Date();
        let birth = new Date(this.birth);
        let age = today - birth;
        age = age / (1000 * 60 * 60 * 24 * 365) //1000밀리세컨드 60초 60분 24시간 365일
        //그냥 하면 밀리세컨드 단위로 나오기에 연산해준다.
        age = Math.floor(age); //소숫점이 안나오게 변형
        return age;
    }
}
console.log(obj.fullName); //참조 영역
obj.age = 30; //참조하고있는 필드의 영역이라 변경이 가능하다.
console.log(obj.age);

console.log(obj.showInfo()); //메소드

console.log(obj.showAge() + '살'); //메소드

// document.write('hello');