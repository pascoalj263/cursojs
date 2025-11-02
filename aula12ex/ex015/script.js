function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero =''
        var img= document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
                genero='Homem'
            if(idade >= 0 && idade <= 10){
                //criança
                img.setAttribute('src', 'criancam.png')
            } else if (idade > 10 && idade <= 18 ){
                //jovem
                img.setAttribute('src', 'jovemm.png')
            } else if (idade >18 && idade < 50){
                //adulto
                img.setAttribute('src','senhor.png')
            } else {
                //idoso
                img.setAttribute('src','idoso.png')
            }
        } else if(fsex[1].checked){

                genero = 'Mulher'

            if(idade >= 0 && idade <= 10){
                //criança
                img.setAttribute('src', 'criancaf.png')
            } else if (idade > 10 && idade <= 18 ){
                //jovem
                img.setAttribute('src', 'jovemf.png')
            } else if (idade > 18 && idade < 50){
                //adulto
                img.setAttribute('src', 'senhora.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign='center'
        res.innerHTML=`detetamos ${genero} com ${idade} anos`
        res.appendChild(img)
           
    }

}