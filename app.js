function limpaCampoNome(tag) {
    document.querySelector(tag).value = '';
}

function checaNomeInserido() {
    const tagCampoInput = '#amigo';
    const nomeAmigo = document.querySelector(tagCampoInput).value;

    if (nomeAmigo == '') {
        alert('Por favor, insira um nome.');
    }
    else if (amigos.includes(nomeAmigo)) {
        alert('Nome repetido, insira um nome diferente.');
    }
    else {
        amigos.push(nomeAmigo);
    }

    limpaCampoNome(tagCampoInput);
    console.log(amigos);
}

function criaAmigoNaLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        console.log('Estou aqui');
        const itemAmigo = document.createElement('li');
        itemAmigo.className = 'item-amigo';
        itemAmigo.innerHTML = amigos[i];
        listaAmigos.appendChild(itemAmigo);   
    }
}

function geraNumeroAleatorio(max) {
    return Math.floor(Math.random() * max);
} 

function sortearAmigo() {
    const numeroAmigoSorteado = geraNumeroAleatorio(amigos.length);
    const campoResultadoSorteio = document.getElementById('resultado');
    campoResultadoSorteio.innerHTML = amigos[numeroAmigoSorteado];
}

function adicionarAmigo() {
    checaNomeInserido();
    criaAmigoNaLista();
}

let amigos = [];