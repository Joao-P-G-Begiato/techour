

 let botao = document.querySelector('#btn1');
 botao.addEventListener('click', function(evento){
     evento.preventDefault();
    
    let entradaUsuario = document.querySelector('#formulario');
    entradaUsuario.reset(); 
    guardar();
 })

 function guardar(){
    let mensagem = document.querySelector('#mensagemvalidacao');
    mensagem.innerHTML = 'Enviou'
  // return mensagem;
     
 }


//  $('#btn1').on('click', function(event){
//      event.preventDefault();
//      guardar()
//    let 
//  })