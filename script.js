function somarNumeros(){
    var numero1 = document.getElementById("num1").value;
    var numero1Alterado=parseInt(numero1);
    var numero2 = document.getElementById("num2").value;
    var numero2Alterado=parseInt(numero2);
    var resultado = numero1Alterado+numero2Alterado
    alert("O resultado da soma ="+resultado);
}