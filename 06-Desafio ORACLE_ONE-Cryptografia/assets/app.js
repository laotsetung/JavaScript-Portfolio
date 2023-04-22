const mainText = document.getElementById("mainText");
const textAlura = document.getElementById("textAlura");
const alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',' '];
const codigo = ['j', 'p', 'h', 'e', 'w', 'z', 'k', 'a', 'l', 'd', 's', 'n', 'i', 'x', 'c', 'r', 'u', 'v', 'q', 'f', 'b', 't', 'm', 'o', 'g', 'y','#'];

function e_cryptog(){
    let txt = mainText.value;
    if(txt.indexOf('ai')>-1 || txt.indexOf('enter')>-1 || txt.indexOf('imes')>-1 || txt.indexOf('ober')>-1 || txt.indexOf('ufat')>-1){
        return true;
    }else{
        return false;
    }
}

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
        //arrumaTexto();
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
    if(!e_cryptog()){
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

        mainText.value = texto;

        setTimeout(someAviso,2000);
    }
}

function someAviso(){
    document.getElementById("aviso").style.visibility = 'hidden';
}

function limpar(){
    someAviso();
    mainText.value = "Digite seu texto para cryptografar";
    mainText.style.color = "#999999"
    textAlura.value = '';
    mainText.focus();
}

function decrypto(){
    let txt = mainText.value;
    window.location="#decrypt";

    if(!e_cryptog()){
        textAlura.value = 'Texto inserido não está cryptografado!! \n\n';
        textAlura.value += txt;
    }else{
        let txtNovo = '';

        txtNovo = txt.replaceAll('ai','a');
        txtNovo = txtNovo.replaceAll('enter','e');
        txtNovo = txtNovo.replaceAll('imes','i');
        txtNovo = txtNovo.replaceAll('ober','o');
        txtNovo = txtNovo.replaceAll('ufat','u');

        textAlura.value = txtNovo;
    }
}

function crypto(){
    arrumaTexto();
    let texto = mainText.value;
    if (texto == "" || texto.toLowerCase() == "digite seu texto para cryptografar"){
        document.getElementById("aviso").style.visibility = 'visible';
        document.getElementById("aviso").innerText = "AVISO: Insira um texto!";
        mainText.focus();
        setTimeout(someAviso,2000);
    }else{
        arrumaTexto();

        texto = texto.replaceAll('e','enter');
        texto = texto.replaceAll('i','imes');
        texto = texto.replaceAll('a','ai');
        texto = texto.replaceAll('o','ober');
        texto = texto.replaceAll('u','ufat');

        textAlura.value = texto;
        window.location="#decrypt";
    }
}

function copyAlura(event){
    textAlura.select(); 
    let txt = textAlura.value;

    navigator.clipboard.writeText(txt);
    document.getElementById("aviso").style.visibility = 'visible';
    document.getElementById("aviso").innerText = "Texto copiado!";
    setTimeout(someAviso,2000);
    
}