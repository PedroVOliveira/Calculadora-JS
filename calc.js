(function (){
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
$buttons[19].addEventListener('click',calcular);
//Funções a Adicionar
//Botão mais e menos
$buttons[16].addEventListener('click',()=>{
    alert('Em breve...');
})
//Botão CE
$buttons[1].addEventListener('click',()=>{
    alert('Em breve...')
});
})();