// dom2.js
//document object model
//element(element node, attribute node, text node), tag
// <img src='sample.jpg'>, <input type='text' value='sample'>
let img = document.createElement('img'); // 태그생성
img.setAttribute('src', '../images/prd1.jpg'); //이미지 삽입
img.setAttribute('id', 'mypicture');
img.setAttribute('width', '200px'); //이렇게 스타일도 지정가능

document.getElementById('show').appendChild(img);
console.log(img);

// <ul><li>Apple</li><li>Banana</li><li>Cherry</li></ul>
// ul, li*3, li>text
let fruits = ['Apple', 'Banana', 'Cherry'];
let ul = document.createElement('ul');

// for (let fruit of fruits) {
//     let li = document.createElement('li');
//     let text = document.createTextNode(fruit); 
//     li.appendChild(text);
//     ul.appendChild(li);
// }
//****아래 방식은 위와같이 배열과 for ~ of 로 간략화 가능하다****
// let li = document.createElement('li');
// let text = document.createTextNode('Apple'); // createTextNode 텍스트 노드 생성
// li.appendChild(text); //태그 하위에 자식 부여
// ul.appendChild(li);

// li = document.createElement('li');
// text = document.createTextNode('Banana');
// li.appendChild(text);
// ul.appendChild(li);

// li = document.createElement('li');
// text = document.createTextNode('Cherry');
// li.appendChild(text);
// ul.appendChild(li);
fruits.forEach(callBackFnc);

function callBackFnc(item) { //펑션에서 익명함수의 첫번째값은 무조건 item 두번째는 index 세번째는 array
    let li = document.createElement('li');
    let text = document.createTextNode(item);
    li.appendChild(text);
    ul.appendChild(li);
}

console.log(ul);

document.getElementById('bdy').appendChild(ul);

// 버튼에 삭제 부여
let delBtn = document.getElementById('delBtn');
delBtn.onclick = function() {
    let name1 = document.getElementById('name1').value; //value는 입력한 값과 내부값을 비교하기 위해 넣는다.
    let list = document.querySelectorAll('#nameList>li');
    for(let i=0; i<list.length; i++) {
        if(list[i].innerText == name1) {
            list[i].remove();
            break;
        }
    }
}
// 1. 이벤트 등록.
// 2. 이벤트 기능 : 사용자의 입력값 -> <li>입력값</li>
// 3. ul태그 찾고 ul 하위에 붙여넣기.
let addBtn = document.getElementById('addBtn');
addBtn.onclick = function() {    
    let name1 = document.getElementById('name1').value;
    let li = document.createElement('li');
    li.innerText = name1;
    let ul = document.querySelector('#nameList');
    ul.appendChild(li);
}