$("#submit").click(function (e) {
    e.preventDefault();

    let email = $("#email").val();
    let senha = $("#senha").val();

    confereEmail(email);
    confereSenha(senha);
    msgSucesso(email, senha);

});