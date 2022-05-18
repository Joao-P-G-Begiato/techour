let erro = $('#erro');
let senhaErro = $('#senhaErro');

$("#submit").click(function (e) {
    e.preventDefault();

    let email = $("#email").val();
    let senha = $("#inputPassword").val();

    if (email == "") {
        console.log("email vazio");
        erro.html('<span>⚠︎ campo obrigatório</span>');
        erro.removeAttr('hidden');
        $('#email').addClass('is-invalid');
    }else if (validaEmail(email) == false) {
        console.log('email incorreto');
        erro.html('<span>⚠︎ campo incorreto</span>');
        erro.removeAttr('hidden');
        $('#email').addClass('is-invalid');

    }else if (validaEmail(email) == true) {
        $('#email').removeClass('is-invalid').addClass('is-valid');
        erro.attr('hidden', true);
    }else {
        $('#email').removeClass('is-invalid').addClass('is-valid');
        erro.attr('hidden', true);

    } if (senha == ""){
        senhaErro.html('<span>⚠︎ campo obrigatório</span>');
        senhaErro.removeAttr('hidden');
        $('#inputPassword').addClass('is-invalid');
    } else {
        $('#inputPassword').removeClass('is-invalid').addClass('is-valid');
        senhaErro.attr('hidden', true);
    }

});

function validaEmail(email) {
    const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    if (!reg.test(email)) {
        return false;
    } else {
        return true;
    }
}
