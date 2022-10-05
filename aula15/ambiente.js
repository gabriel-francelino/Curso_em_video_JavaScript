let num = [5,2,3,6]

console.log(`Nosso vetor é o [${num}]`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O vetor ordenado é ${num.sort()}`)

num.push(1)
num[5] = 7
console.log(`Nosso novo vetor é o [${num}]`)
console.log(`O valor 2 ta na posição: ${num.indexOf(3)}`)