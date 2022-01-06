//example2.js
let datas = `[{"id":1,"first_name":"Davey","last_name":"Bawden","email":"dbawden0@dedecms.com","gender":"Male"},
{"id":2,"first_name":"Noni","last_name":"Bebbington","email":"nbebbington1@bluehost.com","gender":"Female"},
{"id":3,"first_name":"Hashim","last_name":"Pietrzyk","email":"hpietrzyk2@a8.net","gender":"Female"},
{"id":4,"first_name":"Emmalyn","last_name":"Cherrison","email":"echerrison3@squidoo.com","gender":"Female"},
{"id":5,"first_name":"Darbie","last_name":"Blazewicz","email":"dblazewicz4@huffingtonpost.com","gender":"Female"},
{"id":6,"first_name":"Worthy","last_name":"Baynham","email":"wbaynham5@flickr.com","gender":"Male"},
{"id":7,"first_name":"Nealy","last_name":"Mulhill","email":"nmulhill6@live.com","gender":"Male"},
{"id":8,"first_name":"Cary","last_name":"McBeith","email":"cmcbeith7@businessweek.com","gender":"Male"},
{"id":9,"first_name":"Mari","last_name":"Crier","email":"mcrier8@pinterest.com","gender":"Female"},
{"id":10,"first_name":"Shane","last_name":"Santos","email":"ssantos9@senate.gov","gender":"Male"},
{"id":11,"first_name":"Nelle","last_name":"Hulse","email":"nhulsea@house.gov","gender":"Male"},
{"id":12,"first_name":"Kim","last_name":"Trenouth","email":"ktrenouthb@yellowpages.com","gender":"Male"},
{"id":13,"first_name":"Christian","last_name":"Rein","email":"creinc@yale.edu","gender":"Male"},
{"id":14,"first_name":"Zacharie","last_name":"Benedikt","email":"zbenediktd@tripod.com","gender":"Female"},
{"id":15,"first_name":"Laurena","last_name":"Allpress","email":"lallpresse@qq.com","gender":"Male"}]`;

let employees = JSON.parse(datas); //JSON 파일을 오브젝트 타입으로 변경시켜준다
// console.log(employees);

document.write(`<table border="1">`);
document.write(`<thead><tr><th>ID</th><th>Name</th><th>Email</th><th>Gender</th></tr></thead>`);
document.write('<tbody>');
employees.forEach((item, idx) => {
    console.log(item.id, item.first_name, item['last_name'], item['gender']);
    document.write(`<tr><td>${item.id}</td><td>${item.first_name}-${item.last_name}</td><td>${item.email}</td><td>${item.gender}</td>`);
});
document.write('</tbody>');
document.write(`</table border="1">`);


let firstNames = [];


// employees => 배열값 중 first_name => 
employees.forEach(function(item, ind) {
    //배열.push(값);
    firstNames.push(item.first_name); //item 에 넣은 first_name을 불러온다
    
});

console.log(firstNames);