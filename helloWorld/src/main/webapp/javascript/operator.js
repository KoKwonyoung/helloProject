// operator.js
// var iVal = window.prompt("값을 입력");
var iVal = 0;
console.log(iVal);
var numAry = [3, 9, 20, 14, 8, 22];

var sum = 0;
for (var num of numAry) {
    //of 배열의 갯수만큼 반복
    console.log(num);
    if (num % 2 == 0) { //짝수만 더하기
        //2로 나눳을때 결과가 0이면
        sum += num;
    }
    if (num === parseInt(iVal)) {
        //비교 연산자가 3개면 타입까지 비교
        break;
    }
}

console.log(`합계는 ${sum}`);

console.log(3 + '5' + (3 + 4));

var sum_2 = 0;
var sum_3 = 0;
var sum_23 = 0;

for (var i = 1; i <= 20; i++) {
    // if (i % 2 == 0 && i % 6 != 0) {
    //     sum_2 += i;
    // }else if (i % 3 == 0 && i % 6 != 0) {
    //     sum_3 += i;
    // }
    if (i % 6 == 0) {
        sum_23 += i;
    }else if (i % 3 == 0) {
        sum_3 += i;
    }else if (i % 2 == 0) {
        sum_2 += i;
    }
}

console.log(`2의 배수 합계: ${sum_2}`);
console.log(`3의 배수 합계: ${sum_3}`);
console.log(`2와 3의 배수 합계: ${sum_23}`);