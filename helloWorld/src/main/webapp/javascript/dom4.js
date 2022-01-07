//dom4.js
const titles = ['이름', '학생번호', '점수'];
const students = [{
    fullName: '고권영',
    stuNo: '1001',
    score: 80
}, {
    fullName: '홍길동',
    stuNo: '1002',
    score: 85
}, {
    fullName: '류현진',
    stuNo: '1003',
    score: 90
}];

let parent = document.getElementById('show1');

// div 밑에 테이블로 border='1' 헤드 바디 만들기

let tbl = document.createElement('table');
tbl.setAttribute('border', '1')
parent.appendChild(tbl);

// <thead></thead>
let thd = document.createElement('thead');
let tr = document.createElement('tr');
let th = document.createElement('th');

thd.appendChild(tr);
titles.forEach(function (title) {
    let th = document.createElement('th');
    let text = document.createTextNode(title);
    th.appendChild(text);
    tr.appendChild(th);

});
//삭제버튼 추가.
th = document.createElement('th');
text = document.createTextNode('삭제');
th.appendChild(text);
tr.appendChild(th);

tbl.appendChild(thd);
// <tbody></tbody>
let tbd = document.createElement('tbody');
students.forEach(function (obj) {
    let tr = document.createElement('tr');
    tr.onmouseover = function(e) { //커서를 올리면 배경색이 변하게
        e.target.parentNode.style.backgroundColor = 'yellow';
    }
    tr.onmouseout = function(e) { //커서를 땟을때 배경색이 돌아오게
        e.target.parentNode.style.backgroundColor = null;
    }
    for (let field in obj) { //간략화
        // field 갯수만큼 반복해서 생성.
        let td = document.createElement('td');
        let text = document.createTextNode(obj[field]);
        td.appendChild(text);
        tr.appendChild(td);
    }
    // // <td>이름</td>
    // let td = document.createElement('td');
    // let text = document.createTextNode(obj.fullName);
    // td.appendChild(text);
    // tr.appendChild(td);
    // // <td>학생번호</td>
    // td = document.createElement('td');
    // text = document.createTextNode(obj.stuNo);
    // td.appendChild(text);
    // tr.appendChild(td);
    // // <td>점수</td>
    // td = document.createElement('td');
    // text = document.createTextNode(obj.score);
    // td.appendChild(text);
    
    // tr.appendChild(td);
    //삭제버튼
    let td = document.createElement('td');
    let btn = document.createElement('button');
    btn.onclick = function(e) {
        console.log(e.target);
        e.target.parentNode.parentNode.remove();
    }
    let text = document.createTextNode('삭제');
    btn.appendChild(text);
    td.appendChild(btn)
    tr.appendChild(td);

    tbd.appendChild(tr);
});
tbl.appendChild(tbd);