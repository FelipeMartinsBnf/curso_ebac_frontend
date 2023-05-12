$(document).ready(function(){

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(DDD) 12345-1234'
    })

    $('#cpf').mask('000-000-000-00', {
        placeholder: '123.456.789-01'
    })

    $('#cep').mask('00000-000', {
        placeholder: '12345-123'
    })
})