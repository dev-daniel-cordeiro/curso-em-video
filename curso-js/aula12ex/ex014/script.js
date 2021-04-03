function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        // Bom Dia! 
        img.src = 'fotomanha.png'
        document.body.style.background = '#f4a584'
    } else if (hora >= 12 && hora < 18){
        // Boa Tarde!
        img.src = 'tarde.png'
        document.body.style.background= "#685659"
    } else {
        // Boa noite
        img.src = 'noite.png'
        document.body.style.background= "#121b24"
    }
} 
