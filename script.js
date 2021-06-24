const result = document.getElementById("result");
// number button event handler
function buttonClickHandler(num){
    result.value += num.toString();
}
// clr event handler
function clrEvent(){
    result.value = "";
}
// result event handler
function getResult(){
    result.value = eval(result.value);
}

    
