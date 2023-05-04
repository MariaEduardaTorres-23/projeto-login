login = document.getElementById("login")
senha = document.getElementById("senha")
mensagem = document.getElementById("mensagem")

btn.addEventListener("click", function(evento){
    evento.preventDefault()
    if(login.value != "admin" && senha.value != "admin"){
        mensagem.innerHTML = "Login ou senha incorretos"
        mensagem.classList.remove("mensagem-sucesso")
        mensagem.classList.add("mensagem-erro")
    }
    else if(login.value != "admin" && senha.value == "admin"){
        mensagem.innerHTML = "Login ou senha incorretos"
        mensagem.classList.remove("mensagem-sucesso")
        mensagem.classList.add("mensagem-erro")
    }
    else if(login.value == "admin" && senha.value != "admin"){
        mensagem.innerHTML = "Login ou senha incorretos"
        mensagem.classList.remove("mensagem-sucesso")
        mensagem.classList.add("mensagem-erro")
    }
    else{
        mensagem.innerHTML = "Login e senha válidos"
        mensagem.classList.remove("mensagem-erro")
        mensagem.classList.add("mensagem-sucesso")
    }
})