let valores = [2,1,6,5,4,0]
console.log(valores)//Forma padrão
valores.push(3)//acrescentar um valor na ultima posição
valores.sort()

//console.log(`O nosso vetor é ${valores}`)

/*for(p=0; p < valores.length ; p++ ){
    console.log(`A posição ${p}, tem o valor ${valores[p]}`)
}


*/

for(let p in valores){
    console.log(`a posição ${p} tem o valor ${valores[p]}`)
}
console.log(`O nosso vetor tem ${valores.length} posições`)