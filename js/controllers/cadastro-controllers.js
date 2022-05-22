let cep =""

$("#cep-sub").click(function(e){
    e.preventDefault()
    manipulaCEP($("#cep").val())
})

function confereCEP (cep){
    if(cep.length == 8){
        chamaCEP(cep)
        $(".invalido").empty()
        $("#cep").attr("class" ,"form-control form-control-sm is-valid")
    }else{
        $(".invalido").html("CEP informado é inválido tente novamente")
        $(".invalido").css("color", "red")
        $("#cep").attr("class" ,"form-control form-control-sm is-invalid")
    }
}



function manipulaCEP(){
    const ref = "0123456789"
    let entrada = $("#cep").val().split("")
    let retorno =""
    for(let i=0 ; i< entrada.length; i++){
        if (ref.indexOf(entrada[i])>=0){
            retorno += entrada[i]
        }
    }
    return confereCEP(retorno)
}


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

