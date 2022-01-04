//basic3.js

var member1 = {
    memberId: 1001,
    memberName: '홍길동',
    memberPhone: '010-1111-1111',
    memberAddr: 'Daegu 100'
}
var member2 = {
    memberId: 1002,
    memberName: '고권영',
    memberPhone: '010-2222-2222',
    memberAddr: 'Daegu 200'
}
var member3 = {
    memberId: 1003,
    memberName: '차주연',
    memberPhone: '010-3333-3333',
    memberAddr: 'Daegu 300'
}
var member4 = {
    memberId: 1004,
    memberName: '전호민',
    memberPhone: '010-4444-4444',
    memberAddr: 'Daegu 400'
}

var members = [member1, member2, member3, member4];

var str = '';
str += '<table id="tbl" border="1">';
str += '<thead><tr>';
for (var field in member1) {
    str += `<th>${field}</th>`
}
str += '</tr></thead>';
str += '<tbody>'
// of: 배열의 갯수만큼 반복
// in: 필드의 갯수만큼 반복
for (var member of members) {
    str += '<tr>';
    for (var field in member) {
        str += `<td>${member[field]}</td>`
    }
    str += '</tr>';
}
// for(var i=0; i<members.length; i++) {
//     var field = 'memberId, memberName, memberPhone, memberAddr'
//     console.log(`${member1[field]}`)
//     for (var field in members) {
//        str += '<td>${members}</td>'
//     }

// }
str += '</tbody></table>'
document.write(str);

//String, Number, Boolean, Array, Object
//null, undefined
