let canSize = 500;
let dim = 7;
let matrix = [];
let resposta = [];
let m = [];
let rectSize = canSize/dim;
let listaResposta = [];

function loadSize(){
  if(window.location.search){

    let queryString = window.location.search;
    if(queryString == "" || queryString == undefined){
      dim=10;
    }else{
      if(queryString.indexOf('size')>-1){
        qSet = queryString.split('=');
        if(qSet[1] != NaN){
          dim=qSet[1];
        }
      }
    }
  }else{
    dim = 10;
  }
  rectSize = canSize/dim;
}

function criaMatrix(){
  for(y=0;y<dim;y++){
    m=[];
    for(x=0;x<dim;x++)  {
      let valor = 0;
      if(random(1)>0.55){
        valor = 1;
      }
      
      m.push(valor);
    }
    matrix.push(m);
  }
}

function iniciaResposta(){
  for(y=0;y<dim;y++){
    m=[];
    for(x=0;x<dim;x++)  {
      m.push(0);
    }
    resposta.push(m);
  }
}

function desenhaMatrix(){
  for(y=0;y<dim;y++){
    for(x=0;x<dim;x++)  {
      let valor = matrix[y][x];
      if(valor==1){
        fill(0);
      }else{
        fill(255);
      }
      rect(x*rectSize, y*rectSize, rectSize, rectSize);
    }
  }
}

function desenhaResposta(){
  for(y=0;y<dim;y++){
    for(x=0;x<dim;x++){
      let valor = resposta[y][x];
      listaResposta
      if(valor==1){
        fill(0);
      }else{
        fill(255);

      }
      rect(x*rectSize, y*rectSize, rectSize, rectSize);
      if(matrix[y][x]==1 && valor == 0){
        fill(255,180,180);
        stroke(255,150,150);
        textSize(rectSize/2);
        text("x", (x*rectSize)+(rectSize/3), (y*rectSize)+(rectSize/1.7));
        stroke(0);
      }
    }
  }
}


function preload(){
  loadSize();
}

function setup() {
  let tela = createCanvas(canSize*2+50, canSize+50);
  tela.parent('p5Canvas');  
    
  criaMatrix();
  
  iniciaResposta();
  resolve();

}

function draw() {
  background(29, 99, 73);
  stroke(0);
  translate(0,50);
  desenhaMatrix();
  fill(0);
  stroke(0);
  text("Original", 33, -15);

  translate(canSize+50, 0);
  desenhaResposta();
  fill(0);
  stroke(0);
  text("Resposta", 33, -15);

}

function resolve(){
  
  //Verifica todas as conexões com a borda
  for(y=0;y<dim;y++){
    for(x=0;x<dim;x++){
      let z = y+";"+x;
      if (e_borda(y,x) && matrix[y][x] == 1){
        resposta[y][x]=1;
        reconhecimento(y,x);
      }
    }
  }
  for (a = 0; a< listaResposta.length;a++){
    let listaY = listaResposta[a][0];
    let listaX = listaResposta[a][1];
    buscaVizinhos(listaY,listaX);
  }
  for (a = 0; a< listaResposta.length;a++){
    let r = listaResposta[a];
    resposta[r[0]][r[1]] = 1;
  }
}

function buscaVizinhos(y,x){
 let yOff = [-1,1,0,0];
 let xOff = [0,0,-1,1];
 for (j = 0; j < 4; j++){
  let newY = y+yOff[j];
  let newX = x+xOff[j];
  if(newY!=dim && newX!=dim && newY!=-1 && newX!=-1){
    let item = [newY,newX];
    if(matrix[newY][newX]==1){
      if(!verificaItem(item)){
        listaResposta.push(item);
      }
    }
  }
 }
}

function reconhecimento(y,x){
  if(y == 0 && x!=0 && x!=dim-1){ //se borda superior
    let vizBaixo = matrix[y+1][x];
    if (vizBaixo == 1){
      let r = [y+1,x];
      if(!verificaItem(r)){
        listaResposta.push(r);
      }
    }
  }
  if(x == 0 && y!=0 && y!=dim-1){ //se borda esquerda
    let vizDir = matrix[y][x+1];
    if (vizDir == 1){
      let r = [y,x+1];
      if(!verificaItem(r)){
        listaResposta.push(r);
      }
    }
  }
  if(y == dim-1 && x!=0 && x!=dim-1){ //se borda inferior
    let vizCima = matrix[y-1][x];
    if (vizCima == 1){
      let r = [y-1,x];
      if(!verificaItem(r)){
        listaResposta.push(r);
      }
    }
  }
  if(x == dim-1 && y!=0 && y!=dim-1){ //se borda direita
    let vizEsq = matrix[y][x-1];
    if (vizEsq == 1){
      let r = [y,x-1];
      if(!verificaItem(r)){
        listaResposta.push(r);
      }
    }
  }
}

function verificaItem(i){
  for (let a = 0; a< listaResposta.length;a++){
    let r = listaResposta[a];
    if(r[0] == i[0] && r[1] == i[1]){
      return true;
    }
  }
  return false;
}

function e_borda(y,x){
  if(y == 0 || y == dim-1 || x == 0 || x == dim-1){
    return true;
  }
  return false;

}