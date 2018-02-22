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

var operators = [
    {
        sign: "-", 
        method: function(a,b){
        console.log( 'a = ', a);
        console.log('b = ', b);
        return a-b;
        }
    },
    {
        sign: "+", 
        method: function(a,b){
        console.log( 'a = ', a);
        console.log('b = ', b);
        return a+b;
        }
    },
    { 
        sign: "*", 
        method: function(a,b){
        console.log( 'a = ', a);
        console.log('b = ', b);
        return a*b;
        }
    },
    {
        sign: "/", 
        method: function(a,b){
        while(b==0){
            b = Math.round(Math.random() * 10);
        }    
        console.log( 'a = ', a);
        console.log('b = ', b);
        return a/b;
        }
    }
];


// 5!!!

var t;
var b;
var strB;
flag = true;
var neededStr;
var userStr;
var operator;

while (flag) {
    // t = Math.round(Math.random() * 10);
    // b = Math.round(Math.random() * 10);
    operator = Math.round(Math.random()*3);  
    t = Math.round(Math.random()*20 - 10);
    b = Math.round(Math.random()*20 - 10);
    
    if(b < 0) {
        strB = `(${b})`;
    } else {
        strB = `${b}`;
    }

    neededStr = (operators[operator].method(t,b)).toFixed(1);
    console.log('neededStr: ', neededStr);
    console.log(t);
    console.log(b);
    userStr = prompt(`Введи число ${t}${operators[operator].sign}${strB}: `,);
    console.log(userStr);
    userStr = userStr.replace(",",".");

    console.log('userStr: ', userStr);
    if( +userStr == +neededStr) {
        alert('Давай ещё по одной!!!');
    } else {
        var dotCounter = 0;
        for( i = 0; i < userStr.length; i++) {
            if( userStr[i] == ".") {
                dotCounter++;
            }
        }
        if (dotCounter>1){
            alert('Воу Воу, поменьше точек, алкоголик!');
            flag = false;
            break;
        }
        alert('С тебя хватит! Вали спать, сволочь!');
        flag = false;
    }
}