function calcula_imc(){
    var altura = document.formEstetica.altura.value;
    var peso = document.formEstetica.peso.value;
    //var imc = document.formEstetica.imc.value;
    var quadrado = (altura * altura);
    
    var calculo = (peso/quadrado);
    
    document.formEstetica.imc.value = calculo;
    
}