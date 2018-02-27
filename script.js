const operators = [
    {
        sign: '-', 
        method: function(a, b){
            return a-b;
        }
    },
    {
        sign: '+', 
        method: function(a, b) {
            return a+b;
        }
    },
    { 
        sign: '*', 
        method: function(a, b) {
            return a*b;
        }
    },
    {
        sign: '/', 
        method: function(a, b) {
            return a/b;
        }
    }
];

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
    while (rand == 0) {
        const rand = Math.round(Math.random()*(max - min) + min);
        if (rand != 0) {
            break;
        }
    }
    return rand;
}

while (true) {
    const operator = GetRandomNumber(1, 4) - 1;
    const TopValue = GetRandomNumber(-10, 10);
    const BottomValue = GetRandomNumber(-10, 10);

    console.log('top = ', TopValue);
    console.log('bot = ', BottomValue);
    let strB;

    if (BottomValue < 0) {
        strB = `(${BottomValue})`;
    } else {
        strB = `${BottomValue}`;
    }

    const neededStr = (operators[operator].method(TopValue,BottomValue)).toFixed(1);
    console.log('neededStr: ', neededStr);
    const userStr = prompt(`Введи число ${TopValue}${operators[operator].sign}${strB}: `,).replace(",",".");
    console.log('userStr: ', userStr);
    if (+userStr == +neededStr) {
        alert('Давай ещё по одной!!!');
    } else {
        alert('С тебя хватит! Вали спать, сволочь!');
        break;
    }
}