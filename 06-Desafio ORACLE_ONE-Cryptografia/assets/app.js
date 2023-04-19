const mainText = document.getElementById("mainText");
const textAlura = document.getElementById("textAlura");
const textLao = document.getElementById("textLao");
const alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',' '];
const codigo = ['j', 'p', 'h', 'e', 'w', 'z', 'k', 'a', 'l', 'd', 's', 'n', 'i', 'x', 'c', 'r', 'u', 'v', 'q', 'f', 'b', 't', 'm', 'o', 'g', 'y','#'];


function limpaTextArea(text){
    if(text.value.toLowerCase() == "digite seu texto para cryptografar"){
        text.value = "";
        text.style.color = "#113311";
    }
}

function saidaTextArea(text){
    if(text.value == ""){
        text.value = "Digite seu texto para cryptografar";
        text.style.color = "#999999"
    }else{
        arrumaTexto();
    }
    
}

function escrevendo(text){
    if(text.value != ""){
        text.style.color = "#113311";
    }
}

function tiraAcento(txt,str1,str2){
    ar1 = str1.split('|');
    for(let a = 0; a < ar1.length; a++){
        txt = txt.replace(ar1[a],str2);
    }
    return txt;
}

function arrumaTexto(){
    document.getElementById("aviso").style.visibility = 'visible';
    document.getElementById("aviso").innerText = "AVISO:Removendo maiúsculas e acentos";
    texto = mainText.value
//á è î õ ÚÙ
    texto = texto.toLowerCase();
    texto = tiraAcento(texto,'á|à|ã|â','a');
    texto = tiraAcento(texto,'é|è|ê','e');
    texto = tiraAcento(texto,'í|ì|î','i');
    texto = tiraAcento(texto,'ó|ò|ô|õ','o');
    texto = tiraAcento(texto,'ú|ù|û','u');

    /*texto = texto.replace(,'a');
    texto = texto.replace(,'a');
    texto = texto.replace(,'i');
    texto = texto.replace('','o');
    texto = texto.replace('','u');*/
    mainText.value = texto;

    setTimeout(someAviso,2000);
}

function someAviso(){
    document.getElementById("aviso").style.visibility = 'hidden';
    
}

function cryptoAlura(txt){
    /*  A letra "e" é convertida para "enter"
        A letra "i" é convertida para "imes"
        A letra "a" é convertida para "ai"
        A letra "o" é convertida para "ober"
        A letra "u" é convertida para "ufat"  */

    txt = txt.replaceAll('e','enter');
    txt = txt.replaceAll('i','imes');
    txt = txt.replaceAll('a','ai');
    txt = txt.replaceAll('o','ober');
    txt = txt.replaceAll('u','ufat');

    return(txt);
}

function cryptoLao(txt){
    let txtNovo = '';

    for(let a = 0; a < txt.length; a++){
        let letra = txt.charAt(a);
        //let index = alfabeto.findIndex(pegaLetra(letra));
        
        if(alfabeto.indexOf(letra)>=0){
            let index = pegaLetraCod(letra);
            txtNovo += codigo[index];
        }else{
            txtNovo += letra;
        }
    }
    return(txtNovo);
}

function pegaLetraCod(letra){
    //if(letra == ' '){return ' ';}
    for(let b = 0; b<alfabeto.length;b++){
        if(letra == alfabeto[b]){
            return b;
            break;
        }
    }
    return letra;
}

function limpar(){
    mainText.value = '';
    textAlura.value = '';
    textLao.value = '';
}

function pegaCodLetra(letra){
    //if(letra == ' '){return ' ';}
    for(let b = 0; b<codigo.length;b++){
        if(letra == codigo[b]){
            return b;
            break;
        }
    }
    return letra;
}

function decrypto(){
    window.location = "#decrypt";
    let txt = mainText.value;
    let alura = false;

    if(txt.indexOf('enter')>0){alura=true;}
    if(txt.indexOf('imes')>0){alura=true;}
    if(txt.indexOf('ai')>0){alura=true;}
    if(txt.indexOf('ober')>0){alura=true;}
    if(txt.indexOf('ufat')>0){alura=true;}

    if(alura){
        document.getElementById('decrypt').value = decryptAlura(txt);
    }else{
        document.getElementById('decrypt').value = decryptLao(txt);
    }
}

function decryptoA(){
    window.location = "#decrypt";
    let txt = textAlura.value;
    document.getElementById('decrypt').value = decryptAlura(txt);
}

function decryptoL(){
    window.location = "#decrypt";
    let txt = textLao.value;
    document.getElementById('decrypt').value = decryptLao(txt);
}

function crypto(){
    arrumaTexto();
    let texto = mainText.value;
    if (texto != ""){
        textAlura.value = cryptoAlura(texto);
        textLao.value = cryptoLao(texto);
    }
}

function decryptLao(txt){
    let txtNovo = '';

    for(let a = 0; a< txt.length; a++){
        let letra = txt.charAt(a);  
        //let index = alfabeto.findIndex(pegaLetra(letra));
        if(codigo.indexOf(letra)>=0){
            let index = pegaCodLetra(letra);
            txtNovo += alfabeto[index];
        }else{
            txtNovo += letra;
        }
    }
    return(txtNovo);
}

function decryptAlura(txt){
    let txtNovo = '';

    txtNovo = txt.replaceAll('ai','a');
    txtNovo = txtNovo.replaceAll('enter','e');
    txtNovo = txtNovo.replaceAll('imes','i');
    txtNovo = txtNovo.replaceAll('ober','o');
    txtNovo = txtNovo.replaceAll('ufat','u');

    return txtNovo;
}

function copyAlura(event){
    textAlura.select(); 
    let txt = textAlura.value;

    navigator.clipboard.writeText(txt);
    document.getElementById("aviso").style.visibility = 'visible';
    document.getElementById("aviso").innerText = "Texto copiado! Método Alura";
    setTimeout(someAviso,2000);
    
}

function copyLao(){
    textAlura.select(); 
    let txt = textLao.value;

    navigator.clipboard.writeText(txt);
    document.getElementById("aviso").style.visibility = 'visible';
    document.getElementById("aviso").innerText = "Texto copiado! Método 2";
    setTimeout(someAviso,2000);
}