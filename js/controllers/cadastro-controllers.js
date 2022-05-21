let cep =""

$("#cep-sub").click(function(e){
    e.preventDefault()
    alert("tá chamando funcionando apertar o botão")
    manipulaCEP($("#cep").val())
})

function confereCEP (cep){
    if(cep.length == 8){
        chamaCEP(cep)
    }else{
        $(".invalido").html("CEP informado é inválido tente novamente")
        $(".invalido").css("color", "red")
        $(".invalido").css("gap", "red")
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
            adress = results
            preencheCampos(results)
        }

})}


