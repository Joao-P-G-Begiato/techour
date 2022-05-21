class User {
    constructor(name, login, password, adress,phone, birthday){
        this.name = name
        this.login = login
        this.password = password
        this.adress = adress
        this.phone = phone
        this.birthday = birthday
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

}


