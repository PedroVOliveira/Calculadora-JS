const buttons = document.querySelectorAll('button');
const inputElement= document.querySelector('input');


//function
function limpar(){
    document.querySelector('input').value = '';
}
function preencher(valor){
    document.querySelector('input').value += valor;
}
function calcular(){
    let resultado = 0;
    resultado = document.querySelector('input').value;
    document.querySelector('input').value = '';
    document.querySelector('input').value = eval(resultado);
}
console.log(buttons);
//Events
//Limpar
buttons[0].addEventListener('click',limpar);
//Resultado
buttons[19].addEventListener('click',calcular);
//Numeros
//1 a 3
//buttons[4].addEventListener('click',preencher);
//buttons[5].addEventListener('click',preencher);
//buttons[6].addEventListener('click',preencher);
//4 a 6
//buttons[8].addEventListener('click',preencher);
//buttons[9].addEventListener('click',preencher);
//buttons[10].addEventListener('click',preencher);
// 7 a 9 e 0
//buttons[12].addEventListener('click',preencher);
//buttons[13].addEventListener('click',preencher);
//buttons[14].addEventListener('click',preencher);
//buttons[17].addEventListener('click',preencher);
