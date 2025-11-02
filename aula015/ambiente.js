let num = [5,4,8,2,6,3,7,9]
num.push(1)
num.sort()

console.log(num)
console.log(`o vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é o ${num[0]}`)
let p = num.indexOf(4)
if (p==-1){
    console.log('O valor não foi encontrado no vetor')
}else{
    console.log(` o valor esta na posição ${p}`)
}
