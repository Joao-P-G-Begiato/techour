class User {
    constructor(name, socialName, login, password, adress, phone, birthday){
        this.name = name
        this.socialName = socialName
        this.login = login
        this.password = password
        this.adress = adress
        this.phone = phone
        this.birthday = birthday
    }

    setName(newName){
        this.name=newName
    }

    setSocialName(newSocialName){
        this.socialName = newSocialName
    }

    setPassword(newPassword,passConfirmation){
        try{            
            if(newPassword=passConfirmation){
                this.password=newPassword
            }else{
                throw new Error("Senha e Confirmação de Senha não são correspondentes")
            }
        }catch(erro){
             console.log(error)
        }
    }

    setAdress(newAdress){
        this.adress=newAdress
    }

    setPhone(newPhone){
        this.phone=newPhone
    }

    setBirthday(newBirthday){
        this.birthday=newBirthday
    }
    
}

let newUser = ""

function sanitizaCEP(){
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

const pattern = new RegExp ("^(.*[a-z])")
const pattern2 = new RegExp ("^(.*[A-Z])")
const pattern3 = new RegExp ("^(.*[0-9])")
const pattern4 = new RegExp ("^(.*[- + _! @ # $% ^ & *.,?])")

function usuarioNovo(){
    let adress = `${$("#logradouro").val()}, ${$("#number").val()} - ${$("#complemento").val()} - ${$("#bairro").val()} , ${$("#cidade").val()} - ${$("#estado").val()} - ${$("#pais").val()}, ${$("#cep").val()}`
    let name = `${$("#nome").val()} ${$("#sobrenome").val()}`
    let socialName = $("#nome-social").val()
    let phone = $("#tel").val()
    let password = $("#senha").val()
    let login = $("#email").val()
    let birthday = $("#data").val()

    newUser = new User(name, socialName, login, password, adress, phone, birthday)

}
