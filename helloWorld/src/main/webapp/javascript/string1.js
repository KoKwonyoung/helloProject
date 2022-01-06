//string1.js
// var val = 'hello';
// val = new String('hello,world');
// console.log(val.substring(2, 3));

// var h3Tag = document.querySelector('h3'); // querySelector :쿼리 선택문
// var text = h3Tag.innerHTML;
// // var str = text.substring(2, 10);
// var str = text.substr(2, 10); //2번부터 10번까지 가지고 오는 문구
// str = text.slice(1, 5); //1번부터 5번 앞까지 문자를 잘라넣는 문구
// // str = val.substring(0, 2);
// // substring : n번 부터 n번째 앞까지 문자를 가지고와서 넣는 문구
// // console.log(h3Tag.innerHTML);
// var elem = document.getElementById('show'); //id값을 불러오기
// // elem.innerHTML = '<h3>Hello</h3>'; //innerHTML: html 파일에 넣기
// elem.innerText = str; //innerText 텍스트 처리, 문장자체를 텍스트로 변화시킨다,
// console.log(elem);

const person = {
    fullName: 'Hong',
    age: 10,
    toString: function () {
        return this.fullName + ', ' + this.age;
    }
}

person.fullName = 'Hwang';
person.toString();

const str = 'Hwang';
str.length;
let newStr = str.substring(1, 5);
newStr = str.slice(-3, -1); //slice n번째부터 n번째까지 출력
//slice는 음수도 가능
newStr = str.replace('a', ',').replace(',', '.');
//replace 첫번째 문자를 두번째 문자로 바꾸는문구

//String 메소드는 중복사용 가능

console.log(newStr);

// 주민번호 : 000101-3123456, 990101-2123456
//           850101-1234567, 870101 2123456, 9201012123456
// 남자/여자 구별하는 function
function getGender(jm) {
    if (jm.length != 13 && jm.length != 14) {
        return; //함수 종료
    }
    //7번째 위치 1,3:남자, 2,4:여자

    let jumin1 = jm.replace('-', '').replace(' ', '').substring(6, 7);
    // jumin1 = jm.slice(-7, -6); //뒤에서부터 실행
    let gender = '남자';
    if (jumin1 == '1' || jumin1 == '3') {
        gender = '남자';
    } else if (jumin1 == '2' || jumin1 == '4') {
        gender = '여자';
    } else {
        gender = "None";
    }
    return gender;
}
console.log(getGender('850101-1234567')); // 남자..
console.log(getGender('870101 2123456')); // 여자..
console.log(getGender('9201012123456')); // 여자..

console.log('hello'.toUpperCase().toLowerCase());
//toUpperCase() 문자를 대문자로 바꿔주는 문구
//toLowerCase() 문자를 소문자로 바꿔주는 문구

let str1 = 'hello',
    str2 = 'world';
console.log(str1.concat(' ', str2, '!!'));
//concat() 문자열을 추가로 넣어주는 문구

let str3 = str1.concat(' ', str2, '!!');
console.log(str3);

let pos = str3.charAt(6);
console.log(pos);
//charAt(n); 문자에서 n번째의 글자를 불러오는 문구

let ary = str.split('');
for (let str of ary) {
    console.log(str1);
}
//split() ()안에있는 문자 기준으로 나누어 문자를 배열에 넣어준다

let temp = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci ab et vero recusandae ad est voluptatibus quos facilis, repudiandae, inventore, nemo porro aspernatur voluptate perferendis error sequi illo fugiat tenetur.';
let tempAry = temp.split(' ');
console.log(tempAry.length);

// 배열지정하고 특정배열의 위치 검색
let fruits = 'Apple Banana Cherry Melon'; // 배열에 들어갈 문자 선언
let fruit = prompt('과일입력: '); //팝업 검색창
// banana, BANANA, Banana 대소문자 검색 상관없이 출력하기
function getLoc(fruit) {
    // 0, null, '', undefined => false
    if (!fruit) {
        return;
    }
    let location = fruits.split(' ');
    //split으로 공백을 기준으로 문자 배열 만들기
    let cnt = 0;
    console.log(location);
    for (let i = 0; i < location.length; i++) {
        if (location[i].toUpperCase() == fruit.toUpperCase()) {
            // banana, BANANA, Banana 대소문자 검색 상관없이 처리
            cnt = i + 1;
        }
    }
    if (cnt == 0) {

        return '만족하는 값이 없습니다';
    }
    return cnt + '번째';
}
console.log(getLoc(fruit));