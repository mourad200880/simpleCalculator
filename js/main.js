// this are the variables we are using for this application
let total = 0;
let num1 = '';
let num2 = '';
let operator = '';
let display = '';

// this is for the display addEvent 
document.querySelector('#clickZone').addEventListener('click', displayCalc);

//this is the number value operation addEvent
document.querySelector('#zero').addEventListener('click', zero);
document.querySelector('#one').addEventListener('click', one);
document.querySelector('#two').addEventListener('click', two);
document.querySelector('#three').addEventListener('click', three);
document.querySelector('#four').addEventListener('click', four);
document.querySelector('#five').addEventListener('click', five);
document.querySelector('#six').addEventListener('click', six);
document.querySelector('#seven').addEventListener('click', seven);
document.querySelector('#eight').addEventListener('click', eight);
document.querySelector('#nine').addEventListener('click', nine);

//this is the operator value operation addEvent
document.querySelector('#plus').addEventListener('click', plus);
document.querySelector('#minus').addEventListener('click', minus);
document.querySelector('#multiply').addEventListener('click', multiply);
document.querySelector('#devide').addEventListener('click', devide);
document.querySelector('#equals').addEventListener('click', equals)
document.querySelector('#clear').addEventListener('click', clear)
// functions to get numb1 and numb2 from
function zero(){
    if (operator == ''){
        num1 = num1 + 0
    }else{
        num2 = num2 + 0
    }
}
function one(){
    if (operator == ''){
        num1 = num1 + '1'
        }else{
        num2 = num2 + '1'
    }
}

function two(){
    if (operator = ''){
        num1 = num1 + '2'
    }else{
        num2 = num2 + '2'
    }
}

function three(){
    if (operator == ''){
        num1 = num1 + '3'
    }else{
        num2 = num2 + '3'
    }
}

function four(){
    if (operator == ''){
        num1 = num1 + '4'
    }else{
        num2 = num2 + '4'
    }
}

function five(){
    if (operator == ''){
        num1 = num1 + '5'
    }else{
        num2 = num2 + '5'
    }
}

function six(){
    if (operator == ''){
        num1 = num1 + '6'
    }else{
        num2 = num2 + '6'
    }
}

function seven(){
    if (operator == ''){
        num1 = num1 + '7'
    }else{
        num2 = num2 + '7'
    }
}

function eight(){
    if (operator == ''){
        num1 = num1 + '8'
    }else{
        num2 = num2 + '8'
    }
}

function nine(){
    if (operator == ''){
        num1 = num1 + '9'
    }else{
        num2 = num2 + '9'
    }
}
// functions to get the property value
function plus(){
    operator = '+';
}

function minus(){
    operator = '-';
}

function multiply(){
    operator = '*';
}

function devide(){
    operator = '/';
}

// function to put our equation in display
function displayCalc(){
    display = num1 + operator + num2;
    document.querySelector('#palceToPutEquation').innerText = display;
}
// function to calc the result of our equation 
function equals(){
    num1 = (+num1);
    num2 = (+num2);
    if(operator === '+'){
        total = num1 + num2;
    }else if(operator === '-'){
        total = num1 - num2;
    }else if(operator === '*'){
        total = num1 * num2;
    }else if(operator === '/'){
        total = num1 / num2;
    }
    else{
        alert('you forget to add something')
    }
    document.querySelector('#placeToPutResult').innerText = total;
}

function clear(){
    total = 0;
    num1 = '';
    num2 = '';
    operator = '';
    display = '';

    document.querySelector('#placeToPutResult').innerText = total;


}
