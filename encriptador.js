const botonEncriptar=document.getElementsByClassName("encriptar")
const hidenText1=document.getElementsByClassName("MuñecoMensaje")
const hidenText2=document.getElementsByClassName("textMuñeco")
const hidenImage=document.getElementsByClassName("textSpan")
const displayCopiar=document.getElementsByClassName("copiar")
const textEncriptado=document.getElementsByClassName("TextoEncriptado");
const ExpresionRegular=/^[a-z0-9]+$/

botonEncriptar[0].addEventListener("click", (e) => {
    e.preventDefault();
    patron = /[a-z0-9]/
    let text=document.getElementsByTagName("textarea")
    let encriptar=text[0].value;
    if(encriptar===""){
        alert("TEXTO VACIO")
    }else{
        if(ExpresionRegular.test(encriptar)==true){
            let megaencriptado=encriptar.toLowerCase();
            megaencriptado=megaencriptado.replaceAll("e","enter");
            megaencriptado=megaencriptado.replaceAll("i","imes");
            megaencriptado=megaencriptado.replaceAll("a","ai")
            megaencriptado=megaencriptado.replaceAll("o","ober")
            megaencriptado=megaencriptado.replaceAll("u","ufat")
            hidenText1[0].style.display="none";
            hidenText2[0].style.display="none";
            hidenImage[0].style.display="none";
            displayCopiar[0].style.display="flex";
            textEncriptado[0].style.display="flex";
            textEncriptado[0].innerHTML="";
            textEncriptado[0].innerHTML=megaencriptado;
        }else{
            alert("TIENE MAYUSCULAS TILDES O CARACTERES ESPECIALES")
        }
    }
});

const botonDesencriptar=document.getElementsByClassName("desencriptar")
botonDesencriptar[0].addEventListener("click", (e) => {
    e.preventDefault();
    let text=document.getElementsByTagName("textarea")
    let encriptar=text[0].value;
    if(encriptar===""){
        alert("TEXTO VACIO")
    }else{
        if(ExpresionRegular.test(encriptar)==true){
            megaencriptado=megaencriptado.replaceAll("enter","e");
            megaencriptado=megaencriptado.replaceAll("imes","i");
            megaencriptado=megaencriptado.replaceAll("ai","a")
            megaencriptado=megaencriptado.replaceAll("ober","o")
            megaencriptado=megaencriptado.replaceAll("ufat","u")
            hidenText1[0].style.display="none";
            hidenText2[0].style.display="none";
            hidenImage[0].style.display="none";
            displayCopiar[0].style.display="flex";
            textEncriptado[0].style.display="flex";
            textEncriptado[0].innerHTML="";
            textEncriptado[0].innerHTML=megaencriptado;
        }else{
            alert("TIENE MAYUSCULAS TILDES O CARACTERES ESPECIALES")
        }

    }
});

displayCopiar[0].addEventListener("click",(e)=>{
    e.preventDefault();
    navigator.clipboard.writeText(textEncriptado[0].innerHTML)
})
