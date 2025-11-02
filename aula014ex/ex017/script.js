function tabuada(){
    let num = document.getElementById('txtn')
    let tabuada = document.getElementById('selecttab')
    if(num.value.length == 0){
        window.alert('[ERRO] Introduz um Número')
    }else{
        let n = Number(num.value)
        let c = 1
        tabuada.innerHTML=''//Para limpar a tabuada
        while(c <= 200){
            let item = document.createElement('option')
            item.text = `${n} * ${c} = ${n * c}`
            item.value = `tabuada ${c}`
            tabuada.appendChild(item)
            c = c + 1
        }
    }
}