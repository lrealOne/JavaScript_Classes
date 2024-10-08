//validar cpf 
//Constructor
function ValidaCPF (cpfEnviado){
    Object.defineProperty(this, "cpfLimpo", {
        get: function(){
            return cpfEnviado.replace(/\D+/g, "")
        }
    })
}


//Metodos
// Validação
ValidaCPF.prototype.valida = function(){
    if(typeof this.cpfLimpo === "undefined") return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.isSequence()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2)
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);
    
    const novoCpf = cpfParcial + digito1 + digito2;
    return novoCpf === this.cpfLimpo;
}

// metodos para criar digitos
ValidaCPF.prototype.criaDigito = function(cpfParcial){
    const cpfArray = Array.from(cpfParcial);
    
    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val)=>{
        ac += (regressivo * Number(val))
        regressivo--;
        return ac
    }, 0)

    let digito = 11 - (total % 11)
    return digito > 9 ? "0" : String(digito);
}

//metodo para testar cpf fraudulento
ValidaCPF.prototype.isSequence = function(){
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
    
}

//Operação
const cpf = new ValidaCPF("49100821829")
console.log(cpf.valida())