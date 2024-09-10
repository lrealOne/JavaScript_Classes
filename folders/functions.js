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
