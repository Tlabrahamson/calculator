var display = display = document.querySelector('#display p');
var currentValue = null;
var previousValue = null;
var sign;
var inMemory;

initCalc();

function initCalc(){
    display.textContent = '0';
}

function getValue(){
    if(display.textContent == '0' || null){
        display.textContent = event.target.textContent;
    }else{
        display.textContent += event.target.textContent;
    }
    currentValue = display.textContent;
}

function addToMem(){
    inMemory = currentValue;
}

function memRecall(){
    display.textContent = inMemory;
    currentValue = inMemory;
}

function setPreviousValue(){
    previousValue = currentValue;
    currentValue = '';
    display.textContent = '0';
}

function clearValues(){
    display.textContent = '0';
    currentValue = '0';
    previousValue = '0';
}

function operation(){
    var sign = event.target.textContent;
    operatorClicked = true;
    setPreviousValue();
    return this.sign = sign;
}

function deci(){
    if(display.textContent.indexOf('.') === -1){
       display.textContent += '.';
       currentValue = display.textContent;
       currentValue = parseFloat(currentValue);
    }
}

function performOperation(){
    switch(sign){
        case '/':
            return previousValue /= currentValue;
            break;
        case '*':
            return previousValue *= currentValue;
            break;
        case '+':
            return previousValue += currentValue;
            break;
        case '-':
            return previousValue -= currentValue;
            break;
       
    }

    currentValue = display.textContent;
}

function equal(){
    if(previousValue == null || currentValue == null){
        return;
    }else{
        previousValue = parseFloat(previousValue);
        currentValue = parseFloat(currentValue);
        display.textContent = performOperation();
        currentValue = display.textContent;
    }
 
}