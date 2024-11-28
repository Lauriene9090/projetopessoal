let playlist = []
let opcao = ''

function adicionarMusica() {
    let titulo = prompt("Digite o titulo da musica:")
    let artista = prompt("Digite o nome do artista:")
    let duracao = prompt("Digite a duracao da musica (min:seg):")
    playlist.push({ titulo, artista, duracao })
    console.log(`Musica "${titulo}" adicionada com sucesso!`)
}

function listarMusica() {
    if (playlist.length === 0) {
        alert("A playlist está vazia.")
        return;
    }

    let mensagem = "Playlist:\n";
    for (let i = 0; i < playlist.length; i++) {
        mensagem += `${i + 1}. ${playlist[i].titulo} - ${playlist[i].artista} (${playlist[i].duracao})\n`
    }
    alert(mensagem)
}

function removerMusica() {
    let tituloRemover = prompt("Digite o título exato da musica a ser removida:")
    let novaPlaylist = []
    let encontrada = false

    for (let i = 0; i < playlist.length; i++) {
        if (playlist[i].titulo !== tituloRemover) {
            novaPlaylist.push(playlist[i])
        }
    }
}
function editarMusica() {
    let tituloEditar = prompt("Digite o titulo exato da musica a ser editada:")
    for (let i = 0; i < playlist.length; i++) {
        if (playlist[i].titulo === tituloEditar) {
            let novoTitulo = prompt("Digite o novo título da musica:")
            let novoArtista = prompt("Digite o novo nome do artista:")
            let novaDuracao = prompt("Digite a nova duracao da musica (min:seg):")
            playlist[i] = { titulo: novoTitulo, artista: novoArtista, duracao: novaDuracao }
            console.log(`Musica "${novoTitulo}" editada com sucesso!`)
            return;
        }
    }
    console.log(`Musica "${tituloEditar}" nao encontrada.`)
}

function gerenciarPlaylist() {
    while (opcao !== '6') {
        opcao = prompt(`Menu:
1. Adicionar musica
2. Listar musicas
3. Remover musica
4. Editar musica
5. sair

Quantidade de musicas na playlist: ${playlist.length}
Escolha uma opcao:`)

        switch (opcao) {
            case '1':
                adicionarMusica()
                break;
            case '2':
                listarMusica()
                break;
            case '3':
                removerMusica()
                break;
            case '4':
                editarMusica()
                break;
            case '5':
                console.log("Saindo...")
                break;
            default:
                console.log("Opcao invalida, tente novamente.")
        }
    }
}

gerenciarPlaylist()
