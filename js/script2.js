$(document).ready(function(){

    
    $( "#form-login").submit(function( event ) {
        event.preventDefault();
        var userRetirar = $('#userRetirar').val();
        
        var cliente = {
            nome: 'Cezar',
            login: 'cezarphp',
            senha: '123',
            conta: 'AX23',
            saldo: 33.22
        }
        
        var remover_dinheiro = function(valor){
            cliente.saldo = cliente.saldo - valor;
        }
        var consultar_saldo = function(){
            console.log('SALDO: ' + cliente.saldo);
            }
            remover_dinheiro(userRetirar);
            consultar_saldo();

            
    });

    $('#close').click(function(){
        window.location = 'index.html';
    });
});
