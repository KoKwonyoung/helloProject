// event1.js

let str = `<table border="1">
<thead>
    <tr>
        <th>이름</th>
        <th>전화번호</th>
        <th>주소</th>
        <th>삭제</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>홍길동</td>
        <td>053-1234-5678</td>
        <td>대구 중구 100번지</td>
        <td><button>삭제</button></td>
    </tr>
    <tr>
        <td>박기현 </td>
        <td>053-6543-5678</td>
        <td>대구 중구 200번지</td>
        <td><button>삭제</button></td>
    </tr>
    <tr>
        <td>홍민규</td>
        <td>053-3548-5678</td>
        <td>대구 중구 300번지</td>
        <td><button>삭제</button></td>
    </tr>
</tbody>
</table>`;
document.write(str);

let names = document.querySelectorAll('table>tbody>tr>td:nth-child(1)');

console.log(names);

for (let i = 0; i < names.length; i++) {
    names[i].onclick = function (e) {
        console.log(e.target.innerText);
        let text = e.target.innerText;
        alert(text + '입니다!')
    }
}
//on으로 시작하는건 이벤트이다
let rows = document.querySelectorAll('tbody>tr');
for (let i = 0; i < rows.length; i++) {
    rows[i].onmouseover = function (e) {
        console.log(e.target.parentNode);
        e.target.parentNode.style.backgroundColor = 'yellow';
        // e.target.parentNode.style.display = 'none';
    }
    // <div style='backgrond-color: yellow; display: none'></div>
    
    rows[i].onmouseout = function(e) {
        console.log(e.target.parentNode);
        e.target.parentNode.style.backgroundColor = null;
    }
}

let btns = document.querySelectorAll('table>tbody>tr>td>button');
for(let i=0; i<btns.length;i++){
    // btns[i].onclick = deleteFnc;
    btns[i].addEventListener('click', deleteFnc); //.addEventListener() 이벤트를 등록해주는 메소드

    }



function deleteFnc(e) {
    e.target.parentNode.parentNode.remove();
}