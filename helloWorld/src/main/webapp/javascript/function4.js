// function4.js

var students = [{ //배열
    studentName: '홍길동',
    score: 80,
    birth: '2001-05-01',
    phone: '010-1212-5623',
    gender: '남자'
}, {
    studentName: '김민수',
    score: 90,
    birth: '1999-11-03',
    phone: '010-1234-4567',
    gender: '여자'
}, {
    studentName: '박이현',
    score: 85,
    birth: '1995-04-23',
    phone: '010-9874-6523',
    gender: '남자'
}];
//테이블 타입으로 만들어보기
function makeTable(ary) { //펑션
    var str = '';
    str += `<table border='1'>`; // +=은 누적연산자
    str += `<thead><tr><th>이름</th><th>점수</th><th>생년월일</th><th>연락처</th><th>성별</th></tr></thead>`;
    str += `<tbody>`;
    for(var student of ary) { //student에 ary 값 넘겨주기
        str += '<tr>';
        // td생성.
        //**** */ 방법 1 ****
        for(var field in student) { //for ~ in : 오브젝트에 있는 필드의 개수만큼 반복
            str += `<td>${student[field]}</td>`;
        }
        
        // 방법 2
        // str += `<td>${student.studentName}</td>`; //값을 받아오기 위한 변수
        // str += `<td>${student.score}</td>`;
        // str += `<td>${student.birth}</td>`;
        // str += `<td>${student.phone}</td>`;
        
        str += '</tr>'
    }
    str += `</tbody>`;
    str += `</table>`;
    return str;
}

// document.write(makeTable(students));

makeCal(2022, 4);
makeCal(2022, 5);
