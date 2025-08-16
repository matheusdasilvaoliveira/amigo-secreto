function adicionarAmigo() {
    checaNomeInserido();
}

function checaNomeInserido() {
    const nomeAmigo = document.getElementById('amigo').value;

    if (nomeAmigo == '') {
        alert('Nome inválido');
    }
}