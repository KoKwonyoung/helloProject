//dom5.js 
const data = [{
    name: '류지희',
    phone: '010-1234-1234',
    addr: '대구 중구 100번지',
    email: 'rjh@email.com'
}, {
    name: '차주연',
    phone: '010-1212-1123',
    addr: '대구 중구 200번지',
    email: 'cjy@email.com'
}, {
    name: '전호민',
    phone: '010-4321-4321',
    addr: '대구 중구 300번지',
    email: 'jhm@email.com'
}];
//테이블 생성
// thead 영역
function makeHead() {
    const fields = ['이름', '연락처', '주소', '이메일'];
    let thd = document.createElement('thead');
    let tr = document.createElement('tr');
    // 체크박스 영역
    let th = document.createElement('th');
    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox')
    checkbox.addEventListener('change', allCheckFnc); //체크박스 전체선택 메소드
    th.appendChild(checkbox);
    tr.appendChild(th);

    //필드영역.
    fields.forEach(function (field) {
        let th = document.createElement('th');
        let text = document.createTextNode(field);
        th.appendChild(text);
        tr.appendChild(th);

    });
    thd.appendChild(tr);
    return thd;
}

//체크박스 전체선택
function allCheckFnc() {
    //this => 이벤트를 받는 대상(input)
    console.log(this.checked);
    // tbody쪽 checkbox 찾아서 for loop 로 모든 checkbox의 checked속성을 = true;로 
    let chks = document.querySelectorAll('tbody input[type="checkbox"]');
    for (let i = 0; i < chks.length; i++) {
        //체크가 되어있으면 ~ 버튼 누르면 삭제 
        chks[i].checked = this.checked; //   
    }


}
// tbody 영역
function makebody() {
    let tbd = document.createElement('tbody');
    data.forEach((obj) => {
        tbd.appendChild(makeTr(obj));
    });
    return tbd;
}
// tr 생성.
function makeTr(item) {
    let tr = document.createElement('tr');
    //체크박스
    let td = document.createElement('td');
    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    td.appendChild(checkbox);
    tr.appendChild(td);
    // 데이터영역
    for (let field in item) {
        let td = document.createElement('td');
        let text = document.createTextNode(item[field]);
        td.appendChild(text);
        tr.appendChild(td);
    }
    return tr;
}

//리스트 생성
(function drawTable() { //즉시실행함수.
    let tbl = document.createElement('table');
    tbl.setAttribute('border', '1');
    tbl.appendChild(makeHead());
    tbl.appendChild(makebody());

    document.getElementById('list').appendChild(tbl);
}());
// drawTable();// 펑션 실행

// 등록버튼 이벤트
let addBtn = document.querySelector('#btn>button'); //버튼 태그 찾기
addBtn.addEventListener('click', addCallback); //이벤트
// 등록 인풋
function addCallback() {
    let name = document.querySelector('input[name="name"]').value; //인풋 태그 속에 네임속성으로 찾기
    let phone = document.querySelector('input[name="phone"]').value;
    let addr = document.querySelector('input[name="addr"]').value;
    let email = document.querySelector('input[name="email"]').value;

    if (name == "" || phone == "" || addr == "" || email == "") {
        window.alert('필수값을 입력하세요!');
        return; //종료
    }

    let obj = {
        name: name, // 필드: 값 //같은 이름이라도 다른객체이다.
        phone: phone,
        addr: addr,
        email: email
    }
    let tr = makeTr(obj);
    document.querySelector('#list>table>tbody').appendChild(tr);
    let inputs = document.getElementsByTagName('input');
	for(let i = 0; i < inputs.length; i++) {
		inputs[i].value = '';
	}
    Info();

}

// 삭제버튼 이벤트등록.
let delBtn = document.querySelector('#btn>button:nth-child(2)');
delBtn.addEventListener('click', delCallback);

function delCallback() {
    let chks = document.querySelectorAll('tbody input[type="checkbox"]');
    for (let i = 0; i < chks.length; i++) {
        if (chks[i].checked == true) { //체크가 되어있으면 ~ 버튼 누르면 삭제
            chks[i].parentNode.parentNode.remove();
        }
    }
}

// 리스트 -> 입력화면에 보여주기



let names = document.querySelectorAll('table tbody tr td'); //컬럼 누르는 장소지정
for (let i = 0; i < names.length; i++) {
    names[i].addEventListener('click', callInfo);

    function callInfo() {
        //this 이벤트를 받는 대상(td)
        let parent = this.parentNode;
        // console.log(parent.childNodes[2].innerText);
        document.querySelector('input[name="name"]').value = parent.childNodes[1].innerText; // 인풋의 몇번째 공간에 들어가는지
        document.querySelector('input[name="phone"]').value = parent.childNodes[2].innerText;
        document.querySelector('input[name="addr"]').value = parent.childNodes[3].innerText;
        document.querySelector('input[name="email"]').value = parent.childNodes[4].innerText;
    }

    function Info() {
        let names = document.querySelectorAll('table tbody tr td'); //컬럼 누르는 장소지정
        for (let i = 0; i < names.length; i++) {
            names[i].addEventListener('click', callInfo);
        }
    }

    function callInfo() {
        //this 이벤트를 받는 대상(td)
        let parent = this.parentNode;
        // console.log(parent.childNodes[2].innerText);
        document.querySelector('input[name="name"]').value = parent.childNodes[1].innerText; // 인풋의 몇번째 공간에 들어가는지
        document.querySelector('input[name="phone"]').value = parent.childNodes[2].innerText;
        document.querySelector('input[name="addr"]').value = parent.childNodes[3].innerText;
        document.querySelector('input[name="email"]').value = parent.childNodes[4].innerText;
    }
}