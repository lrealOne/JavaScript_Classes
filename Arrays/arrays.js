// Repassando conceitos basicos de arrays

// Espalhar um array em outro

//const nomes = ["Luan", "Ana", "Julia"];
//const nomes_novo = [...nomes];

// caso use :
// nomes_novo = nomes;
// Tudo que for feito no array nomes_novo, tambem afetara o array nomes

////////////////////////////////////////////////////

// pop() e shift()

/* pop remove e retorna o ultimo valor. Ex:
*/
//const nome_pop = nomes.pop();
//console.log(nome_pop, nomes)


/* shift remove e retorna o primeiro valor
*/
//const nome_shift = nomes.shift();
//console.log(nomes, nome_shift)

///////////////////////////////////////////

// push() & unshift()

// push() = adiciona item no fim do array. Ex = 

//nomes.push("Caio")
//console.log(nomes)

//unshift() = adiciona item no inicio do array

//nomes.unshift("Ares");
//console.log(nomes)


///////////////////////////////////////////////

// slice => serve para "fatiar" o array, passamos como parametro o primeiro indice ate o que queremos + 1 (ex: nomes.slice(0, 3) => retorna os indexes 0, 1 e 2)

//const twoNames = nomes.slice(0, 2) // retornará os indexes 0 e 1 
// console.log(twoNames)

////////////////////////////////////////////////////////

// split() => transforma strings em arrays usando um separador

//let nome_inteiro = "Luan de Carvalho Leite"
//let nome_separado = nome_inteiro.split(" ")
//let numeros_ = "1, 2, 3, 4, 5, 6, 7, 8, 9, 10"
//let numeros_array = numeros_.split(", ")
//console.log(nome_separado, numeros_array)

////////////////////////////////////////////////

// join() => serve para transformar array em string, usando um separador 

//let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//let numerosStr = numeros.join(", ")
// console.log(numeros, numerosStr)

/////////////////////////////////////////////

// Splice() => função mais complexa, para remover e adicionar itens em um array
/*
    const paises = ["Bra", "Arg", "Esp", "Ger", "Col", "Fra", "Eng"]
    .splice(indice, qtdDeletar, new01)


const paises = ["Bra", "Arg", "Esp", "Ger", "Col", "Fra", "Eng"]
let paisesNovos = paises.splice(3, 0, "EUA") // => adiciona "EUA" no indice 3
paisesNovos = paises.splice(1, 1) // => remove o 1 item no indice 1
console.log(paisesNovos, paises)
*/

// pop()
// newArray = array.splice(-1, 1)

// shift()
// newArray = array.splice(0, 1)

// push()
// newArray = array.splice(nomes.lenght, 0, newItem)

// unshift()
//newArray = array.splice(0, 0, newItem)

//////////////////////////////////////////

// concatenação de arrays

const a1 = [1, 2, 3]
const a2 = [4, 5, 6]
const a3 = a1.concat(a2, [7, 8, 8], "Luan") //=> pode acrescentar mais arrays com a função concat;
//console.log(a3)
// ou 
const a3OC = [...a1, "text", ...a2, "Luan", [7, 8, 9]]
//console.log(a3OC)

//////////////////////////////////////////

// filter, map and reduce

// filter ==> Sempre retorna um array com a mesma quantidade de elementos ou menos.

const numbers = 
    [5, 50, 80, 1, 2, 3,
    5, 8, 7, 11, 15, 22, 27];

let filterOp = numbers.filter((number) => number > 10)
//console.log(filterOp)

// filter + complexo 


const persons = [
    { nome: "Luan", idade: 62},
    { nome: "Ana julia", idade: 23},
    { nome: "Caio", idade: 55},
    { nome: "Arthur", idade: 19},
    { nome: "Lorena", idade: 32},
    { nome: "Luiza", idade: 47}
]

// a) pessoas que possuem nomes de 5 letras ou mais;

const fiveLetters = persons.filter(
    obj => obj.nome.length >= 5)
//console.log(fiveLetters)

// b) pessoas com mais de 50 anos;
const oldBoyz = ({idade}) => {
    return idade > 50;
};
//console.log(persons.filter(oldBoyz))

// or 

const oldBoyz2 = persons.filter(obj => obj.idade >= 50)
//console.log(oldBoyz2)


// c) pessoas cujo nome termina com "a".
const lastA = persons.filter(obj => obj.nome.endsWith("a"));
//console.log(lastA)

//----------------------------------------------------------
// map => Sempre retorna um array com a mesma quantidade de elementos do array original, porem com os elementos alterados. 

// dobre os numeros 
const numberArray = 
    [5, 50, 80, 1, 2, 3,
    5, 8, 7, 11, 15, 22, 27];

let doubleNumbers = numberArray.map((number) => number * 2)
//console.log(doubleNumbers)

// Para cada elemento 

const personArray = [
    { nome: "Luan", idade: 62},
    { nome: "Ana julia", idade: 23},
    { nome: "Caio", idade: 55},
    { nome: "Arthur", idade: 19},
    { nome: "Lorena", idade: 32},
    { nome: "Luiza", idade: 47}
]

// a) Retorne apenas uma string com o nome da pessoa;
const nomes = personArray.map(obj => obj.nome).join(", ")
//console.log(nomes)

// b) Remova apenas a chave "nome do objeto"
const anonymous = personArray.map(obj =>{
//    delete(obj.nome); //para excluir os nomes
    return obj.idade
});
//console.log(anonymous)

// c) adicione id em cada objeto 

const personsId = personArray.map((obj, i) => {
    obj.id = i + 1; // +1 pra nao ter id = 0
    return obj;
})
// console.log(personsId)

//----------------------------------------------------------

// Reduce - Serve para reduzir arrays

const numberToReduce = [5, 50, 80, 1, 2, 3,
    5, 8, 7, 11, 15, 22, 27];

const sum = numberToReduce.reduce((acumulador, valor) => {
    acumulador += valor;
    return acumulador;
})

// Retorne a pessoa mais velha

const arrayToReduce = [
    { nome: "Luan", idade: 24},
    { nome: "Ana julia", idade: 23},
    { nome: "Caio", idade: 55},
    { nome: "Arthur", idade: 19},
    { nome: "Lorena", idade: 32},
    { nome: "Luiza", idade: 47}
];

const older = arrayToReduce.reduce((acumulator, value) => {
    if(acumulator.idade > value.idade) return acumulator; return value;
}) 
//console.log(older)


// Filter ++ Map ++ Reduce

// Retorne a soma do dobro dos numeros pares
const numberList = [5, 50, 80, 1, 2, 3,
    5, 8, 7, 11, 15, 22, 27];

const evenNum = numberList
    .filter(value => value % 2 === 0)
    .map(value => value * 2)
    .reduce((ac, value) => ac + value);
//console.log(evenNum)


///////////////////////////////////////////

// ForEach => itera sobre os valores, não retorna e nem altera nada

const tenNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
tenNum.forEach(value => {
    const d = value * 2;

    console.log(d);
});
