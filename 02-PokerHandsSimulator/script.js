
let div = document.getElementById("show");
let jogadores = [
[9,9,0,0,0,0,0], 
[9,9,0,0,0,0,0],
[9,9,0,0,0,0,0],
[9,9,0,0,0,0,0],
[9,9,0,0,0,0,0],
[9,9,0,0,0,0,0],
[9,9,0,0,0,0,0],
[9,9,0,0,0,0,0],
[9,9,0,0,0,0,0]];
//primeira carta  ; segunda carta ; total g1 ; total g2 ; total g3 ; total A ; total win

let mao = [];
let cartas = [];
let naipe = 0;
let carta = "";
let c = 0;
let a = 0;
let n = 0;
let txt = "";
let jogadas = 0.0;
let j =0;
let board = ["aa","bb","cc","dd","ee"];
let classe = "";
let bla = "";

function embaralha(){ //Função que irá embaralhar as cartas, a sequencia de cartas é alocada na ARRAY mao
    for(a = 0 ; a < 52; a++){
        mao[a] = "";
    }

    for (a = 0; a < 52;a++){

        n = Math.floor(Math.random() * 52);
        carta = cartas[n];

        if(a == 0){
            mao[0] = (carta.toString());
        }else{
            if(mao.indexOf(carta) == -1){  
                mao[a] = carta;
            }else{
                a--;
            }
        }
    }


}

function limpaMaos(){ //Função que limpa toda a ARRAY jogadores que contém o último calculo feito
 jogadores = [
[9,9,0,0,0,0],
[9,9,0,0,0,0],
[9,9,0,0,0,0],
[9,9,0,0,0,0],
[9,9,0,0,0,0],
[9,9,0,0,0,0],
[9,9,0,0,0,0],
[9,9,0,0,0,0],
[9,9,0,0,0,0]];
}

function calcula(){ //Função que simula as jogadas
    j = document.getElementById("players").value;
    jogadas = document.getElementById("jogadas").value;

    txt = "<br><table style='margin: auto'>"
    txt += " <tr> <td> LEGENDA DE CORES </td><td>&nbsp&nbsp&nbsp</td><td class=g1 colspan=2> AA,AK,KK </td><td> &nbsp </td>";
    txt += "<td class=g2 colspan=2> QQ,AQ,KQ </td><td> &nbsp&nbsp&nbsp </td>";
    txt += "<td class=g3 colspan=2> JJ,AJ,KJ </td><td> &nbsp&nbsp&nbsp</td>";
    txt += "<td class=g4 colspan=2> QUALQUER PAR </td><td> &nbsp&nbsp&nbsp</td>";
    txt += "<td class=g22 colspan=2> QUALQUER REI FRACO </td><td> &nbsp&nbsp&nbsp</td>";
    txt += "<td class=g11 colspan=2> QUALQUER ÁS FRACO </td><td> &nbsp&nbsp&nbsp</td>";
    txt += "<td colspan=2 style='background-color: rgb(169, 169, 169);'> SEM JOGO </td><td> &nbsp&nbsp&nbsp</td></tr></table><br>";
    
    txt += "<table class='jogador'><tr></tr>";
    txt +="<tr style='background-color: #666688;'><td>.</td>";

    c = 0;

    for(a = 0 ; a < j ; a++){   //Cria cabeçalho da tabela
        txt += "<td> Jogador"+(a+1)+"</td>";
    }

    txt += "<td> FLOP / TURN / RIVER </td></tr>";

    limpaMaos();    //Limpa a array com as informações dos 'jogadores'

    for(let x = 0; x < jogadas; x++){ // Cria um FOR para a quantidade de JOGADAS escolhido pelo usuario
        
        //Inicio do cálculo de UMA Jogada
        embaralha();    //Embaralha as cartas, ALOCA NOVA SEQUENCIA PARA A ARRAY mao

        txt+="<tr><td></td>";
        c=0;
        
        for(b = 0 ; b < j ; b++){ // Gera CARTA 1 Para TODOS os Jogadores e Armazena na ARRAY jogadores['id_jogador'][0] <- carta 1
            jogadores[b][0] = mao[c];
            c++; 
        }

        for(b = 0 ; b < j ; b++){ //Gera CARTA 2 Para TODOS os Jogadores e Armazena na ARRAY jogadores['id_jogador'][1] <- carta 2
            jogadores[b][1] = mao[c];
            c++;
        }

        for(b = 0 ; b < j ; b++){ // Abre o PAR de CARTAS de CADA JOGADOR
            car1 = jogadores[b][0]; //carta 1
            car2 = jogadores[b][1]; //carta 2

            classe = "";

            //G1
            if(car1.indexOf("1") == 0 || car2.indexOf("1") == 0){ //1 AS
                classe = "g11";
                jogadores[b][5]++;
            }else if(car1.indexOf("K") == 0 || car2.indexOf("K") == 0){ //1 REI
                classe = "g22";
            }

            if(car1.indexOf("1") == 0 && car2.indexOf("1") == 0){//AS AS
                classe = "g1";
                jogadores[b][2]++;

            }else if(car1.indexOf("K") == 0 && car2.indexOf("K") == 0){//REI REI
                classe = "g1";
                jogadores[b][2]++;
                
            }else if( (car1.indexOf("1") == 0 && car2.indexOf("K") == 0) || (car1.indexOf("K") == 0 && car2.indexOf("1") == 0) ){// AS REI
                classe = "g1";
                jogadores[b][2]++;

            }else if(car1.indexOf("Q") == 0 && car2.indexOf("Q") == 0){// DAMA DAMA
                classe = "g2";
                jogadores[b][3]++;

            }else if( (car1.indexOf("1") == 0  && car2.indexOf("Q") == 0) || (car1.indexOf("K") == 0 && car2.indexOf("Q") == 0) || (car1.indexOf("Q") == 0  && car2.indexOf("1") == 0) || (car1.indexOf("Q") == 0 && car2.indexOf("K") == 0) ){// AS DAMA OU REI DAMA
                classe = "g2";
                jogadores[b][3]++;
                
            }else if(car1.indexOf("J") == 0 && car2.indexOf("J") == 0){// VALA VALA
                classe = "g3";
                jogadores[b][4]++;
                
            }else if((car1.indexOf("1") == 0 && car2.indexOf("J") == 0) || (car1.indexOf("J") == 0 && car2.indexOf("1") == 0) || (car1.indexOf("K") == 0 && car2.indexOf("J") == 0) || (car1.indexOf("J") == 0 && car2.indexOf("K") == 0)
            ){// AS VALA  ; REI VALA
                classe = "g3";
                jogadores[b][4]++;
                
            }else if(car1.charAt(0) == car2.charAt(0)){ //OUTRO PAR
                classe ="g4";

            }

            if(classe == ""){ //"SEM JOGO"
                txt += "<td> <img src='cartas/" + jogadores[b][0] + ".png' height='50'> <img src='cartas/" + jogadores[b][1]+ ".png' height='50'></td>";
            }else{
                txt += "<td class='"+classe+"'> <img src='cartas/" + jogadores[b][0] + ".png' height='50'> <img src='cartas/" + jogadores[b][1]+".png' height='50'></td>";
            }

        } //FIM DA AVALIAÇÃO DAS CARTAS

        //FLOP
        c++;
        c++;
        c++; //retira as proximas tres cartas, e vira as proximas 3 =  FLOP

        
        board[0] = mao[c];
        c++;
        board[1] = mao[c];
        c++;
        board[2] = mao[c];
        c++;
        //fim do flop



        c++; //turn
        board[3] = mao[c];
        c++;
        //c++;
        //river
        board[4] = mao[c];

        flop = "<img src='cartas/"+board[0]+".png' height='50'>";
        flop += "<img src='cartas/"+board[1]+".png' height='50'>";
        flop += "<img src='cartas/"+board[2]+".png' height='50'>";
        flop += "<img src='cartas/"+board[3]+".png' height='50'>";
        flop += "<img src='cartas/"+board[4]+".png' height='50'>";

        txt+="<td style='background-color: #555;'> "+flop+"</td>";

        txt+="</tr>";
    } //FIM DO FOR, TERMINO DO CÁLCULO DE TODAS AS JOGADAS
        
    bla = "<br>Cabeçalho com o resultado de todas as " + jogadas + " jogadas por Jogador<table class='cabecalho'><tr style='background-color: #666688;'><td>.</td>";
    for(a = 0 ; a < j ; a++){
        bla += "<td> Jogador"+(a+1)+"</td>";
    }
    bla += "<td>Grupos de Mãos</td></tr>";
    
    for (b = 0 ; b < 4 ; b++){
        bla += "<tr><td></td>";

        for(a = 0 ; a < j ; a++){
            if((b+1)!=4){
                bla += "<td class='g"+(b+1)+"'>" + jogadores[a][b+2] + " | " + ((jogadores[a][b+2] * 100) / jogadas) + "%</td>";
            }else{
                bla += "<td >" + jogadores[a][b+2] + " | " + ((jogadores[a][b+2] * 100) / jogadas) + "%</td>";
            }
        }

        if(b==0){
            bla += "<td class='g1'>  AA,KK,AK,--,--  </td></tr>"; 
        }else if(b==1){
            bla += "<td class='g2'>  QQ,AQ,KQ,--,--  </td></tr>"; 
        }else if(b==2){
            bla += "<td  class='g3'>  JJ,AJ,KJ,--,--  </td></tr>"; 
        }else{
            bla += "<td>  -- Outras Combinações --  </td></tr>"; 
        }
    }

    bla += "</table>";

    document.getElementById("show11").innerHTML = bla;// + "<br>"+ mao.length();
    document.getElementById("show2").innerHTML = txt;// + "<br>"+ mao.length();
}


function nameNaipe(){ //Função que gera os nomes dos Naipes (c=Copas ; o=Ouros; e=Espada; p=Paus)
    if(naipe == 0){
        return 'c';
    }else if(naipe == 1){
        return 'o';
    }else if(naipe == 2){
        return 'e';
    }else{
        return 'p';
    }
}

function IniciaVariavel(){ //Função que CRIA AS CARTAS DO BARALHO, e atribui na ARRAY cartas[0-52]

    for (a = 0 ; a < 4; a++){

        for (let b = 1; b < 14; b++){
            carta = b;
            if(b == 10){
                carta = "T";
            }else if (b == 11){
                carta = "J"
            }else if (b == 12){
                carta = "Q";
            }else if (b == 13){
                carta = "K";
            }

            carta += nameNaipe();
            cartas[c] = carta;
            c++;
        }

        naipe++;
        carta = "";
    }
}

IniciaVariavel();

embaralha();
console.table(cartas);
console.table(mao);
