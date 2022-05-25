function confirmInput(){
    let senha = $("#senha").val()
    if($("#email").val() != $("#confirmacaoe").val()){
        $("#confirmacaoe").focus()
        console.log("email tá funcionando")
        return false
    }else if($("#confirmacao").val() != senha){
        $("#confirmacao").focus()
        console.log("confirma senha tá funcionando")
        return false
    }else if(pattern.test(senha) != true || pattern2.test(senha) != true || pattern3.test(senha) != true || pattern4.test(senha) != true || senha.length < 8){
        console.log("senha tá funcionando")
        $("#senha").focus()
        return false
    }else{
        return true
    }
}

function confimacaoSenha(){
    if($("#senha").val() === $("#confirmacao").val()){
        $("#confirmacao").attr("class", "form-control form-control-sm is-valid")
    }else if ($("#confirmacao").val() === ""){
        $("#confirmacao").attr("class", "form-control form-control-sm")
    }else{
        $("#confirmacao").attr("class", "form-control form-control-sm is-invalid")
    }
}
function confimacaoEmail(){
    if($("#email").val() === $("#confirmacaoe").val()){
        $("#confirmacaoe").attr("class", "form-control form-control-sm is-valid")
    }else if ($("#confirmacaoe").val() === ""){
        $("#confirmacaoe").attr("class", "form-control form-control-sm")
    }else{
        $("#confirmacaoe").attr("class", "form-control form-control-sm is-invalid")
    }
}