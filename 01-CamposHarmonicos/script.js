//JS Campos Harmonicos

let tom = "A";
let escala = 0;
let dive;
let texto_dive;
const notas = ["C", "Db", "D" ,"Eb","E","F","Gb","G","Ab","A","Bb","B"];
const nome_escala = ["JÔNICO","DÓRICO","FRÍGIO","LÍDIO","MIXOLÍDIO","EÓLIO","LOKI"];
let raiz;
let rec_tom;
let rec_esc;

function envia_tom(rec_tom){ //Recebe o TOM que foi CLICADO
    tom = rec_tom;
    document.getElementById("ret_tom2").innerHTML = "<h3> TOM: " + rec_tom + "</h3>";
    document.getElementById("ret_tom").value = rec_tom;

    ch();
}

function envia_escala(rec_esc){
    escala = rec_esc;
    document.getElementById("ret_esc").value = nome_escala[escala];
}


function ch(){  //Cria as TABELAS par ao TOM que foi escolhido
    dive = document.getElementById("resultado");
    raiz = notas.indexOf(tom);

    //JONICO
    texto_dive = "<table style='width = 100%; margin: auto;' class='modos'><tr><td> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td><td>  ";
    texto_dive += "<table style='width = 50%'><tr> <td ><br></td> <td /><td /><td /><td /><td /><td /> <td /></tr>";
    texto_dive += "<tr class='maior' style='height: 50px'> <td> JÔNICO </td>  " +
            "<td> " + notas[raiz] + "7+ </td>" + 
            "<td> " + notas[((raiz+2) % 12)] + "m7 </td>" + 
            "<td> " + notas[((raiz+4) % 12)] + "m7 </td>" + 
            "<td> " + notas[((raiz+5) % 12)] + "7+ </td>" + 
            "<td> " + notas[((raiz+7) % 12)] + "7 </td>" + 
            "<td> " + notas[((raiz+9) % 12)] + "m7 </td>" + 
            "<td> " + notas[((raiz+11) % 12)] + "Ø </td></tr>"; //setima maior 11

    //DÓRICO
    //raiz += 2;
    texto_dive += "<tr><td colspan=14>&nbsp;</td></tr><tr class='menor' style='height: 50px'> <td> DÓRICO </td>  " +
            "<td> " + notas[((raiz) % 12)] + "m7 </td>" + 
            "<td> " + notas[((raiz + 2) % 12)] + "m7 </td>" + //segunda maior (2)
            "<td> " + notas[((raiz + 3) % 12)] + "7+ </td>" + //terça menor (3)
            "<td> " + notas[((raiz + 5) % 12)] + "7 </td>" +  //quarta justa (5)
            "<td> " + notas[((raiz + 7) % 12)] + "m7 </td>" + //quinta justa (7)
            "<td> " + notas[((raiz + 9) % 12)] + "Ø </td>" + //
            "<td> " + notas[((raiz + 10) % 12)] + "7+ </td></tr>"; //setima menor (10)

    //FRÍGIO
    texto_dive += "<tr><td colspan=14>&nbsp;</td></tr><tr class='menor' style='height: 50px'> <td> FRÍGIO </td>  " +
            "<td> " + notas[((raiz) % 12)] + "m7 </td>" + 
            "<td> " + notas[((raiz + 1) % 12)] + "7+ </td>" + //segunda menor 1
            "<td> " + notas[((raiz + 3) % 12)] + "7 </td>" +  //terça menor 3
            "<td> " + notas[((raiz + 5) % 12)] + "m7 </td>" + 
            "<td> " + notas[((raiz + 7) % 12)] + "Ø </td>" + //quinta justa
            "<td> " + notas[((raiz + 8) % 12)] + "7+ </td>" + //sexta menor 8
            "<td> " + notas[((raiz + 10) % 12)] + "m7 </td></tr>"; //setima menor 10

    //lídio
    texto_dive += "<tr><td colspan=14>&nbsp;</td></tr><tr class='maior' style='height: 50px'> <td> LÍDIO </td>  " +
            "<td> " + notas[((raiz) % 12)] + "7+ </td>" + 
            "<td> " + notas[((raiz + 2) % 12)] + "7 </td>" + //2maior 2
            "<td> " + notas[((raiz + 4) % 12)] + "m7 </td>" + //terca maior 4
            "<td> " + notas[((raiz + 6) % 12)] + "Ø </td>" + //quarta aumentada
            "<td> " + notas[((raiz + 7) % 12)] + "7+ </td>" +  //quinta justa
            "<td> " + notas[((raiz + 9) % 12)] + "m7 </td>" + //sexta maior
            "<td> " + notas[((raiz + 11) % 12)] + "m7 </td></tr>";

    //MIXOLÍDIO
    texto_dive += "<tr><td colspan=14>&nbsp;</td></tr><tr class='maior' style='height: 50px'> <td> MIXOLÍDIO </td>  " +
            "<td> " + notas[((raiz) % 12)] + "7 </td>" + 
            "<td> " + notas[((raiz + 2) % 12)] + "m7 </td>" + 
            "<td> " + notas[((raiz + 4) % 12)] + "Ø </td>" + //terca maior
            "<td> " + notas[((raiz + 5) % 12)] + "7+ </td>" + 
            "<td> " + notas[((raiz + 7) % 12)] + "m7 </td>" + 
            "<td> " + notas[((raiz + 9) % 12)] + "m7 </td>" + 
            "<td> " + notas[((raiz + 10) % 12)] + "7M </td></tr>"; //setima menor

    //EÓLIO
    texto_dive += "<tr><td colspan=14>&nbsp;</td></tr><tr class='menor' style='height: 50px'> <td> EÓLIO </td>  " +
            "<td> " + notas[((raiz) % 12)] + "m7 </td>" + 
            "<td> " + notas[((raiz + 2) % 12)] + "Ø </td>" + 
            "<td> " + notas[((raiz + 3) % 12)] + "7+ </td>" + //terca menor 3
            "<td> " + notas[((raiz + 5) % 12)] + "m7 </td>" + 
            "<td> " + notas[((raiz + 7) % 12)] + "m7 </td>" + 
            "<td> " + notas[((raiz + 8) % 12)] + "7+ </td>" + 
            "<td> " + notas[((raiz + 10) % 12)] + "7 </td></tr>";

    //LOKI
    texto_dive += "<tr><td colspan=14>&nbsp;</td></tr><tr class='menor' style='height: 50px'> <td> LOKI </td>  " +
            "<td> " + notas[((raiz) % 12)] + "Ø </td>" + 
            "<td> " + notas[((raiz + 1) % 12)] + "7+ </td>" +  //segunda menor 1
            "<td> " + notas[((raiz + 3) % 12)] + "m7 </td>" + //terca menor 3
            "<td> " + notas[((raiz + 5) % 12)] + "m7 </td>" + //quarta justa 5
            "<td> " + notas[((raiz + 6) % 12)] + "7+ </td>" + //quinta diminuta 6
            "<td> " + notas[((raiz + 8) % 12)] + "7 </td>" + 
            "<td> " + notas[((raiz + 10) % 12)] + "m7 </td></tr><tr><td></tr></tr>";


    texto_dive += "<td colspan=13><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </td></tr></table>";

    dive.innerHTML = texto_dive;
}
