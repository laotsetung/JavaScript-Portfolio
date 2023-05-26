class Celula{
    constructor(qtdePecas, y, x){
        this.collapsed = false;
        this.qtdePecas = qtdePecas;
        this.entropia = qtdePecas;
        this.peca = 99;
        this.opcoes = [];
        this.y = y;
        this.x = x;

        for(let a = 0; a < qtdePecas; a++){
            this.opcoes[a] = a;
        }
    }

    retomaOpcoes(){
        for(let a = 0; a < this.total; a++){
            this.opcoes[a] = a;
        }
    }

    colapso(peca){
        this.collapsed = true;

        this.peca = peca;
        this.opcoes = [];
        this.entropia = 0;
    }

    getPos(){
        let p = [this.x,this.y];
        return p;
    }

    getPeca(){
        return this.peca;
    }

    analiza(celulas, pecas, dim){ 

        this.entropia = this.opcoes.length;

        //não estamos na primeira linha (verificar vizinho em cima)
        if(this.y > 0 ){  
            let celCima = celulas[this.y-1][this.x];    //celula de cima
            
            if(celCima.is_collapsed()){
                let pecaCima = pecas[celCima.getPeca()];

                this.conectaPara('CIMA', pecas, pecaCima);
            }
        }

        //se não estamos na borda direita (verificar vizinho na direita)
        if(this.x < dim -1){ 
            let celDir = celulas[this.y][this.x+1];

            if(celDir.is_collapsed()){
                let pecaDir = pecas[celDir.getPeca()];

                this.conectaPara('DIR', pecas, pecaDir);
            }
        }

        //se não estamos na borda de baixo (verificar vizinho em baixo)
        if(this.y < dim -1){ 
            let celBaixo = celulas[this.y+1][this.x];

            if(celBaixo.is_collapsed()){
                let pecaBaixo = pecas[celBaixo.getPeca()];
                this.conectaPara('BAIXO', pecas, pecaBaixo);
            }
        }

        //se não estamos na borda da esquerda (verificar vizinho a esquerda)
        if(this.x > 0){
            let celEsquerda = celulas[this.y][this.x-1];

            if(celEsquerda.is_collapsed()){
                let pecaEsq = pecas[celEsquerda.getPeca()];
                this.conectaPara('ESQ', pecas, pecaEsq);

            }
        }

    }

    conectaPara(direcao, pecas, pecaVizinha){
        let op = [];
        if (direcao == 'CIMA'){ //selecionar as peças que NÃO se conectam para cima, na determinada cor, para TIRA-LAS das opções.
            let cor = pecaVizinha.getConBaixo();
            for(let a = 0; a < pecas.length; a++){
                const peca = pecas[a];
                if (peca.getConCima()!=cor){
                    op.push(a);
                }
            }

            for(let a = 0; a < this.opcoes.length; a++){
                for(let b = 0; b < op.length; b++){
                    if(this.opcoes[a] == op[b]){
                        this.opcoes.splice(a,1);
                    }
                }
            }
            let t = this.opcoes;
            this.entropia = this.opcoes.length;
        }

        if (direcao == 'DIR'){
            let cor = pecaVizinha.getConEsq();
            for(let a = 0; a < pecas.length; a++){
                const peca = pecas[a];
                if (peca.getConDir() != cor){
                    op.push(a);
                }
            }

            for(let a = 0; a < this.opcoes.length; a++){
                for(let b = 0; b < op.length; b++){
                    if(this.opcoes[a] == op[b]){
                        this.opcoes.splice(a,1);
                    }
                }
            }
            let t = this.opcoes;
            this.entropia = this.opcoes.length;
        }
        if (direcao == 'BAIXO'){
            let cor = pecaVizinha.getConCima();
            for(let a = 0; a < pecas.length; a++){
                const peca = pecas[a];
                if (peca.getConBaixo()!=cor){
                    op.push(a);
                }
            }

            for(let a = 0; a < this.opcoes.length; a++){
                for(let b = 0; b < op.length; b++){
                    if(this.opcoes[a] == op[b]){
                        this.opcoes.splice(a,1);
                    }
                }
            }
            let t = this.opcoes;
            this.entropia = this.opcoes.length;
        }
        if (direcao == 'ESQ'){
            let cor = pecaVizinha.getConDir();
            for(let a = 0; a < pecas.length; a++){
                const peca = pecas[a];
                if(peca.getConEsq()!=cor){
                    op.push(a);
                }
            }

            for(let a = 0; a < this.opcoes.length; a++){
                for(let b = 0; b < op.length; b++){
                    let opA = this.opcoes[a];
                    let opB = op[b];
                    if(opA == opB){
                        this.opcoes.splice(a,1);
                    }
                }
            }
            let t = this.opcoes;
            this.entropia = this.opcoes.length;
        }
    }

    getEntropia(){
        this.entropia = this.opcoes.length;
        return this.entropia;
    }

    is_collapsed(){
        return this.collapsed;
    }
}