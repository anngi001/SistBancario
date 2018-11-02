var cliente = {
    nome: 'Cezar',
    login: 'cezarphp',
    senha: '123',
    conta: 'AX23',
    saldo: 33.22
}

var add_dinero = function(valor){
   cliente.saldo = cliente.saldo + valor;
}

var remover_dinero = function(valor){
    cliente.saldo = cliente.saldo - valor;
}

var consultar_saldo = function(){
    console.log('SALDO: ' + cliente.saldo);
}

var consultar_cliente = function(){
    console.log('Nome: ' + cliente.nome);
    console.log('Login: ' + cliente.login);
    console.log('Senha: ' + cliente.senha);
    console.log('Conta: ' + cliente.conta);
    console.log('Saldo: ' + cliente.saldo);
}

add_dinero(200);
consultar_saldo();
remover_dinero(50);
consultar_saldo();

