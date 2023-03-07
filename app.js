const $ = document.querySelector.bind(document)
let html = {
    valor: $('.valor'),
    slide: $('#slider'),
    Botao: $('#button'),
    Key: $('.password'),
    contPassword: $('#container-password')
}

const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%¨&*"
let newPass = ""

html.valor.innerHTML = html.slide.value

html.slide.oninput = () =>{
    html.valor.innerHTML = html.slide.value
}

html.Botao.addEventListener('click', () => {
    let password = ''

    for(i = 0, n = charset.length; i < html.slide.value; ++i){
        password += charset.charAt(Math.floor(Math.random() * n))
    }

    console.log(password)
    html.contPassword.classList.remove('hide')
    html.Key.innerHTML = password
    newPass = password
})

copypassword.addEventListener('click', () => {
    navigator.clipboard.writeText(newPass)
    window.alert('Senha copiada com sucesso!!!')
})