// function2.js
function addNumber(first, last) {
    var sum = first + last;
    return sum;
}

var result1 = addNumber(10, 20);
var result2 = addNumber(15, 25);
var result3 = addNumber(addNumber(10, 20), addNumber(15, 25));
console.log(`첫번째: ${result1}, 두번째: ${result2}`);
console.log(`총합은: ${result3}`);

function sumBetweenNum(first, last, num) {
    // 첫번째 매개값과 두번째 매개값의 사이의 값을 합.
    var sum = 0;
    for (var i = first; i < last; i++) {
        if(i % num == 0) // if(i % 2 == 0) 홀수값만 더해보기
        sum += i;
    }
    return sum;
}

var w1 = sumBetweenNum(10, 20, 2); //10과 20사이에서 2의 배수값만
var w2 = sumBetweenNum(10, 21, 3); //10과 21사이에서 3의 배수값만

console.log(`1 ${w1}`);
console.log(`2 ${w2}`);