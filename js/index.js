const saida = document.querySelector("#textHome .teste");


console.log("result " + saida);


function digitation(texto, contador){

    if(contador < texto.length){

        setTimeout(() => {
            saida.textContent += texto.charAt(contador);    
            contador++;
            digitation(texto, contador)        
        }, 90);
    }
}

digitation("testeenaod usdbfboisufhdufbhaoi", 90);
