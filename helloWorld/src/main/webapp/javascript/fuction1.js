function addNumber(n1, n2) { //매개값 (n1, n2)
    var sum = n1 + n2;
    console.log(`합계는 ${sum}`);
}
addNumber(25, 10); //함수호출.

function showNumber(yourName, yourScore) {
    document.write(`<p>이름 : ${yourName}, 점수 ${yourScore}</p>`);

}
var yourName = '최경식';
var yourScore = 89;
showNumber(yourName, yourScore);

function showInfo(yourName, birthYear) {
    var today = new Date();
    var thisYear = today.getFullYear();
    var age = thisYear - birthYear;
    document.write(`<p>${yourName}은 올해 ${age}살 입니다.</p>`);
    
}


    

var students = [{
    studentName: '홍길동',
    score: 80,
    birth: 2001
}, {
    studentName: '김민수',
    score: 90,
    birth: 1999
}, {
    studentName: '박이현',
    score: 85,
    birth: 1995
}];
//{}는 오브젝트 타입
for (var student of students) {
    showNumber(student.studentName, student.score);
}

for (var student of students) {
    showInfo(student.studentName, student.birth);
}