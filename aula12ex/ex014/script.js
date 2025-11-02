
function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var minuto = data.getMinutes()
    var hora = data.getHours()
    msg.innerHTML=`Agora são ${hora} horas e ${minuto} minutos`
    if (hora >= 0 && hora < 12){
        //Bom dia
        img.src='manha.png'
        window.document.body.style.background='#edaa59'
    }else if(hora >= 12 && hora < 18){
        //Boa tarde
        img.src='tarde.png'
        window.document.body.style.background='#ff8663'
    }else{
        //Boa noite
        img.src='noite.png'
        window.document.body.style.background='#2c70c6'
    }
}