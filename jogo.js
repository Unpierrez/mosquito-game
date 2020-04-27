
var altura = 0 
var largura = 0 
var vidas = 1
var tempo = 10

var nivel = window.location.search
nivel = nivel.replace('?', '');

if(nivel === 'Facil'){
    //1200
    criaMosquitoTempo = 1200
}else if (nivel ==='Normal'){
    //1000
    criaMosquitoTempo = 1000
}else if (nivel ==='Dificil'){
    //800
    criaMosquitoTempo = 800
}



function ajustaTamanhoPalcoJogo() {

    altura = window.innerHeight;
    largura = window.innerWidth;

    console.log(largura, altura);
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function(){

    tempo -= 1
    
    if (tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)

function posicaoRandomica() {

    //remover o mosquito anterior (caso exista)
    if(document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        if(vidas > 3) {

            window.location.href='fim_de_jogo.html'

          //  alert('Interromper o Jogo (GAME OVER)')
        } else {
            document.getElementById('v' + vidas).src="imagens/coracao_vazio.png"
            vidas++
        }
    } 
  

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ?  0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    console.log(posicaoX, posicaoY);

    //Criar o documento HTML

    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function() {
            this.remove()
    }

    document.body.appendChild(mosquito)

    tamanhoAleatorio()
    ladoAleatorio()

    console.log(ladoAleatorio())
}



function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)

    switch(classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)

    switch(classe) {
        case 0:
            return 'ladoB'
        case 1:
            return 'ladoA'
    }
}
