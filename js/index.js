const elementTextH1             = document.querySelector("#textHome h1");
const elementTextParagraf       = document.querySelector("#textHome p");


function digitationH1(texto, contador = 0){
    if(contador < texto.length){
        setTimeout(() => {
            elementTextH1.textContent += texto.charAt(contador);    
            contador++;
            digitationH1(texto, contador)        
        }, 60);
    }else{

        digitationP("Sou desenvolvedor FullStack, sempre visando evoluir no  ambiente de trabalho, buscar aprender novas técnologias e novos desafios.")

    }
}


function digitationP(texto, contador = 0){
    if(contador < texto.length){
        setTimeout(() => {
            elementTextParagraf.textContent += texto.charAt(contador);    
            contador++;
            digitationP(texto, contador)        
        }, 60);
    }
}


digitationH1("Olá, eu sou Ygor Kronemberger")