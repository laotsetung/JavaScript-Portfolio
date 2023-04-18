let grid; //matrix principal, uma Array 2D
let cols; //quantidade de colunas que é igual ao tamanho da tela 600 / resolução
let rows; //quantidade de linhas que é igual ao tamanho da tela 600 / resolução
let resolution = 10; //tamanho dos quadrados! se menores, maior a quantidade!
let cor = []; //array das cores
let corF = []; //array flag das cores

let desenha = true; //boolean para pausar a animção!

function setup() {
  createCanvas(600, 600);
  cols = width / resolution; //calcula qtde de colunas!
  rows = height / resolution; //calcula qtde de linhas!

  criaCores(); //inicia as variaveis de cor

  grid = make2dArray(cols, rows); //cria aleatoriamente a primeira geração do jogo
  for (let i = 0; i < cols; i++){
    for (let j = 0; j < rows; j++){
      grid[i][j] = floor(random(2));
    }
  }
}

function draw() {
  if(desenha){ //jogo pausado ou não!
    background(0);
    calculaCor();

    for (let i = 0; i < cols; i++){ //Desenha a GRID na tela
      for (let j = 0; j < rows; j++){
        let x = i * resolution;
        let y = j * resolution;
        if (grid[i][j] == 1){
          fill(cor[0],cor[1],cor[2]);
        }else{
          fill(0);
        }
          rect(x, y, resolution,resolution);
      }
    }

    //Calcula a proxima geração
    let next = make2dArray(cols, rows); //cria a proxima geração aleatoria, porém vai ser calculado cada valor novo!
    for (let i = 0; i < cols; i++){
      for (let j = 0; j < rows; j++){
        let sum = 0;
        let state = grid[i][j];

        sum = countVizinhos(grid, i, j); //soma a quantidade de vizinhos 'vivos'(quadrado colorido) e 'mortos'(quadrado preto)

        //REGRAS DO GAME OF LIFE: https://pt.wikipedia.org/wiki/Jogo_da_vida
        if(state == 0){ //celula morta
          if(sum == 3){ 
            next[i][j] = 1;
          }else{
            next[i][j] = 0;
          }
        }else{ //celula viva
          if(sum < 2 || sum > 3){
            next[i][j] = 0;
          }else if(sum == 2 || sum == 3){
            next[i][j] = 1;
          }
        }
      }
    }
    grid = next;
  }
}

function make2dArray(cols, rows){ //Inicia a variavel GRID e a variavel NEXT
  let arr = new Array(cols);
  for (let i = 0; i <arr.length; i++){
    arr[i] = new Array(rows);
    
  }
  return arr;
}

function countVizinhos(grid, x, y){ //Conta quantos vizinhos vivos cada quadrado tem
  let sum = 0;
  /*elegante forma de contar os vizinhos! calculando as bordas com o outro lado da matrix!
  pega x e y do quadrado atual nas 8 posições vizinhas
    [-1,-1],[-1,0],[-1,1]
    [0,-1],[0,0],[0,1]
    [1,-1],[1,0],[1,1]
  */

  for (let i = -1; i < 2; i++){
    for (let j = -1; j < 2; j++){
      
      /* Imaginemos uma matrix de 10 por 10
      quando nas bordas, por exemplo no quadrado x=0,y=0 ; os vizinhos vão ser -1 e isso vai dar erro pois o elemento não existe na matrix
      porém, somando esse resultado: -1 com o numero de colunas (-1 + 10) = 9, modulado por 10 = 9
      quando na posição x=9,y=9 e com o vizinho +1, vai dar erro pois não existe o elemento 10
      porém... (10 + 10) MOD 10 = 0 !!!!! (vai pegar o 'vizinho' do outro lado da matrix)
      como num jogo da cobrinha sem bordas, ou no jogo de Asteroids, quando vamos ao limite da tela, 'saimos' do outro lado!!!
      */
      let col = (x + i + cols) % cols; 
      let row = (y + j + rows) % rows;

      sum += grid[col][row];   
    }
  }
  sum -= grid[x][y]; //retira da soma o próprio quadrado, ou seja, a posição [0,0]
  return sum;
}

function mouseClicked(){ //Pause on click
  if(desenha){desenha=false}else{desenha=true}
}

function criaCores(){ //Inicia as variaveis de cor com valores random entre 0 e 255 para RED, GREEN e BLUE;
  cor[0] = floor(random(0,255));
  cor[1] = floor(random(0,255));
  cor[2] = floor(random(0,255));

  //inicia a Array de FLAG que determina se o tom vai ser acrescentado ou diminuido
  if(random(0,1)>0.5){
    corF[0] = true;
  }else{
    corF[0] = false;
  }
  if(random(0,1)>0.5){
    corF[1] = true;
  }else{
    corF[1] = false;
  }
  if(random(0,1)>0.5){
    corF[2] = true;
  }else{
    corF[2] = false;
  }
}

function calculaCor(){ //Calcula nova cor
  //cor é uma Array de 3 valores para RED, GREEN E BLUE;
  //elas ACRESCENTAM e DIMINUEM entre 0 e 255;
  //usando para isso um FLAG q determina se esta crescente ou decrescente, também uma Array: corF

  //ARRAY FLAGS
  if(cor[0] >= 254){
    corF[0] = false;
  }else if(cor[0] <= 1){
    corF[0] = true;
  }
  if(cor[1] >= 254){
    corF[1] = false;
  }else if(cor[1] <= 1){
    corF[1] = true;
  }
  if(cor[2] >= 254){
    corF[2] = false;
  }else if(cor[2] <= 1){
    corF[2] = true;
  }
  
  //ARRAY COR
  if(corF[0]){
    cor[0] += 0.6;
  }else{
    cor[0] -= 0.6;
  }

  if(corF[1]){
    cor[1] += 0.5;
  }else{
    cor[1] -= 0.5;
  }

  if(corF[2]){
    cor[2] += 0.4;
  }else{
    cor[2] -= 0.4;
  }
  
}