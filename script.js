const operators = [
    {
        sign: '-', 
        method(a, b){
         
            return a - b;
        }
    },
    {
        sign: '+', 
        method(a, b) {
            return a + b;
        }
    },
    { 
        sign: '*', 
        method(a, b) {
            return a * b;
        }
    },
    {
        sign: '/', 
        method(a, b) {
            return a / b;
        }
    }
];


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

function getStrictRandom() {
    const min = -10;    
    const max = 10;
    const num = getRandomNumber(min, max - 1);

    return num == 0 ? max : num;
}

while (true) {
    const operator = getRandomNumber(0, 3);
    const topValue = getStrictRandom();
    const bottomValue = getStrictRandom();
    const strBottom = bottomValue < 0 ? `(${bottomValue})` : `${bottomValue}`; 
    const neededStr = (operators[operator].method(topValue,bottomValue)).toFixed(1);
    const userStr = prompt(`Введи число ${topValue}${operators[operator].sign}${strBottom}: `).replace(',', '.');

    if (+userStr == +neededStr) {
        alert('Давай ещё по одной!!!');
    } else {
        alert('С тебя хватит! Вали спать, сволочь!');
        break;
    }
}
