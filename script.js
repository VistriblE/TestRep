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
    return Math.floor(Math.random() * (max - min) + min);
}

function getStrictRandom(min, max) {
    const num = getRandomNumber(min, max);

    if (num == 0) {
        return max;
    } else {
        return num;
    }
}

while (true) {
    const min = -10;
    const max = 10;
    const operator = getRandomNumber(0, 3);
    const topValue = getStrictRandom(min, max);
    const bottomValue = getStrictRandom(min, max);
    const strBottom = bottomValue < 0 ? `(${bottomValue})` : `${bottomValue}`; 
    const neededStr = (operators[operator].method(topValue,bottomValue)).toFixed(1);
    const userStr = prompt(`Введи число ${topValue}${operators[operator].sign}${strBottom}: `,).replace(',', '.');

    if (+userStr == +neededStr) {
        alert('Давай ещё по одной!!!');
    } else {
        alert('С тебя хватит! Вали спать, сволочь!');
        break;
    }
}