const form = document.getElementById('form');
const NumA = document.getElementById('A');
const NumB = document.getElementById('B');
let valido = false;

function validaNumero(A, B){
    return parseInt(A) < parseInt(B);
}

form.addEventListener('submit', function(e){

    e.preventDefault();

    const msgSucesso = "Formulário válido, o valor de A("+ NumA.value +") é menor do que B("+ NumB.value +")";
    const msgError = "O formulário é inválido, pos o Número A("+ NumA.value +") é maior ou igual que o número B("+ NumB.value +")";

    valido = validaNumero(NumA.value, NumB.value);
    if(valido){
        const PmsgSucesso = document.querySelector('.success-msg');
        PmsgSucesso.innerHTML = msgSucesso;
        PmsgSucesso.style.display = 'block'

        NumA.value = '';
        NumB.value = '';

    }else{

        document.querySelector('.error-msg').innerHTML = msgError;
        document.querySelector('.success-msg').style.display = 'none'
        document.querySelector('.error-msg').style.display = 'block';
    }
})

NumB.addEventListener('keyup', function(e){
    console.log(e.target.value);

    valido = validaNumero(NumA.value, e.target.value);
        if(!valido){
        NumB.classList.add('error');
        document.querySelector('.error-msg').style.display = 'block';
        document.querySelector('.error-msg').innerHTML = "O formulário é inválido, pos o Número A("+ NumA.value +") é maior ou igual que o número B("+ NumB.value +")";
    } else{
        NumB.classList.remove('error');
        document.querySelector('.error-msg').style.display = 'none';
    }
})
