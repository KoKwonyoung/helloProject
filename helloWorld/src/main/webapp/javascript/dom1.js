//dom1.js

let pelemt =document.querySelector('body>p');
console.log(pelemt);
pelemt.innerHTML = 'not hello'; //dom 요소를 통해 화면에 출력

let newP = document.createElement('p'); //태그생성
newP.innerHTML = 'Good, morning!'; // 태그에 내용 부여
console.log(newP);

pelemt.after(newP);

let list = document.querySelectorAll('ul>li'); //값을 불러와서 변수에 넣고
list[0].remove(); //변수를 불러와서 remove메소드로 삭제
console.log(list);

//추가하기
document.getElementById('delBtn').onclick = function() {
    let name1 = document.getElementById('name1').value;
    let liTag = document.createElement('li');
    liTag.innerHTML = name1;
    let ul = document.querySelector('ul');
    ul.appendChild(liTag);

}

// let obj = {
//     name:'hong',
//     hobbies: {
//         first: 'riding',
//         last: 'sleeping'
//     }
// }

// obj.hobbies.first //전부 오브젝트