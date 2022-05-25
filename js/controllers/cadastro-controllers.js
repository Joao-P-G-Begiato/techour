// let cep =""

$("#cep-sub").click(function(e){
    e.preventDefault()
    sanitizaCEP($("#cep").val())
})

function chamaCEP(cep){
    $.ajax({
        url: `https://viacep.com.br/ws/${cep}/json/`,
        success: function(results){
            preencheCampos(results)
        },
        error: function(erro){
            console.log(erro)
        }

})}

$("#senha").keyup(function(){
    validaSenha($("#senha").val())
})

$("#senha").blur(function(){
    limpaInfoSenha($("#senha").val())
})

$("#confirmacao").keyup(function(){
    confimacaoSenha()
})

$("#confirmacaoe").keyup(function(){
    confimacaoEmail()
})

$("#submit").click(function(event){
    event.preventDefault()
    confirmInput()
    let submit = confirmInput()
    if(submit == false){
       $("#dados-invalidos").html("*Algum dado foi preenchido de forma inapropriada.")
    } else{
        usuarioNovo()
        $("form").html("seu cadastro foi realizado com sucesso, aguarde nosso e-mail de inauguração da plataforma.")
    }
})
