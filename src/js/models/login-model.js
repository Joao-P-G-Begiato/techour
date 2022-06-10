let senhaErro = $('#senhaErro');
let erro = $('#erro');

function validaEmail(email) {
    const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    if (!reg.test(email)) {
        return false;
    } else {
        return true;
    }
}