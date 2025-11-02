var idade = 85
console.log(`você tem ${idade} anos`)
if (idade >=0 && idade < 16){
    console.log('Você não pode votar')
} else if (idade>22 && idade<55){
    console.log('voto obrigatorio')
}else if(idade>=16 || idade <=55){
    console.log('voto opcional')
}

