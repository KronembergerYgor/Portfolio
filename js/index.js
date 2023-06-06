const elementTextH1             = document.querySelector("#textHome h1");
const elementTextParagraf       = document.querySelector("#textHome p");

function digitationH1(texto, contador = 0){
    if(contador < texto.length){
        setTimeout(() => {
            elementTextH1.textContent += texto.charAt(contador);    
            contador++;
            digitationH1(texto, contador)        
        }, 40);
    }else{
        elementTextH1.classList.remove("Ativo");
        elementTextParagraf.classList.add("Ativo");
        digitationP("Sou desenvolvedor FullStack, sempre visando evoluir no  ambiente de trabalho, buscar aprender novas técnologias e novos desafios.")
        
    }
}


function digitationP(texto, contador = 0){
    if(contador < texto.length){
        setTimeout(() => {
            elementTextParagraf.textContent += texto.charAt(contador);    
            contador++;
            digitationP(texto, contador)        
        }, 40);
    }else{
        elementTextParagraf.classList.remove("Ativo");
        elementTextParagraf.classList.add("Parado");
    }
}


digitationH1("Olá, eu sou Ygor Kronemberger")