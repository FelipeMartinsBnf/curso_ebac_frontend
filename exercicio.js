function Produto(nome, valor){
    this.nome = nome;
    
    let _valor = valor;

    this.getValor = function(){
        return _valor;
    }
    this.setValor = function(newValor){
        if(typeof newValor === 'number'){
            return _valor = newValor;
        }
    }
}

function Eletronico(nome, valor){
    Produto.call(this, nome, valor);

    this.parcelas = function(){
        const valorParcela = this.getValor() / 12; //Produtos eletrônicos são dividos em 12x
        return `O valor de cada parcela é de: ${valorParcela} em 12x`;
    }
}

function moveis(nome, valor){
    Produto.call(this, nome, valor);

    this.parcelas = function(){
        const valorParcela = this.getValor() / 5; //Móveis são dividos em 5x
        return `O valor de cada parcela é de: ${valorParcela} em 5x`;
    }
}


const Celular = new Eletronico('Celular', 3000);
console.log(Celular.nome + " - R$:" + Celular.getValor(), Celular.parcelas());

const Armario = new moveis('Armário', 600);
console.log(Armario.nome + " - R$:" + Armario.getValor(), Armario.parcelas());

const Computador = new Eletronico('Mac', 18000);
console.log(Computador.nome + " - R$:" + Computador.getValor(), Computador.parcelas());
