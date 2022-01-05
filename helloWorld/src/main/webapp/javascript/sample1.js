// sample.js

var memNum = window.prompt('입장객은 몇명?');
var colNum = window.prompt('한줄에 앉을 사람?')
var count = 0;
// 56명, 5명씩 앉게.




var i, j;

// document.write('<table>');
// for (i = 0; i < 56; i++) {
//     document.write('<tr>');

//     for (j = 1; j <= colNum; j++) {
//         seatNo = i * colNum + j;
//         if (seatNo > memNum) break;



//     document.write("<td> 좌석 " + `${1}-` + seatNo + " </td>");
//     }

//     document.write("</tr>")
// }
// document.write('</table>');
// count % memNum
var rowNum = Math.ceil(memNum / colNum);
for (var i = 1; i <= rowNum; i++) {
    for (var j = 1; j <= colNum; j++) {

        document.write(`<span> 좌석  ${i} - ${j} </span>`);
        count++
        if (count == memNum) {
            break;
        }

    }
    document.write('<br>');
}

document.write();