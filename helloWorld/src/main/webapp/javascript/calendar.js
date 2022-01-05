// sample2.js
// 2022, 0, 1 =2022년 1월 1일
var year = 2021; //년도 변수를 지정해서 넣기
var month = 5;

function makeCal(year, month) {

    var today = new Date(year, month, 1); //시스템 날짜 기준으로 오브젝트를 만들어준다.
    // 날짜 정보가 없으면 기본 1일이다.
    // console.log(today);
    // console.log(today.getFullYear()); // 년도를 네자리까지 다 보여줌
    // console.log(today.getMonth()); // 월을 표시해준다.
    // console.log(today.getDate()); // 오늘 일자를 보여준다
    // console.log(today.getDay()); // 요일을 숫자로 보여준다 ex) 수요일 -> 3

    // var otherDay = new Date(2021, 5, 1); 
    // console.log(otherDay);
    // console.log(otherDay.getFullYear()); 
    // console.log(otherDay.getMonth()); 
    // console.log(otherDay.getDate()); 
    // console.log(otherDay.getDay());
    //*** 월은 0부터 시작해서 +1해야함 ***
    //****** 요일을 숫자로 표시하면 일요일은 0으로 표시된다. ******
    //*** 0은 말일을 뜻한다. ex) 1, 0 이면 1월의 말일이라는 뜻 ***
    // var year = 2021; 년도 변수를 지정해서 넣기
    // var month = 3; \
    // var today = new Date(year, month -1, 1) \
    var lastDay = new Date(year, month, 0);
    console.log(today)
    console.log(lastDay)
    var firstDayOfMonth = today.getDay();
    var lastDayOfMonth = lastDay.getDate();
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Set']; //배열을 활용해서 요일 정보 출력
    document.write(`<h3>${today.getFullYear()}년 ${today.getMonth()+1}월</h3>`)
    // 달력 상단에 년 월 표기 문구                 //여기서 월을 +1 해야한다.
    for (var day of days) { //배열을 활용해서 요일 정보 출력
        document.write('<span>' + day + '</span>');
    }

    // document.write(lastDay.getDate());
    // document.write(today.getDay())
    // for (var n = 0; n < 3; n++){
    //     document.write('<span></span>') // 3칸 공간을 비워준다.
    // }

    // for (var i = 1; i <= 30; i++) {
    //     document.write('<span>' + i + '</span>');
    //     if((i+3) % 7 == 0) {
    //         document.write('<br>') //7번째에서 줄바꿈 한다는 문구
    //     }
    // }

    // document.write('<span style ="background-color: coral;">일</span>');
    // document.write('<span style ="background-color: wheat;">월</span>');
    // document.write('<span style ="background-color: wheat;">화</span>');
    // document.write('<span style ="background-color: wheat;">수</span>');
    // document.write('<span style ="background-color: wheat;">목</span>');
    // document.write('<span style ="background-color: wheat;">금</span>');
    // document.write('<span style ="background-color: skyblue;">토</span>');
    document.write('<br>');

    for (var n = 0; n < firstDayOfMonth; n++) { //빈 공란 출력
        document.write('<span></span>')
    }

    for (var i = 1; i <= lastDayOfMonth; i++) { //날짜 출력
        if ((i + firstDayOfMonth) % 7 == 1) {
            document.write('<span class="sunday">' + i + '</span>');
        }else if((i + firstDayOfMonth) % 7 == 0) {
            document.write('<span class="saturday">' + i + '</span>');
        }else {
            document.write('<span>' + i + '</span>')
        }
        
        if ((i + firstDayOfMonth) % 7 == 0) {
            document.write('<br>');
        }
    }
}