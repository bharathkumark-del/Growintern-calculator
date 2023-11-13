function  display(val){
    document.getElementById("dis").value += val;
}
function solve(){
var x = document.getElementById("dis").value
var y = eval(x);
document.getElementById("dis").value = y
}
function cleartext()
{
document.getElementById("dis").value = ""
}
