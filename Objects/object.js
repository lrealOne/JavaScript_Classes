// Revisando sobre objetos 

const { Console } = require("console");


// factory and constructor functions

// factory function 
// const criaPessoa = (nome, idade) => {
//     return {
//         nome,
//         idade
//     };
// }

// const p1 = criaPessoa("Luan", 21);


// // constructor function
// function Pessoa(name, age){
//     this.name = name;
//     this.age = age;
// };

// const p2 = new Pessoa("Luan, 21")
// //////////////////////////////////////////

// // defineProperty & defineProperties 

// function Produtos(nome, preco, estoque){
//     this.nome = nome;
//     this.preco = preco;
//     this.estoque = estoque;

//     Object.defineProperty(this, "estoque", {
//         enumerable: true, // mostra a chave? (Object.keys || for In)
//         value: estoque, // mostra o valor da chave?
//         writable: false, // pode alterar?
//         configurable: false // pode reconfigurar? (permite ou nao reconfigurar ou apagar propriedade)
//     })

//     Object.defineProperties(this, {
//         nome:{
//             enumerable: true, // mostra a chave? (Object.keys || for In)
//             value: nome, // mostra o valor da chave?
//             writable: true, // pode alterar?
//             configurable: false // pode reconfigurar? (permite ou nao reconfigurar ou apagar propriedade)
//         },

//         preco:{
//             enumerable: true, // mostra a chave? (Object.keys || for In)
//             value: preco, // mostra o valor da chave?
//             writable: false, // pode alterar?
//             configurable: false // pode reconfigurar? (permite ou nao reconfigurar ou apagar propriedade)
//         }
//     })
// }

// const product = new Produto("t-shirt", 80, 200)
// product.estoque = 2000;
//console.log(product)

////////////////////////////////////////////

// Getters & Setters (.defineProperty)

/*
    set

    Usado para definir um valor. Ex:

    objeto{
        nome: "Luan",
        idade: 21,

        falaOi{
            console.log("`${this.nome}`: oi")
        }

        set setIdade(valor){
            this.idade = valor;
        }

    }

    então, fora do objeto podemos definir seu valor 

    objeto1.setIdade = 19; /// alterando o valor de idade para 19
*/

/*

    get 

    Usado para obter o valor de um atributo. Ex: 

    objeto {
        nome: "Luan",
        idade: 21,

        falaOi{
            console.log("`${this.nome}`: oi")
        }
    
        set setIdade(valor){
            this.idade = valor;
        }

        get getIdade(){
            return this.idade;
        }
    }

    objeto1.getIdade() // retorna a idade
*/    

// .defineProperty() & defineProperties()

// function Produtos(type, price, stock){
//     this.type = type;
//     this.price = price;
    
//     let privateStock = stock;
//     Object.defineProperty(this, "stock", {
//         enumerable: true,
//         configurable: true,
//         get: () => {
//             return privateStock;
//         },
//         set: (value) => {
//             if(typeof value !== "number"){
//                 console.log("must be a number");
//                 return;
//             };

//             privateStock = value;
//         }
//     });

// }

// const product01 = new Produtos("shirt", 200, 3);
// product01.stock = 20;
//console.log(product01)

/////////////////////////////////////////

// Metodos uteis para Objects


// copiar objeto [...spread operator] => recomendado

//const pessoa = {nome: "Luan", idade: 21};
//const outraPessoa = {
//    ...pessoa,
///    altura: 1.69
//}
//outraPessoa.nome = "ana"
//console.log(pessoa, outraPessoa)


// copiar objeto [.assing]

//const duble = Object.assign({}, pessoa, { //altura: 1.73 })
//console.log(duble)


// Object.keys => retorna as chaves do objeto
//console.log(Object.keys(pessoa))


// Object.values() => retorna os valores das chaves do objeto
// Object.values(pessoa);

// Object.entries() => retorna as chaves + valores do objeto
//console.log(Object.entries(pessoa))


// Object.freeze => Congela o objeto, proibindo alterações 
//Object.freeze(Obj)


// Object.defineProperty (define propriedade) - singular
/*
Object.defineProperty(this, "prop", {
        enumerable: ...,
        configurable: ...,
        ...
*/

//Object.defineProperties (define propriedade) - plural
/*
Object.defineProperties(this, prop, {
prop1:{
    enumerable: ...,
    configurable: ...,
    ...
},
prop2:{
    enumerable: ...,
    configurable: ...,
    ...
}
})
*/


// Object.getOwnPropertyDescriptor(obj, "prop") => mostra as Properties do obj (defineProperty & defineProperties)
//console.log(Object.getOwnPropertyDescriptor(pessoa, "nome"))


/////////////////////////////////////////////////

// Prototypes
//
// ***função construtora
// function Pessoa(nome, id){
//    this.nome = nome;
//    this.id = id;
//}
// ***instancia 
//const Pessoa1 = new Pessoa("Luan", 3298){}

/*
 O js é baseado em prototipos para passar props e metodos de um object para outro.

 Prototipo = é o termo usado para se referir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras produções.

 Todos os objetos tem uma referencia interna para um prototipo (__proto__) que vem da prop prototype da função construtora que foi usada para criá-lo. Quando acessamos um membro de um Object, primeiro o JS vai tentar encontrar esse membro no proprio object e depois a cadeia de prototipos é usada até o topo (null) ate encontrar (ou não) tal membro.

 Ex: para melhorar um codigo ao inves de criar um objeto construtor e criarmos metodos dentro dele, colocamos como prototype.
*/

/*
function Pessoa (name, lastName){
    this.name = name;
    this.lastName = lastName;
}

Pessoa.prototype.fullName = () => this.name + " " + this.lastName;

*/

////////////

// Prototypes / Herança

// herança:
function Product(name, price) {
    this.name = name;
    this.price = price;
}
Product.prototype.economy = function(value){ 
    this.price -= value;
}; 

Product.prototype.enhance = function(value){ 
    this.price += value;
}; 

// function Shirt(name, price, color){
//     Product.call(this, name, price)
//     this.color = color; 
// }

// Shirt.prototype = Object.create(Product.prototype)
// Shirt.prototype.constructor = Shirt; // para o construtor do produto voltar a ser tShirt (ao inves de product);

// const tShirt = new Shirt("Regata", 23, "White");
// // console.log(tShirt)
// tShirt.enhance(20)
// //console.log(tShirt)

function Caneca (name, price, type, size, material, stock){
    Product.call(this, name, price );
    this.type = type;
    this.size = size;
    this.material = material;
    Object.defineProperty(this, stock, {
        get: function(){
            return stock;
        },
        set: function(value){
            if(typeof value !== "number") return;

            return stock = value;
        }
    })
}

const stanleyCup = new Caneca("MyCup", 100, "Cup", "big", "glass", 30);

Caneca.prototype = Object.create(Product.prototype)
Caneca.prototype.constructor = Caneca;
console.log(stanleyCup)

// O termo "Herança" é muito usado para descrever que as características de um objeto são passadas para outro objeto. Assim como uma filha ou filho pode herdar características da sua mãe ou pai (geneticamente). Por isso estamos usando esse termo para descrever o comportamento desejado. Além disso, a maioria das literaturas, incluindo as documentações (como MDN) citam a palavra herança. //

//////////////////////////////////////

