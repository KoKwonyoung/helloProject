//example1.js

const students = [{
    fullName:'고권영',
    stuNo: '1001',
    score: 80
},{
    fullName:'홍길동',
    stuNo: '1002',
    score: 85
},{
    fullName:'류현진',
    stuNo: '1003',
    score: 90
}];

for(let ary of students) { // 2
    document.write(`<li>${ary.stuNo} - ${ary.fullName} - ${ary.score}</li>`);
    document.write('<br>');
}

students.push({
    fullName:'홍정우',
    stuNo:'1004',
    score: 88
});

students.pop(); // 맨 뒷 배열을 없애주는 문구
students.shift(); // 맨 앞 배열을 없애주는 문구

students.unshift({
    fullName:'김민우',
    stuNo:'1005',
    score: 90
});

document.write('<ul>') // 1-2
students.forEach(liFnc); // callback function
document.write('</ul>')

function liFnc(item) { // 1-1
    document.write(`<li>${item.stuNo} - ${item.fullName} - ${item.score}`)
}

const numAry = [1,2,3];
// numAry[3] = 4; 
// numAry[numAry.length] = 10; 
// numAry[numAry.length] = 20;
// console.log(numAry);
numAry.push(4); //push 배열의 제일 뒤쪽으로 값을 넣어주는 문구
numAry.push(10);
numAry.unshift(40); //unshift 배열의 제일 앞쪽으로 값을 넣어주는 문구

console.log(numAry)