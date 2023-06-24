$(document).ready(function(){
    
    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000')
    
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep :{
                required: true
            }
        },
        messages: {
            nome: 'Por favor insira seu nome completo',
            email: 'Por favor, insira um email válido',
            telefone: 'Por favor, digite seu telefone',
            cpf: 'Por favor, digite seu CPF',
            endereco: 'Por favor, digite seu endereço',
            cep: 'Por favor, digite seu CEP'
        }
    })
})