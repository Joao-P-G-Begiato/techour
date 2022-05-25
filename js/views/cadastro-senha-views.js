function validaSenha(txt){
    $("#span-senha").css("display", "flex")
    upperCase(txt)
    lowerCase(txt)
    number(txt)
    special(txt)
    length(txt)
    if(pattern.test(txt) && pattern2.test(txt) && pattern3.test(txt) && pattern4.test(txt) && txt.length>=8){
        $("#senha").attr("class", "form-control form-control-sm is-valid")
    }else if (txt === ""){
        $("#senha").attr("class", "form-control form-control-sm")
    }else{
        $("#senha").attr("class", "form-control form-control-sm is-invalid")
    }
}

function limpaInfoSenha(){
    $("#span-senha").css("display", "none")
}

function upperCase(txt){
    if(pattern2.test(txt)){
        $(".upper").css("color", "#198754")
    } else {
        $(".upper").css("color", "#dc3545")
    }
}

function lowerCase(txt){
    if(pattern.test(txt)){
        $(".lower").css("color", "#198754")
    } else {
        $(".lower").css("color", "#dc3545")
    }
}

function number(txt){
    if(pattern3.test(txt)){
        $(".number").css("color", "#198754")
    } else {
        $(".number").css("color", "#dc3545")
    }
}

function special(txt){
    if(pattern4.test(txt)){
        $(".special").css("color", "#198754")
    } else {
        $(".special").css("color", "#dc3545")
    }
}

function length(txt){
    if(txt.length>=8){
        $(".length").css("color", "#198754")
    } else {
        $(".length").css("color", "#dc3545")
    }
}