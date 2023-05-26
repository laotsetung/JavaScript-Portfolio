const screenSize = 600;
const largura = screenSize;
const altura = screenSize;
let dim = 5;
let size = (screenSize / dim);
const pecasImgs = [];
const pecas = [];
let celulas = [];

let linhas = (largura / dim);
let colunas = (altura / dim);

let matrix = [];
let entropia = [];
let entropiaLista = [];
let total = 0;

let tileSet = "";

function createMatrix(){
  for(let y = 0; y < dim; y++){
    let c1 = [];
    for(let x = 0; x < dim; x++){
      let len = pecas.length;
      c1.push(new Celula(len,y,x));
    }
    celulas.push(c1);
  }
}

function preload(){
  let queryString = window.location.search;
  if(queryString == "" || queryString == undefined){
    tileSet = 'set01';
    loadPecas01();
  }else{
    queryString = queryString.replace("?","");
    qArr = queryString.split('&');
    if(qArr[1]){
      let s = qArr[1].split('=');
      if(!isNaN(s[1])){
        dim = s[1];
        size = (screenSize / dim);
      }
    }

    if(qArr[0].indexOf('set') > -1){
      qArr = qArr[0].split('=');
      if(qArr[0]=='tileset'){
        if(qArr[1] == 'set01'){
          tileSet = 'set01';
          loadPecas01();
        }else if(qArr[1] == 'set02'){
          tileSet = 'set02';
          loadPecas02();
        }else if(qArr[1] == 'set03'){
          tileSet = 'set03';
          loadPecas03();
        }else if(qArr[1] == 'set04'){
          tileSet = 'set04';
          loadPecas04();
        }else if(qArr[1] == 'set05'){
          tileSet = 'set05';
          loadPecas05();
        }
      }
    }
  }
}

function setup() {
  let cnv = createCanvas(largura, altura);

  if(tileSet == "set01"){
    criaPecasSet01();
  }else if(tileSet == "set02"){
    criaPecasSet02();
  }else if(tileSet == "set03"){
    criaPecasSet03();
  }else if(tileSet == "set04"){
    criaPecasSet04();
  }else if(tileSet == "set05"){
    criaPecasSet05();
  }

  inicia();
}

function inicia(){
  celulas = [];
  background(0);
  total = 0;
  createMatrix();

  let primaX = floor(random(0,dim));
  let primaY = floor(random(0,dim));
  peca = floor(random(0,pecas.length));
  
  colapseCell(primaY, primaX, peca);
}

function colapseCell(y,x,peca){
  total++;

    celulas[y][x].colapso(peca);
    let p = pecas[peca];
    if(pecas[peca].img){
      image(pecas[peca].img,x*size,y*size,size,size);
    }else{
      console.log('erro');
    }
  
}

function analizaMatrix(){
  entropia = [];
  entropiaLista = [];
  el = [];
  for (let y = 0; y < dim; y++){
    for (let x = 0; x < dim; x++){
      let cel = celulas[y][x];
      let status = cel.is_collapsed();
      if(!status){
        celulas[y][x].analiza(celulas, pecas, dim);
        let ent = celulas[y][x].getEntropia();
        
        let pos = [y,x];
        if(ent != pecas.length && ent != 0){
          el.push([ent,pos]);
        }
      }
    }
  }
  entropiaLista = el;
}

function sortFunction(a, b) {
  if (a[0] === b[0]) {
      return 0;
  }
  else {
      return (a[0] < b[0]) ? -1 : 1;
  }
}

function draw() {

  if(total < (dim*dim)){
    
    analizaMatrix();
    
    entropiaLista = entropiaLista.sort(sortFunction);
    
    if(!entropiaLista[0]){
      mostraErro();
      inicia();
      return true;
    }
    y = entropiaLista[0][1][0];
    x = entropiaLista[0][1][1];

    let peca = floor(random(0, celulas[y][x].opcoes.length));
    peca = celulas[y][x].opcoes[peca];

    if (peca == undefined){
      y = entropiaLista[1][1][0];
      x = entropiaLista[1][1][1];
  
      let peca = floor(random(0, celulas[y][x].opcoes.length));
      peca = celulas[y][x].opcoes[peca];
    }

      colapseCell(y,x,peca);
    
  }else{
    console.log('fim');
    noLoop();
  }
}

function mostraErro(){
  const divR = document.getElementById('divErro');
  divR.style.display = 'block';
  divR.style.visibility = 'visible';
  setTimeout(escondeErro,2500);
}

function escondeErro(){
  const divR = document.getElementById('divErro');
  divR.style.display = 'none';
  divR.style.visibility = 'hidden';
}

