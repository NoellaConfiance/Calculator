let operator='';
let previousValue='';
let currentValue='';


document.addEventListener("DOMContentLoaded", function(){
    let clear = document.querySelector(".clear");
    let equal = document.querySelector(".equal");
    let decimal = document.querySelector(".decimal");
    
    let operators = document.querySelectorAll(".operator");
    let numbers = document.querySelectorAll(".number");
    
    let previousScreen= document.querySelector(".previous");
    let currentScreen= document.querySelector(".current");

    


    numbers.forEach((number) => number.addEventListener("click", function(e){
         handleNumber(e.target.textContent)
         currentScreen.textContent = currentValue;
    }))

    operators.forEach((op) => op.addEventListener ("click", function(e){
        handleOperator(e.target.textContent)
        previousScreen.textContent = previousValue + "" +operator;
        currentScreen.textContent = currentValue;
    }))

    clear.addEventListener("click", function(){
        previousValue='';
        currentValue='';
        operator= '';
        previousScreen.textContent = currentValue;
        currentScreen.textContent = currentValue;
    })

    equal.addEventListener("click", function (){
        operate()
        previousScreen.textContent = '';
        currentScreen.textContent = previousValue;
    })

    decimal.addEventListener("click", function(){
        addDecimal()
    })
})

function handleNumber(num){
    if(currentValue.length <= 8){
        currentValue += num;
    }
   
}

function handleOperator(op){
    operator = op;
    previousValue =currentValue;
    currentValue ='';
}

function operate(){
    previousValue= Number(previousValue);
    currentValue= Number(currentValue);

    if (operator === "+"){
        previousValue += currentValue;
    } else if (operator === "-"){
        previousValue -= currentValue;
    } else if (operator === "*"){
        previousValue *= currentValue;
    }else if (operator === "/"){
        previousValue /= currentValue;
    }
    

    /*currentScreen.textContent = previousValue;*/
    previousValue = roundNumber(previousValue);
    previousValue = previousValue.toString();
    currentValue = currentValue.toString();
    previousValue.textcontent = currentValue;

}

function roundNumber (num){
    return Math.round(num*1000) / 1000;
}

function addDecimal(){
    if(!currentValue.includes(".")){
        currentValue += '.';
    }
}

document.addEventListener("click" , function(){
    const reminderPrevious = document.querySelector(".reminder");
    const signplusMinus = document.querySelector(".plus-minus");
    const DeletionPoint = document.querySelector(".Delete");

    reminderPrevious.addEventListener("click", function(){
        if (currentValue === previousValue);
            return (operator = newOperation);
    
    })
})

    