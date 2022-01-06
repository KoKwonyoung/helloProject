// array1.js

//배열 리스트 삭제
let delBtn = document.getElementById('delBtn');
delBtn.onclick = function () {
    let name1 = document.getElementById('name1').value;
    if (!name1) {
        alert('올바른 값을 입력하세요');
        return;
    }

    let list = document.querySelectorAll('ul>li');
    console.log(list);
    for (let i = 0; i < list.length; i++) {
        if (list[i].innerText == name1) {
            list[i].style.display = 'none';
            // list[i].remove(); // 이것도 가능
        }
    }
}


const numAry = [23, 17, 33, 72, 88];

// let str = `<ul>
// <li>23</li>
// <li>17</li>
// <li>33</li>
// <li>72</li>
// <li>88</li>
// </ul>
// <ul>
// <li>23</li>
// <li>17</li>
// <li>33</li>
// <li>72</li>
// <li>88</li>
// </ul>`;
let sum = 0;
numAry.forEach(function (item, idx, ary) {
    if (idx % 2 == 0)
        sum += item;
});
console.log(`합계: ${sum}`);

const names = ['김은서', '황보경', '고권영', '류기태', '구자현'];
// for (let i = 0; i < 3; i++) {
// const name = window.prompt('추가할 이름 입력>> '); // 팝업창에 이름 추가시키기
//     names.push(name);
// }

// const name1 = window.prompt('삭제할 이름 입력>> ');

for (let i = 0; i < names.length; i++) {
    if (name1 == names[i]) {
        names.splice(i, 1);
    }


}

// names.splice(4, 1); //splice 치환
// 두번째 숫자에 0을 붙이면 추가가되고 ex) names.splice(1, 0, '누군가');
// 그렇지 않으면 치환한다 ex) names.splice(1, 2, '누군가');
// 대체할 값 없이 숫자만 넣으면 삭제가된다. ex)names.splice(1, 2);
console.log(names);


// let list = document.querySelectorAll('ul:nth-of-type(1)>li');
// // console.log(list)
// list.forEach(function (item, idx, ary) {
//     console.log(item, idx, ary); 
//     // console.log(item, item.innerHTML);
//     if(idx % 2 == 0)
//     item.innerText = '<h3>hello</h3>';
// }); //forEach: