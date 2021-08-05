
let heldValue, heldOperation, nextValue = null;

///helper function//////
function showValue(location, value){

    // location will be a string

    if(value === null ){
        // || value === undefined)
        $(location).text('');
        //console.log('in if:',value);
    }else{
        $(location).text(Number(value));
        //console.log('in else',value);
    }
}


//helper function///
function updateDisplay(){
    showValue('.held-value', heldValue);
    showValue('.next-value', nextValue);
}


function clearAll(){
    // why cant I do heldValue, heldOperation, nextValue = null; --------------????
    // results in 'Nan'

  heldValue = null;
  heldOperation = null;
  nextValue = null;
}

function clearEntry(){
    nextValue = null;
}


function add(x, y){
    return (Number(x) + Number(y))
}

function subtract(x, y){
    return (Number(x) - Number(y))
}

function multiply(x, y){
    return (Number(x) * Number(y))
}

function divide(x, y){
    return (Number(x) / Number(y))
}


function setHeldOperation(operation){
    console.log('heldOperation before if:', typeof heldOperation)
    if (heldOperation !== null){
        console.log('heldOperation in if, before:', typeof heldOperation)
        heldValue = heldOperation(heldValue, nextValue);   ///heldOperation is not a function?????
        console.log('heldOperation in if, afer:', typeof heldOperation)

    }else if (nextValue !== null){ 
        // && heldOperation === null
        
        heldValue = nextValue;

    }
        
    nextValue = null;
    heldOperation = operation;
    console.log('heldOperation afer if:', typeof heldOperation)
}

//CLick listeners
$('.digits button').click(function(){
    
    let number = $(this).text();
    
    //if nextValue is null, replace with 0
    if (nextValue === null){
        //  && number === '.'
       nextValue = "0"  
    }
    
    
    nextValue = nextValue + number;
  
    // if (heldValue !== null && heldOperation == null) {
        // heldValue = null;
    //   }


    updateDisplay();  
});


//add
$('.add').click(function(){
    setHeldOperation(add);
    $('.next-operation').text('+');
    
    updateDisplay();
})


//subtract
$('.subtract').click(function(){
    setHeldOperation(subtract);
    $('.next-operation').text('-');
    
    updateDisplay();

})

//multiply
$('.multiply').click(function(){
    setHeldOperation(multiply);
    $('.next-operation').text('x');
    
    updateDisplay();
})

//divide
$('.divide').click(function(){
    setHeldOperation(divide);
    $('.next-operation').text('/');
    
    updateDisplay();
})

//equals
$('.equals').click(function(){
    setHeldOperation(null);
    $('.next-operation').text('');

    updateDisplay();
})

$('.clear-all').click(function(){
    clearAll();
    $('.next-operation').text('');
    updateDisplay();
});

$('.clear-entry').click(function(){
    clearEntry();
    updateDisplay();
});

clearAll();
updateDisplay();
