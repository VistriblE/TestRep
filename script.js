const operators = [
    {
        sign: '-', 
        method: function(a, b){
            return a - b;
        }
    },
    {
        sign: '+', 
        method: function(a, b) {
            return a + b;
        }
    },
    { 
        sign: '*', 
        method: function(a, b) {
            return a * b;
        }
    },
    {
        sign: '/', 
        method: function(a, b) {
            return a / b;
        }
    }
];

function getRandomNumber(min, max) {
    while (true) {
        const rand = Math.floor(Math.random() * (max + 1 - min) + min);
        if (rand != 0) {
            return rand;
        }
    }
}

while (true) {
    const operator = getRandomNumber(1, 4) - 1;
    const TopValue = getRandomNumber(-10, 10);
    const BottomValue = getRandomNumber(-10, 10);

    console.log('top = ', TopValue);
    console.log('bot = ', BottomValue);
    const strB = BottomValue < 0 ? `(${BottomValue})` : `${BottomValue}`; 


    const neededStr = (operators[operator].method(TopValue,BottomValue)).toFixed(1);
    console.log('neededStr: ', neededStr);
    const userStr = prompt(`Введи число ${TopValue}${operators[operator].sign}${strB}: `,).replace(',','.');
    console.log('userStr: ', userStr);
    if (+userStr == +neededStr) {
        alert('Давай ещё по одной!!!');
    } else {
        alert('С тебя хватит! Вали спать, сволочь!');
        break;
    }
}