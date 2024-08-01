const display=document.getElementById('display');
function todisplay(input){
display.value+=input;

}
function clearDisplay(){
display.value="";
}
function calculate(){
    try{
        display.value=eval(display.value);
    }
// display.value=eval(display.value);
    catch(error){
        // alert("Invalid input");
        display.value="ERROR";
    }
}
// function deleteLast(){
    // display.value=display.value.slice(0,-1);
// }