// while (true){
//     console.log(Math.round(Math.random() * 10));
// }

// var a = Math.round(Math.random() * 10);
// var b = Math.round(Math.random() * 10);



// var chosenOperator = Math.round(Math.random()*3);

// console.log('a',opertators[chosenOperator].sign,'b = ',opertators[chosenOperator].method(a,b));
// console.log(`a ${opertators[chosenOperator].sign} b = ${opertators[chosenOperator].method(a,b)}`);
// console.log('operator',chosenOperator);


// var years = prompt('Сколько вам лет?', 100);
// years = +years + 1;
//     console.log(Math);

// alert('Вам ' + years + ' лет!');
// console.log(years);

const operators = [
    {
        sign: "-", 
        method: function(a, b){
        console.log( 'a = ', a);
        console.log('b = ', b);
        return a-b;
        }
    },
    {
        sign: "+", 
        method: function(a, b) {
        console.log( 'a = ', a);
        console.log('b = ', b);
        return a+b;
        }
    },
    { 
        sign: "*", 
        method: function(a, b){
        console.log( 'a = ', a);
        console.log('b = ', b);
        return a*b;
        }
    },
    {
        sign: "/", 
        method: function(a, b){
        while (b == 0) {
            b = Math.round(Math.random() * 10);
        }    
        console.log('a = ', a);
        console.log('b = ', b);
        return a/b;
        }
    }
];


// 5!!!
function GetDotCount(str) {
    let dotCounter = 0;
    for( i = 0; i < str.length; i++) {
        if ( str[i] == ".") {
            dotCounter++;
        }
    }
    return dotCounter;
}

function GetRandomNumber(min, max) {
    let rand = 0;
    while (rand == 0) {
        rand = Math.round(Math.random()*(max - min) + min);
    }
    return rand;
}

let flag = true;

while (flag) {
    // const operator = Math.round(Math.random()*3);  
    // const TopValue = Math.round(Math.random()*20 - 10);
    // const BottomValue = Math.round(Math.random()*20 - 10);
    const operator = +GetRandomNumber(1, 4) - 1;
    const TopValue = GetRandomNumber(-10, 10);
    const BottomValue = GetRandomNumber(-10, 10);

    console.log('top = ', TopValue);
    console.log('bot = ', BottomValue);
    console.log('sign = ', operator);
    let strB;

    if (BottomValue < 0) {
        strB = `(${BottomValue})`;
    } else {
        strB = `${BottomValue}`;
    }

    const neededStr = (operators[operator].method(TopValue,BottomValue)).toFixed(1);
    console.log('neededStr: ', neededStr);
    console.log(TopValue);
    console.log(BottomValue);
    const userStr = prompt(`Введи число ${TopValue}${operators[operator].sign}${strB}: `,).replace(",",".");
    console.log(userStr);

    console.log('userStr: ', userStr);
    if (+userStr == +neededStr) {
        alert('Давай ещё по одной!!!');
    } else {
//        var dotCounter = 0;
        const dot = GetDotCount(userStr);
        if (dot>1){
            alert('Воу Воу, поменьше точек, алкоголик!');
            flag = false;
            break;
        }
        alert('С тебя хватит! Вали спать, сволочь!');
        flag = false;
    }
}