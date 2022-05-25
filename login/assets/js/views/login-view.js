function confereEmail(email) {
    if (email == "") {
        erro.html('<span>⚠︎ campo obrigatório</span>');
        erro.removeAttr('hidden');
        $('#email').addClass('is-invalid');
    } else if (validaEmail(email) == false) {
        erro.html('<span>⚠︎ campo incorreto</span>');
        erro.removeAttr('hidden');
        $('#email').addClass('is-invalid');

    } else if (validaEmail(email) == true) {
        $('#email').removeClass('is-invalid').addClass('is-valid');
        erro.attr('hidden', true);
    } else {
        $('#email').removeClass('is-invalid').addClass('is-valid');
        erro.attr('hidden', true);
    }

}

function confereSenha(senha) {
    if (senha == "") {
        senhaErro.html('<span>⚠︎ campo obrigatório</span>');
        senhaErro.removeAttr('hidden');
        $('#senha').addClass('is-invalid');
    } else {
        $('#senha').removeClass('is-invalid').addClass('is-valid');
        senhaErro.attr('hidden', true);
        return true
    }

}

function msgSucesso(email, senha) {
    (validaEmail(email) === true && confereSenha(senha) === true) ? $('#msg-sucesso').removeAttr('hidden') : "false";
}