$(document).ready(function(){

    
    $( "#form-login").submit(function( event ) {
        event.preventDefault();
        var user = $('#user').val();
        var pass = $('#password').val();
        
        if (user == 'user' && pass == 'user') {
            window.location = 'view/home.html';
        } else {
            if (user == 'admin' && pass == 'admin') {
                window.location = 'admin/admin.html';
            } else {
            alert('El usuario no exite');
        
        }}
            
    });

    $('#close').click(function(){
        window.location = 'index.html';
    });
});
