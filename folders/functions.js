// return 

//função retornando parametro de um objeto 

let criaPessoa = (name, age) => {
    return {name, age}
}

let newp = criaPessoa ("Luan", 20)
console.log(newp)

/////////////////////////////////////////////////////////

// closure part 01 (basic)

const multiplica = (multiplicador) => {
     return function(s) {
        return s * multiplicador
    } 
}

let soma = multiplica(2)
console.log(soma(3)) //deve retornar 6

/////////////////////////////////////////////////////////

// callback function

function welcome(name) {
    alert("Hello, " + name + "!!");
  }
  
  function userInput(callback) {
    var name = prompt("Por favor insira seu nome.");
    callback(name);
  }
  
  userInput(welcome);
  
/////////////////////////////////////////////

// Immediately invoked function expression (IIFE)

var resultado = (function () {
    var nome = "Luan";
    return nome;
  })();
  // Imediatamente gera a saída:
resultado;

/////////////////////////////////////////////

// Factory Functions 

// const makePerson = (age, name, height, weight) => {
//     return {
//         name, 
//         age,
//         talk(tAbout){
//             return `${this.name} está ${tAbout}`
//         },
//         height,
//         weight,
//         imc() {
//             const index = this.weight / (this.height ** 2)
//             return index.toFixed(2)
//         }
//     }
// }

// let personOne = makePerson(20, "Julia", 1.69, 70.0 )
  
// console.log(personOne.imc())

// utilizando getter e setter

const personName = (name, secondName) => {
    return {
        name,
        secondName,

        get fullName(){
            return `${name} ${secondName}`
        },

        set fullName(values){
            values = values.split(" ");
            this.name = values.shift();
            this.secondName = values.join(" ");
        }
    }
}

const me = personName("Luan", "Carvalho")
me.fullName = "Ana Julia Alves"
/////////////////////////////////////////

// funções construtoras 

// similar a factory function, porem necessita de algumas alterações

const Pessoa = (nome, sobrenome) => {
    // Private
    const id = 123;
    const metodoInterno = () => {

    };

    // Atributos ou metodos publicos
    this.nome = nome;
    this.sobrenome = sobrenome;


    this.metodo = () => {
        console.log(this.nome + ": sou um metodo");
    };
};

const p1 = new Pessoa("Luan", "Carvalho");
const p2 = new Pessoa("Ana Julia", "Alves de Novais");

//////////////////////////////////////////////////////

// função recursiva

// função que se chama de volta ate atingir certo parametro estabelecido

const recursiva = (max) => {
    console.log(max);
    if (max <= 1) return;
    max--;
    recursiva(max);
}

recursiva(12)

//////////////////////////////////////////////////


// função geradora

function* contador(){
    //Codigo qualquer...
    yield "Valor 1";

    //Codigo qualquer...
    yield "Valor 2";

    //Codigo qualquer...
    yield "Valor 3"
};

contador().next(); // valor 1
contador().next(); // valor 2
contador().next(); // valor 3

