function tocaSom (idAudio) {
    const elemento = document.querySelector(idAudio);

    if (elemento && elemento.localName === 'audio') {
            elemento.play()
    }

    else {
        alert('Elemento não encontrado ou seletor inválido')
    }
       
    } 



const listaDeTeclas = document.querySelectorAll('.tecla');

for ( let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];

    const instrumento = tecla.classList[1];

    const idElementoAudio = `#som_${instrumento}`

    tecla.onclick = function () { 
        tocaSom(idElementoAudio) 
    };

    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'Enter')
            tecla.classList.add('ativa')
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }

}