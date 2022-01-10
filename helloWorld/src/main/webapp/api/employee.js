// employee.js

let data = '';

const titles = ['EmpID', 'fName', 'lName', 'HireDate', 'E-mail', 'Job', 'Salary'];
const fields = ['employeeId', 'firstName', 'lastName', 'hireDate', 'email', 'jobId', 'salary'];
// thead 영역
function makeHead() {
	let thd = document.createElement('thead');
	let tr = document.createElement('tr');
	// 체크박스 영역
	let th = document.createElement('th');
	let checkbox = document.createElement('input');
	checkbox.setAttribute('type', 'checkbox');
	checkbox.addEventListener('change', allCheckFnc); //체크박스 전체선택 메소드
	th.appendChild(checkbox);
	tr.appendChild(th);

	//필드영역
	titles.forEach(function(field) {
		let th = document.createElement('th');
		let text = document.createTextNode(field)
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
	for (let field of fields) {
		let td = document.createElement('td');
		let text = document.createTextNode(item[field]);
		td.appendChild(text);
		tr.appendChild(td);
	}
	return tr;
}

//리스트 생성
(function drawTable() { //즉시실행함수.
	// Ajax 호출
	let xhtp = new XMLHttpRequest();
	xhtp.onreadystatechange = function() {
		if (xhtp.readyState == 4 && xhtp.status == 200) {
			console.log('readyState: ' + xhtp.readyState);
			console.log('status: ' + xhtp.status);
			data = JSON.parse(xhtp.responseText)
			console.log(data);

			let tbl = document.createElement('table');
			tbl.setAttribute('border', '1');
			tbl.appendChild(makeHead());
			tbl.appendChild(makebody());

			document.getElementById('list').appendChild(tbl);
			//showCenterList(data);
		}
	}
	xhtp.open('get', '../EmpList.json');
	xhtp.send();
	//Ajax 호출.
}());
// drawTable();// 펑션 실행

// 등록버튼 이벤트
let addBtn = document.querySelector('#btn>button'); //버튼 태그 찾기
addBtn.addEventListener('click', addCallback); //이벤트
// 등록 인풋
function addCallback() {
	let eid = document.querySelector('input[name="eid"]').value; //인풋 태그 속에 네임속성으로 찾기
	let fname = document.querySelector('input[name="fname"]').value;
	let lname = document.querySelector('input[name="lname"]').value;
	let email = document.querySelector('input[name="email"]').value;
	let hireDate = document.querySelector('input[name="hire_date"]').value;
	let salary = document.querySelector('input[name="salary"]').value;

	if (eid == "" || lname == "" || hireDate == "" || email == "") {
		window.alert('필수값을 입력하세요!');
		return; //종료
	}

	const xhtp = new XMLHttpRequest();
	xhtp.onload = function() {
		let result = JSON.parse(xhtp.responseText); //json -> javascript object 변경.
		console.log(result);
		let tr = makeTr(result);
		document.querySelector('#list>table>tbody').appendChild(tr);
	}
	xhtp.open('post', '../InsertEmployeeServlet');
	xhtp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xhtp.send(`employee_id=${eid}&first_name=${fname}&last_name=${lname}&E-mail=${email}&hire_date=${hireDate}&salary=${salary}`);
	/*let obj = {
		eid: eid, // 필드: 값 //같은 이름이라도 다른객체이다.
		fname: fname,
		lname: lname,
		email: email
	}
	let tr = makeTr(obj);
	document.querySelector('#list>table>tbody').appendChild(tr);*/
	/*let inputs = document.getElementsByTagName('input');
	for (let i = 0; i < inputs.length; i++) {
		inputs[i].value = '';
	}
	Info();*/

}

// 삭제버튼 이벤트등록.
let delBtn = document.querySelector('#btn>button:nth-child(2)');
delBtn.addEventListener('click', delCallback);

function delCallback() {
	let chks = document.querySelectorAll('tbody input[type="checkbox"]');
	for (let i = 0; i < chks.length; i++) {
		if (chks[i].checked == true) { //체크가 되어있으면 ~ 버튼 누르면 삭제
			console.log(chks[i].parentNode.nextSibling.innerText);
			let del_id = chks[i].parentNode.nextSibling.innerText;
			// Ajax 호출. (삭제 서블릿 호출 => 화면에서 삭제.)
			const xhtp = new XMLHttpRequest();
			xhtp.onload = function() {
				//서버호출 결과 값을 받아오면 실행하는 부분.
				console.log(xhtp.responseText);
				let result = JSON.parse(xhtp.responseText);
				if (result.retCode == 'Success') {
					// 화면삭제.
					chks[i].parentNode.parentNode.remove();
				} else {
					window.alert(result.retVal);
				}

			}

			xhtp.open('post', '../DeleteEmployeeServlet');
			xhtp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); //header 정보 지정
			xhtp.send(`emp_id=${del_id}`);
		}
	}
}

// 리스트 -> 입력화면에 보여주기



let names = document.querySelectorAll('table tbody tr td:nth-child(2)'); //컬럼 누르는 장소지정
for (let i = 0; i < names.length; i++) {
	names[i].addEventListener('click', callInfo);

	function callInfo() {
		//this 이벤트를 받는 대상(td)
		let parent = this.parentNode;
		// console.log(parent.childNodes[2].innerText);
		document.querySelector('input[name="eid"]').value = parent.childNodes[1].innerText; // 인풋의 몇번째 공간에 들어가는지
		document.querySelector('input[name="fname"]').value = parent.childNodes[2].innerText;
		document.querySelector('input[name="lname"]').value = parent.childNodes[3].innerText;
		document.querySelector('input[name="hire_date"]').value = parent.childNodes[4].innerText;
		document.querySelector('input[name="email"]').value = parent.childNodes[5].innerText;
		document.querySelector('input[name="salary"]').value = parent.childNodes[6].innerText;
	}

	function Info() {
		let names = document.querySelectorAll('table tbody tr td:nth-child(2)'); //컬럼 누르는 장소지정
		for (let i = 0; i < names.length; i++) {
			names[i].addEventListener('click', callInfo);
		}
	}

	function callInfo() {
		//this 이벤트를 받는 대상(td)
		let parent = this.parentNode;
		// console.log(parent.childNodes[2].innerText);
		document.querySelector('input[name="eid"]').value = parent.childNodes[1].innerText; // 인풋의 몇번째 공간에 들어가는지
		document.querySelector('input[name="fname"]').value = parent.childNodes[2].innerText;
		document.querySelector('input[name="lname"]').value = parent.childNodes[3].innerText;
		document.querySelector('input[name="hire_date"]').value = parent.childNodes[4].innerText;
		document.querySelector('input[name="email"]').value = parent.childNodes[5].innerText;
		document.querySelector('input[name="salary"]').value = parent.childNodes[6].innerText;
	}
}