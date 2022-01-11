// 22-01-11 example.js

const data = [{
    bookCd: 'P12301285',
    bookNm: '이것이 자바다',
    bookWt: '홍성문',
    bookCp: '신흥출판사',
    bookPr: '25000원',
}, {
    bookCd: 'P12301285',
    bookNm: '이것이 자바다',
    bookWt: '홍성문',
    bookCp: '신흥출판사',
    bookPr: '25000원'
}, {
    bookCd: 'P12301285',
    bookNm: '이것이 자바다',
    bookWt: '홍성문',
    bookCp: '신흥출판사',
    bookPr: '25000원'
}, {
    bookCd: 'P12301285',
    bookNm: '이것이 자바다',
    bookWt: '홍성문',
    bookCp: '신흥출판사',
    bookPr: '25000원'
}, {
    bookCd: 'P12301285',
    bookNm: '이것이 자바다',
    bookWt: '홍성문',
    bookCp: '신흥출판사',
    bookPr: '25000원'
}]
const titles = ['bookCd', 'bookNm', 'bookWt', 'bookCp', 'bookPr'];
const fields = ['도서코드', '도서명', '저자', '출판사', '가격'];
// 테이블 머리
function tableH() {
    let thd = document.createElement('thead');
    let tr = document.createElement('tr');

    let th = document.createElement('th');
    let chBox = document.createElement('input');
    chBox.setAttribute('type', 'checkbox');
    chBox.addEventListener('change', allChBox);
    th.appendChild(chBox);
    tr.appendChild(th);


    fields.forEach(function (field) {
        let th = document.createElement('th');
        let text = document.createTextNode(field);
        th.appendChild(text);
        tr.appendChild(th);


    });

    let th2 = document.createElement('th');
    let text = document.createTextNode('삭제');
    th2.appendChild(text);
    tr.appendChild(th2);

    thd.appendChild(tr);
    return thd;
}



function allChBox() {
    let chk = document.querySelectorAll('tbody input[type="checkbox"]');

    for (let i = 0; i < chk.length; i++) {
        chk[i].checked = this.checked;
    }
}




// 테이블 몸
function tableB() {
    let tbd = document.createElement('tbody');

    data.forEach((obj) => {
        tbd.appendChild(mTr(obj));
    });
    return tbd;
}

// tr
function mTr(item) {
    let tr = document.createElement('tr');

    let td = document.createElement('td');
    let chBox = document.createElement('input');
    chBox.setAttribute('type', 'checkbox');
    td.appendChild(chBox);
    tr.appendChild(td);

    for (let field in item) {
        let td = document.createElement('td');
        let text = document.createTextNode(item[field]);
        td.appendChild(text);
        tr.appendChild(td);
    }
    let delTb = document.createElement('td');
    let deleB = document.createElement('button');
    deleB.innerText = '삭제';
    deleB.onclick = function (e) {
        console.log(e.target);
        e.target.parentNode.parentNode.remove();
    }
    
    delTb.appendChild(deleB);
    
    tr.appendChild(delTb);

    return tr;
}

//리스트
(function DrTable() {
    let tbl = document.createElement('table');
    tbl.setAttribute('border', '1');
    tbl.appendChild(tableH());
    tbl.appendChild(tableB());


    document.getElementById('list').appendChild(tbl);

}());




let adBt = document.querySelector('#btn>button');
adBt.addEventListener('click', putIt);

function putIt() {
    let bookCd = document.querySelector('input[name="bookCd"]').value;
    let bookNm = document.querySelector('input[name="bookNm"]').value;
    let bookWt = document.querySelector('input[name="bookWt"]').value;
    let bookCp = document.querySelector('input[name="bookCp"]').value;
    let bookPr = document.querySelector('input[name="bookPr"]').value;

    if (bookCd == "" || bookNm == "" || bookWt == "" || bookCp == "" || bookPr == "") {
        window.alert('올바른 책의 정보를 입력해주세요!');
        return;
    }
    let obj = {
        bookCd: bookCd,
        bookNm: bookNm,
        bookWt: bookWt,
        bookCp: bookCp,
        bookPr: bookPr
    }
    let tr = mTr(obj);
    document.querySelector('#list>table>tbody').appendChild(tr);
    let inputs = document.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
    }

}

let delBtn = document.querySelector('#btn>button:nth-child(2)');
delBtn.addEventListener('click', delBtnIn);

function delBtnIn() {
    let chk = document.querySelectorAll('tbody input[type="checkbox"]');
    for (let i = 0; i < chk.length; i++) {
        if (chk[i].checked == true) {
            chk[i].parentNode.parentNode.remove();
        }
    }
}