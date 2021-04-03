let num = [5, 8, 9, 3, 4]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)

let pos = num.indexOf(6)
if (pos == -1) {
    console.log('O valor não foi encontrados')
} else {
    console.log(`O valor está na posição ${pos}`)
}
