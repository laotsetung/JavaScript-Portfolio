class Peca{
    constructor(img, pontes){
        this.img = img;
        this.pontes = pontes;
    }

    rotatePeca(num){
        const w = this.img.width;
        const h = this.img.height;
        let newImg = createGraphics(w,h);
        newImg.imageMode(CENTER);
        newImg.translate(w/2,h/2);
        newImg.rotate(HALF_PI * num);
        newImg.image(this.img, 0,0);

        let newEdges = [];
        const len = this.pontes.length;
        for (let i = 0; i < len; i++){
            newEdges.push(this.pontes[(i - num + len) % len]);
        }
        return new Peca(newImg, newEdges);
    }

    getImg(){
        return this.img;
    }

    getPontes(){ // [cima,direita,baixo,esquerda]
        return this.pontes;
    }

    getConCima(){
        return this.pontes[0];
    }

    getConDir(){
        return this.pontes[1];
    }

    getConBaixo(){
        return this.pontes[2];
    }

    getConEsq(){
        return this.pontes[3];
    }

}