const form = document.getElementById('form');
const NumA = document.getElementById('A');
const NumB = document.getElementById('B');
let valido = false;

function validaNumero(A, B){
    return parseInt(A) < parseInt(B);
}

form.addEventListener('submit', function(e){

    e.preventDefault();

    const msg = document.querySelector('.msg');
    msg.className='msg';

const msgSucesso = "Formulário válido, o valor de A("+ NumA.value +") é menor do que B("+ NumB.value +")";
    const msgError = "O formulário é inválido, pos o Número A("+ NumA.value +") é maior ou igual que o número B("+ NumB.value +")";

    valido = validaNumero(NumA.value, NumB.value);
    if(valido){
        msg.innerHTML = msgSucesso;
        msg.classList.add('success');

    }else{
        document.querySelector('.msg').innerHTML = msgError;
        document.querySelector('.msg').classList.add('error');
    }

    NumA.value = '';
    NumB.value = '';
})
