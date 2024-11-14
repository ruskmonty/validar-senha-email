let email = document.getElementById('email')
let senha = document.getElementById('senha')


function acerto(){
    senha.style.border = 'solid 10px #008000'
}

function erro(){
senha.style.border = 'solid 10px #ff2d00'
}
function acertoemail(){
    senha.style.border = 'solid 10px #008000'
}
function erroemail(){
    email.style.border = 'solid 10px #ff2d00'
}

document.getElementById('btn-login').addEventListener('click',function verificarsenha(){
  if(senha.value.length < 8 ||
    !senha.value.match(/[a-z]/)
    || !senha.value.match(/[A-Z]/)
    || !senha.value.match(/[0-9]/)
    || !senha.value.match(/[^a-zA-Z0-9]/)
  ){

    // mensagem.innerHTML = "senha invalida"
 erro()
  } else {
//     mensagem.innerHTML = "senha válida"
acerto()
  }
}
)

document.getElementById('btn-login').addEventListener('click', function verificaremail(){
    if( email.value === 'rusk@gmail'){
      acertoemail()

    } else {
        erroemail()
    }
})
   