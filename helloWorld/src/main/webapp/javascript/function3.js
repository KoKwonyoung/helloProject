//function3.js
function sumAry(ary) {
    var sum = 0;
    for (var i = 0; i < ary.length; i++) {
        sum += ary[i];
    }
    return sum;
}

var result = sumAry([1, 2, 3, 4, 5]);
console.log(`결과값 : ${result}`);

function getMax(first, last) {
    if (first > last) {
        return first;
    } else {
        return last;
    }
}

console.log(getMax(30, 40));

function getMaxVal(ary) {
    // ary 배열에 값 중에서 제일 큰 값을 반환
    var maxVal = 0;
    for (var i = 0; i < ary.length; i++) {
        // console.log(ary[i]);
        //방법 1
        // if (maxVal < ary[i]) {
        //     maxVal = ary[i]
        // }

        //방법 2
        var temp = ary[i];
        maxVal = getMax(temp, maxVal);
    }

    return maxVal;
}
function getMin(first, last) {
    if (first < last) {
        return first;
    } else {
        return last;
    }
}

function getMinVal(ary) {
    // ary 배열 값 중에서 제일 작은 값 반환.
    // 방법 1 ↓
    // var minVal = Number.MAX_SAFE_INTEGER;
    // 방법 2 ↓
    var minVal = 0;
    for (var i = 0; i < ary.length; i++) {
        //방법 1-1
        // if (minVal > ary[i]) {
        //     minVal = ary[i]
        // }
        
        //방법 2-1
        if(!minVal) {
            minVal = ary[i];
        }
        if (minVal>ary[i]){
            minVal = ary[i];
        }
        // 실패작 ↓
        // var temp2 = ary[i];
        // minVal = getMin(temp2, minVal);
    }
    return minVal;
}

var numAry = [34, 20, 15, 8, 10, 55];
console.log(`최대값 :  ${getMaxVal(numAry)}`);
console.log(`최소값 :  ${getMinVal(numAry)}`);
