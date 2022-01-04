// basic2.js
'use strict'

var fruits = ['Apple', 'Banana', 'Cherry'];
var str = '';

// document.write('<ul>')
str += '<ul>';
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
    // str += '<li>' + fruits[i] + '</li>'
    str += `<li>${fruits[i]}</li>`;
    // document.write('<li>'+fruits[i] + '</li>');
}
str += '</ul>';
// document.write('</ul>');
document.write(str);
// 10 + '20' => 1020
var numbers = [10, 20, 30, 40];
console.log(numbers.length);
var sum = 0;
for (var i = 0; i < numbers.length; i++) {
    //integer.parseInt('30')
    sum += parseInt(numbers[i]); 
}
console.log(`합계 : ${sum}`);

// 오브젝트 타입
var student1 = {
    name: 'Hong',
    age: 20,
    score: 80
}; 
//for ~ in => object의 필드속성을 반복.
for(var field in student1) { 
    //for ~ in 오브젝트의 필드의 속성들을 하나씩 읽어 가져오는 문구
    console.log(field, student1[field]);
}
//아래와 같음
// console.log('name : ' + student1.name);
// console.log(student1.age);
// console.log(student1.score);

// var s1Name = 'Hong';
// var s1Age = 20;
// var s1Score = 80;
var student2 = {
    name: 'Hwang',
    age: 22,
    score: 83
}
var student3 = {
    name: 'Park',
    age: 25,
    score: 85
}

var students = [student1, student2, student3];

str = '';
str += '<table border="1">';
str += '<thead><tr>';
for (var field in student1) {
    str += `<th>${field}</th>`
}
str += '</tr></thead>';
str += '<tbody>'
for(var i=0; i<students.length; i++) {
    var field = 'score';
    console.log(`${i+1}번째 이름=> ${students[i].name}`);
    console.log(`${i+1}번째 나이=> ${students[i]['age']}`);
    console.log(`${i+1}번째 점수=> ${students[i][field]}`);
    //중요* field = 'score'; 선언해서 배열기호[]로 불러온것
    str += '<tr>';
    for (var field in student1) {
        str += `<td>${students[i][field]}</td>`
    }
    str += '</tr>';
}
str += '</tbody></table>';
document.write(str)
