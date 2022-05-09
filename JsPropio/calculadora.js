function Suma(){
   var numero1 = document.getElementById("num1").value;
   var numero2 = document.getElementById("num2").value;
   var sum = parseInt(numero1) + parseInt(numero2);

   document.getElementById('resultado').innerHTML = sum;
}


function Resta(){
    var numero1 = document.getElementById("num1").value;
    var numero2 = document.getElementById("num2").value;
    var rest = parseInt(numero1) - parseInt(numero2);
 
    document.getElementById('resultado').innerHTML = rest;
}
function Multiplicacion(){
    var numero1 = document.getElementById("num1").value;
    var numero2 = document.getElementById("num2").value;
    var mult = parseInt(numero1) * parseInt(numero2);
 
    document.getElementById('resultado').innerHTML = mult;
}
function Division(){
    var numero1 = document.getElementById("num1").value;
    var numero2 = document.getElementById("num2").value;
    var divi = parseInt(numero1) / parseInt(numero2);
 
    document.getElementById('resultado').innerHTML = divi;
}