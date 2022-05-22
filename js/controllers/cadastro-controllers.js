let cep =""

$("#cep-sub").click(function(e){
    e.preventDefault()
    manipulaCEP($("#cep").val())
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

