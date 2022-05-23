function preencheCampos(results){
    logradouro(results.logradouro)
    bairro(results.bairro)
    cidade(results.localidade)
    estado(results.uf)
    pais()
    complemento(results.complemento)
}

function logradouro(rua){
    $("#logradouro").removeAttr("disabled")
    $("#logradouro").val(rua)
}

function bairro(bairro){
    $("#bairro").removeAttr("disabled")
    $("#bairro").val(bairro)

}

function cidade(cidade){
    $("#cidade").removeAttr("disabled")
    $("#cidade").val(cidade)
}

function estado(estado){
    $("#estado").val(estado)
    $("#estado").removeAttr("disabled")
}

function pais(){
    $("#pais").val("Brasil")
    $("#pais").removeAttr("disabled")
}

function complemento(comp){
    $("#complemento").removeAttr("disabled")
    $("#complemento").val(comp)
}

function validaSenha(txt){
    if(pattern.test(txt) && pattern2.test(txt) && pattern3.test(txt) && pattern4.test(txt)){
        $("#senha").attr("class", "form-control form-control-sm is-valid")
    }else if (txt === ""){
        $("#senha").attr("class", "form-control form-control-sm")
    }else{
        $("#senha").attr("class", "form-control form-control-sm is-invalid")
    }
}