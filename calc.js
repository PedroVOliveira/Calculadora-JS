
const inputElement= document.querySelector('input');
const $buttons = document.querySelectorAll('[data-item="button"]');

//function
function limpar(){
    document.querySelector('input').value = '';
}

function calcular(){
    let resultado = 0;
    resultado = document.querySelector('input').value;
    document.querySelector('input').value = '';
    document.querySelector('input').value = eval(resultado);
}
//Limpar
$buttons[0].addEventListener('click',limpar);
//preencher
$buttons.forEach(button =>{
    button.addEventListener('click', event =>{
        document.querySelector('input').value += button.value;     
    });
});

//calcular
$buttons[18].addEventListener('click',calcular);


