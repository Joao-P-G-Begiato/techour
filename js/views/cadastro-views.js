function confirmInput(){
    let senha = $("#senha").val()
    if($("#email").val() != $("#confirmacaoe").val()){
        $("#confirmacaoe").focus()
        console.log("senha tá funcionando")
        return false
    }else if($("#confirmacao").val() != senha){
        $("#confirmacao").focus()
        return false
    }
    else{
        return true
    }

}