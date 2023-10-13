function getNumber(num){
    var results = document.getElementById("result");
    results.value += num ;
}

// function ClearAll(){
//     var getResult = documnent.getElementById("clearAll");
//     getResult.value = "null";
// }

function getResult(){
    var x = document.getElementById("result");
    x.value = eval(result.value);
    
}

function squareValue(a) {
    var Input = document.getElementById("result");
    Input.value *= Input.value;
}

function removeOne(){
    var input = document.getElementById("result");
    input.value = input.value.slice(0,-1);
}

// function clear(){
//     var input = document.getElementById("result");
//     input.value = input.value.slice(0,-1);
// }

