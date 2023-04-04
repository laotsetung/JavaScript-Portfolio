var cartaAtual = '';
var rmvC = '';

var acerto = [];
var win = false;

function verificaWin(){
  if(acerto.length == 10){
    win = true;
    w = document.getElementById('container').style.width;
    h = document.getElementById('container').style.height;
    t = document.getElementById('trava');
    t.style.width = w;
    t.style.height = h;

    txt = '<h1> Au Au!!</h1><img src="imgs/final.jpg" style="margin-left: auto; margin-right: auto;" /><br>';
    txt += '<img src="imgs/cao06.gif" style="width: 294px; height: 215px; margin-left: auto; margin-right: auto;" />';
    txt += '<br><button onclick="window.location.reload()">JOGAR DE NOVO</button>'
    t.innerHTML = txt;
    t.display = "block";
    //document.getElementById('container').style.display = 'none';
  }
}

function escondeCartas(){ //errou esconde as cartas 
  for (let a = 1; a <= 10; a++){
    cTras = document.getElementById('carta'+a+'_1_t');
    if(cTras){
      cTras.style.visibility = 'visible';
    }
    
    cTras = document.getElementById('carta'+a+'_2_t');
    if(cTras){
      cTras.style.visibility = 'visible';
    }
  }
  if(!win){
    document.getElementById('trava').style.display = 'none';
  }
}

function removeCartas(){ //acertou remove a carta
  c = rmvC;
  let c1 = document.getElementById(c+'_1');
  if(c1){
    c1.style.display = 'none';
  }
  
  c1 = document.getElementById(c+'_2');
  if(c1){
    c1.style.display = 'none';
  }
  if(!win){
    document.getElementById('trava').style.display = 'none';
  }
}

function viraCarta(id,qualCarta){
  let nome = 'carta'+id+'_'+qualCarta;
  let c = document.getElementById(nome);

    let cTras = document.getElementById(nome+'_t');
    
    cTras.style.visibility = 'hidden';
    
    if(cartaAtual == ''){
      cartaAtual = id;
    }else{
      document.getElementById('trava').style.display = 'block';
      if (cartaAtual == id){
        acerto.push(id);
        cartaAtual = '';
        rmvC = 'carta'+id;
        setTimeout(removeCartas,1000);

      }else{       
        cartaAtual = '';
        setTimeout(escondeCartas, 1000);
      }
    }

    verificaWin();
}