//dom3.js
//DOM 생성
console.log('bdy')

let div = document.createElement('div');
div.setAttribute('id', 'show');
document.getElementById('bdy').appendChild(div);
console.log(div);

let inp = document.createElement('input');
inp.setAttribute('type', 'text');
inp.setAttribute('id', 'name1');
inp.setAttribute('value', 'test');
document.getElementById('bdy').appendChild(inp);
console.log(inp);

let delBtn = document.createElement('button');
delBtn.setAttribute('id', 'delBtn');
delBtn.innerText = '조회삭제';
document.getElementById('bdy').appendChild(delBtn);
console.log(delBtn);

let addBtn = document.createElement('button');
addBtn.setAttribute('id', 'addBtn');
addBtn.innerText = '추가';
document.getElementById('bdy').appendChild(addBtn);
console.log(addBtn);

let students = ['김은서', '황보경', '고권영', '류기태', '구자현'];
let ul = document.createElement('ul');
ul.setAttribute('id', 'nameList');
document.getElementById('bdy').appendChild(ul);
console.log(ul);

let p = document.createElement('p');
p.innerText = 'hello, world';
// document.getElementById('show').appendChild(p);
ul.appendChild(p)
console.log(p);


for (let student of students) {
    let li = document.createElement('li');
    let text = document.createTextNode(student);
    li.appendChild(text);
    ul.appendChild(li);
}

delBtn = document.getElementById('delBtn');
delBtn.onclick = function() {
    let name1 = document.getElementById('name1').value;
    let list = document.querySelectorAll('#nameList>li');
    for(let i=0; i<list.length; i++) {
        if(list[i].innerText == name1) {
            list[i].remove();
            break;
        }
    }
}


addBtn.onclick = function() {
    let name1 = document.getElementById('name1').value;
    let li = document.createElement('li');
    li.innerText = name1;
    let ul = document.querySelector('#nameList');
    ul.appendChild(li);
}