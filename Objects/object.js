// Revisando sobre objetos 


// factory and constructor functions

// factory function 
const criaPessoa = (nome, idade) => {
    return {
        nome,
        idade
    };
}

const p1 = criaPessoa("Luan", 21);


// constructor function
function Pessoa(name, age){
    this.name = name;
    this.age = age;
};

const p2 = new Pessoa("Luan, 21")
//////////////////////////////////////////

// defineProperty & defineProperties 

function Produtos(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperty(this, "estoque", {
        enumerable: true, // mostra a chave? (Object.keys || for In)
        value: estoque, // mostra o valor da chave?
        writable: false, // pode alterar?
        configurable: false // pode reconfigurar? (permite ou nao reconfigurar ou apagar propriedade)
    })

    Object.defineProperties(this, {
        nome:{
            enumerable: true, // mostra a chave? (Object.keys || for In)
            value: nome, // mostra o valor da chave?
            writable: true, // pode alterar?
            configurable: false // pode reconfigurar? (permite ou nao reconfigurar ou apagar propriedade)
        },

        preco:{
            enumerable: true, // mostra a chave? (Object.keys || for In)
            value: preco, // mostra o valor da chave?
            writable: false, // pode alterar?
            configurable: false // pode reconfigurar? (permite ou nao reconfigurar ou apagar propriedade)
        }
    })
}

const product = new Produto("t-shirt", 80, 200)
product.estoque = 2000;
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

function Produto(type, price, stock){
    this.type = type;
    this.price = price;
    
    let privateStock = stock;
    Object.defineProperty(this, "stock", {
        enumerable: true,
        configurable: true,
        get: () => {
            return privateStock;
        },
        set: (value) => {
            if(typeof value !== "number"){
                console.log("must be a number");
                return;
            };

            privateStock = value;
        }
    });

}

const product01 = new Produto("shirt", 200, 3);
product01.stock = 20;
//console.log(product01)

/////////////////////////////////////////

// Metodos uteis para Objects


// copiar objeto [...spread operator] => recomendado

const pessoa = {nome: "Luan", idade: 21};
const outraPessoa = {
    ...pessoa,
    altura: 1.69
}
outraPessoa.nome = "ana"
//console.log(pessoa, outraPessoa)


// copiar objeto [.assing]

const duble = Object.assign({}, pessoa, { altura: 1.73 })
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


//
