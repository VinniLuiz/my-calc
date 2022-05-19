var expressao = "";

function atualizarDisplay(btn){
    const display = document.getElementById('display');
    if(display.value.length === 9) return;
    if(display.value === '0'){
       display.value = btn.value;
       expressao += btn.value;
    }
    else{
       display.value += btn.value;
       expressao += btn.value;
    }
}

function limparDisplay(){
    document.getElementById('display').value = '0';
    expressao = "";
}

var operador = ''
var valor1 = 0
function atualizarOperacao(btn){
    const display = document.getElementById('display');
    operador = btn.value;
    valor1 = Number(display.value);
    display.value = '0';
}

function calcularOperacao(){
    const display = document.getElementById('display');
    display.value = eval(expressao)
}       

function manipularTeclado(){
    if(/[0-9]/.test(event.key))
        atualizarDisplay({value: event.key});
}

function raizQuadrada(){
    const numero = document.getElementById('display');
    const resultado = Math.sqrt(numero.value);
    display.value = resultado;
}

function exponenciaçaoQuadrada(){
    const num = document.getElementById('display');
    resultado = Math.pow(num.value, 2);
    display.value = resultado;
}

function exponenciaçaoCubica(){
    const num = document.getElementById('display');
    resultado = Math.pow(num.value, 3);
    display.value = resultado;
}