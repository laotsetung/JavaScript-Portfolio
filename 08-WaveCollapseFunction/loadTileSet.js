//Load tileSet
//Cada TileSet tem 2 funções
//Uma que carrega as imagens, e outra que inicia a variavel pecas[]
//isto é necessário pois cada tile set necessita das informações da borda

function loadPecas01(){
    const caminho = 'set01';
    for(let a = 0 ; a < 12; a++){
        pecasImgs[a] = loadImage(`${caminho}/${a}.jpg`);
    } 
}
function criaPecasSet01(){
    pecas[0] = new Peca(pecasImgs[0], [0,0,0,0]);
    pecas[1] = new Peca(pecasImgs[1], [1,1,1,1]);
    pecas[2] = new Peca(pecasImgs[2], [1,1,0,1]);
    pecas[3] = new Peca(pecasImgs[3], [1,1,1,0]);
    pecas[4] = new Peca(pecasImgs[4], [0,1,1,1]);
    pecas[5] = new Peca(pecasImgs[5], [1,0,1,1]);
    pecas[6] = new Peca(pecasImgs[6], [1,0,0,1]);
    pecas[7] = new Peca(pecasImgs[7], [1,1,0,0]);
    pecas[8] = new Peca(pecasImgs[8], [0,1,1,0]);
    pecas[9] = new Peca(pecasImgs[9], [0,0,1,1]);
    pecas[10] = new Peca(pecasImgs[10], [1,0,1,0]);
    pecas[11] = new Peca(pecasImgs[11], [0,1,0,1])
}

// dois
function loadPecas02(){
    const caminho = 'set02';
    for(let a = 0 ; a < 74; a++){
        pecasImgs[a] = loadImage(`${caminho}/${a}.png`);
    } 
}
function criaPecasSet02(){
    // A = LARANJA / B = ROXO / C = VERDE / D = CINZA
    
    pecas[0] = new Peca(pecasImgs[0], ['AAA','AAA','AAA','AAA']);
    pecas[1] = new Peca(pecasImgs[1], ['BBB','BBB','BBB','BBB']);
    pecas[2] = new Peca(pecasImgs[2], ['AAA','BBB','BBB','AAA']);
    pecas[3] = new Peca(pecasImgs[3], ['ACA','ACA','AAA','AAA']);
    pecas[4] = new Peca(pecasImgs[4], ['ADA','ADA','AAA','AAA']);
    pecas[5] = new Peca(pecasImgs[5], ['ACA','ACA','AAA','ACA']);
    pecas[6] = new Peca(pecasImgs[6], ['ADA','ADA','AAA','ADA']);
    pecas[7] = new Peca(pecasImgs[7], ['ACA','AAA','ACA','AAA']);
    pecas[8] = new Peca(pecasImgs[8], ['ADA','AAA','ADA','AAA']);
    pecas[9] = new Peca(pecasImgs[9], ['ACA','ACA','ACA','ACA']);
    
    pecas[10] = new Peca(pecasImgs[10], ['ADA','ADA','ADA','ADA']);
    pecas[11] = new Peca(pecasImgs[11], ['ACA','ADA','ACA','ADA']);
    pecas[12] = new Peca(pecasImgs[12], ['ADA','ACA','ADA','ACA']);
    pecas[13] = new Peca(pecasImgs[13], ['BCB','BCB','BBB','BBB']);
    pecas[14] = new Peca(pecasImgs[14], ['BDB','BDB','BBB','BBB']);
    pecas[15] = new Peca(pecasImgs[15], ['BCB','BCB','BBB','BCB']);
    pecas[16] = new Peca(pecasImgs[16], ['BDB','BDB','BBB','BDB']);
    pecas[17] = new Peca(pecasImgs[17], ['BCB','BBB','BCB','BBB']);
    pecas[18] = new Peca(pecasImgs[18], ['BDB','BBB','BDB','BBB']);
    pecas[19] = new Peca(pecasImgs[19], ['BCB','BCB','BCB','BCB']);
    
    pecas[20] = new Peca(pecasImgs[20], ['BDB','BDB','BDB','BDB']);
    pecas[21] = new Peca(pecasImgs[21], ['BCB','BDB','BCB','BDB']);
    pecas[22] = new Peca(pecasImgs[22], ['BDB','BCB','BDB','BCB']);
    pecas[23] = new Peca(pecasImgs[23], ['ACA','BCB','BBB','AAA']);
    pecas[24] = new Peca(pecasImgs[24], ['ADA','BDB','BBB','AAA']);
    pecas[25] = new Peca(pecasImgs[25], ['ACA','BCB','BBB','ACA']);
    pecas[26] = new Peca(pecasImgs[26], ['ADA','BDB','BBB','ADA']);
    pecas[27] = new Peca(pecasImgs[27], ['ACA','BBB','BCB','AAA']);
    pecas[28] = new Peca(pecasImgs[28], ['ADA','BBB','BDB','AAA']);
    pecas[29] = new Peca(pecasImgs[29], ['ACA','BCB','BCB','ACA']);
    
    pecas[30] = new Peca(pecasImgs[30], ['ADA','BDB','BDB','ADA']);
    pecas[31] = new Peca(pecasImgs[31], ['ACA','BDB','BCB','ADA']);
    pecas[32] = new Peca(pecasImgs[32], ['ADA','BCB','BDB','ACA']);
    pecas[33] = new Peca(pecasImgs[33], ['ADA','ACA','AAA','AAA']);
    pecas[34] = new Peca(pecasImgs[34], ['BDB','BCB','BBB','BBB']);
    pecas[35] = new Peca(pecasImgs[35], ['ADA','BCB','BBB','AAA']);
    pecas[36] = new Peca(pecasImgs[36], ['ACA','ADA','AAA','AAA']);
    pecas[37] = new Peca(pecasImgs[37], ['BCB','BDB','BBB','BBB']);
    pecas[38] = new Peca(pecasImgs[38], ['ACA','BDB','BBB','AAA']);
    pecas[39] = new Peca(pecasImgs[39], ['ABA','AAA','ADA','AAA']);
    
    pecas[40] = new Peca(pecasImgs[40], ['BCB','BBB','BDB','BBB']);
    pecas[41] = new Peca(pecasImgs[41], ['ACA','BBB','BDB','AAA']);
    pecas[42] = new Peca(pecasImgs[42], ['ACA','ADA','AAA','ADA']);
    pecas[43] = new Peca(pecasImgs[43], ['BCB','BDB','BBB','BDB']);
    pecas[44] = new Peca(pecasImgs[44], ['ACA','BDB','BBB','ADA']);
    pecas[45] = new Peca(pecasImgs[45], ['ADA','ACA','AAA','ACA']);
    pecas[46] = new Peca(pecasImgs[46], ['BDB','BCB','BBB','BCB']);
    pecas[47] = new Peca(pecasImgs[47], ['ADA','BCB','BBB','ACA']);
    pecas[48] = new Peca(pecasImgs[48], ['ACA','AAA','AAA','AAA']);
    pecas[49] = new Peca(pecasImgs[49], ['BCB','BBB','BBB','BBB']);

    pecas[50] = new Peca(pecasImgs[50], ['ACA','BBB','BBB','AAA']);
    pecas[51] = new Peca(pecasImgs[51], ['ADA','AAA','AAA','AAA']);
    pecas[52] = new Peca(pecasImgs[52], ['BDB','BBB','BBB','BBB']);
    pecas[53] = new Peca(pecasImgs[53], ['ADA','BBB','BBB','AAA']);
    pecas[54] = new Peca(pecasImgs[54], ['ACA','AAA','AAA','ADA']);
    pecas[55] = new Peca(pecasImgs[55], ['BCB','BBB','BBB','BDB']);
    pecas[56] = new Peca(pecasImgs[56], ['ACA','BBB','BBB','ADA']);
    pecas[57] = new Peca(pecasImgs[57], ['ACA','ADA','AAA','ACA']);
    pecas[58] = new Peca(pecasImgs[58], ['BCB','BDB','BBB','BCB']);
    pecas[59] = new Peca(pecasImgs[59], ['ACA','BDB','BBB','ACA']);

    pecas[60] = new Peca(pecasImgs[60], ['ACA','ACA','AAA','ADA']);
    pecas[61] = new Peca(pecasImgs[61], ['BCB','BCB','BBB','BDB']);
    pecas[62] = new Peca(pecasImgs[62], ['ACA','BCB','BBB','ADA']);
    pecas[63] = new Peca(pecasImgs[63], ['BDB','ADA','AAA','BBB']);
    pecas[64] = new Peca(pecasImgs[64], ['BCB','ACA','AAA','BBB']);
    pecas[65] = new Peca(pecasImgs[65], ['BCB','AAA','ACA','BBB']);
    pecas[66] = new Peca(pecasImgs[66], ['BDB','AAA','ADA','BBB']);
    pecas[67] = new Peca(pecasImgs[67], ['BDB','ACA','ADA','BCB']);
    pecas[68] = new Peca(pecasImgs[68], ['BCB','ADA','ACA','BDB']);
    pecas[69] = new Peca(pecasImgs[69], ['BCB','ADA','AAA','BBB']);
    
    pecas[70] = new Peca(pecasImgs[70], ['BCB','AAA','ADA','BBB']);
    pecas[71] = new Peca(pecasImgs[71], ['BDB','AAA','ACA','BBB']);
    pecas[72] = new Peca(pecasImgs[72], ['BDB','ACA','AAA','BCB']);
    pecas[73] = new Peca(pecasImgs[73], ['BCB','ADA','AAA','BDB']);
    // A = LARANJA / B = ROXO / C = VERDE / D = CINZA

    index = 74;
    //index = 12;
    for(let a = 2; a < 74; a++){
        for (let b = 1; b<4; b++){

        pecas[index] = pecas[a].rotatePeca(b);
        index++;
        }
    }
}

//tres
function loadPecas03(){
    const caminho = 'set03';
    for(let a = 0 ; a < 8; a++){
        pecasImgs[a] = loadImage(`${caminho}/${a}.png`);
    } 
}
function criaPecasSet03(){
//  A = PRETO - B BRANCO
    pecas[0] = new Peca(pecasImgs[0], ['AAA','AAA','AAA','AAA']);
    pecas[1] = new Peca(pecasImgs[1], ['BBB','BBB','BBB','BBB']);
    pecas[2] = new Peca(pecasImgs[2], ['AAA','BBB','BBB','BBB']);
    pecas[3] = new Peca(pecasImgs[3], ['BBB','AAA','AAA','AAA']);
    pecas[4] = new Peca(pecasImgs[4], ['AAA','BBB','AAA','BBB']);
    pecas[5] = new Peca(pecasImgs[5], ['BBB','AAA','BBB','AAA']);
    pecas[6] = new Peca(pecasImgs[6], ['AAA','AAA','BBB','BBB']);
    pecas[7] = new Peca(pecasImgs[7], ['BBB','BBB','AAA','AAA']);

    index = 8;
    for(let a = 2; a < 11; a++){
        for (let b = 1; b<4; b++){

        pecas[index] = pecas[a].rotatePeca(b);
        index++;
        }
    }
}
  
// quatro
function loadPecas04(){
    const caminho = 'set04';
    for(let a = 0 ; a < 24; a++){
        pecasImgs[a] = loadImage(`${caminho}/${a}.png`);
    } 
}
function criaPecasSet04(){
    // A-vermelho ; B-VERDE ; C-Roxo
    pecas[0] = new Peca(pecasImgs[0], ['AAA','AAA','AAA','AAA']);
    pecas[1] = new Peca(pecasImgs[1], ['BBB','BBB','BBB','BBB']);
    pecas[2] = new Peca(pecasImgs[2], ['BCB','BCB','BBB','BBB']);
    pecas[3] = new Peca(pecasImgs[3], ['ACA','ACA','AAA','AAA']);
    pecas[4] = new Peca(pecasImgs[4], ['ACA','BCB','BBB','AAA']);
    pecas[5] = new Peca(pecasImgs[5], ['BCB','BCB','BBB','BCB']);
    pecas[6] = new Peca(pecasImgs[6], ['ACA','ACA','AAA','ACA']);
    pecas[7] = new Peca(pecasImgs[7], ['ACA','BCB','BBB','ACA']);

    pecas[8] = new Peca(pecasImgs[8], ['BCB','BCB','BCB','BCB']);
    pecas[9] = new Peca(pecasImgs[9], ['ACA','ACA','ACA','ACA']);
    pecas[10] = new Peca(pecasImgs[10], ['ACA','BCB','BCB','ACA']);

    pecas[11] = new Peca(pecasImgs[11], ['BCB','BBB','BCB','BBB']);
    pecas[12] = new Peca(pecasImgs[12], ['ACA','AAA','ACA','AAA']);
    pecas[13] = new Peca(pecasImgs[13], ['ACA','BBB','BCB','AAA']);

    pecas[14] = new Peca(pecasImgs[14], ['AAA','BBB','BBB','AAA']);
    //novas
    pecas[15] = new Peca(pecasImgs[15], ['ACA','BBB','BBB','AAA']);
    pecas[16] = new Peca(pecasImgs[16], ['BCB','AAA','AAA','BBB']);
    pecas[17] = new Peca(pecasImgs[17], ['BCB','ACA','AAA','BBB']);
    pecas[18] = new Peca(pecasImgs[18], ['BCB','AAA','ACA','BBB']);
    pecas[19] = new Peca(pecasImgs[19], ['BBB','AAA','AAA','BBB']);
    pecas[20] = new Peca(pecasImgs[20], ['BCB','BCB','AAA','AAA']);
    pecas[21] = new Peca(pecasImgs[21], ['BCB','BBB','AAA','AAA']);

    pecas[22] = new Peca(pecasImgs[22], ['ACA','AAA','BBB','BBB']);
    pecas[23] = new Peca(pecasImgs[23], ['ACA','ACA','BBB','BBB']);

    index = 24;
    rodar4 = [2,3,4,5,6,7,13,14,15,16,17,18,19,20,21,22,23];
    //rodar2 = [11,12,13,14];

    for (let x = 0; x < rodar4.length; x++){
        let p = pecas[rodar4[x]];

        for (let b = 1; b<4; b++){
            pecas[index] = p.rotatePeca(b);
            let p1 = p.pontes;
            let p2 = pecas[index].pontes;
            index++;
        }
    }

    //11
    pecas[index] = pecas[11].rotatePeca(1);
    index++;
    //12
    pecas[index] = pecas[12].rotatePeca(1);
    index++;

}

// cinco
function loadPecas05(){
    const caminho = 'set05';
    for(let a = 0 ; a < 8; a++){
        pecasImgs[a] = loadImage(`${caminho}/${a}.png`);
    } 
}
function criaPecasSet05(){
    // a = verde ; b = laranja
    pecas[0] = new Peca(pecasImgs[0], ['a','a','a','a']);
    pecas[1] = new Peca(pecasImgs[1], ['b','b','b','b']);
    pecas[2] = new Peca(pecasImgs[2], ['b','b','a','a']);
    pecas[3] = new Peca(pecasImgs[3], ['a','a','b','b']);
    pecas[4] = new Peca(pecasImgs[4], ['a','b','a','b']);
    pecas[5] = new Peca(pecasImgs[5], ['b','a','b','a']);
    pecas[6] = new Peca(pecasImgs[6], ['b','a','a','a']);
    pecas[7] = new Peca(pecasImgs[7], ['a','b','b','b']);

    index = 8;
    for(let a = 2; a < 8; a++){
        for (let b = 1; b<4; b++){

        pecas[index] = pecas[a].rotatePeca(b);
        index++;
        }
    }
}

