function gerenciarPlaylist() {
    let playlist = []
    let opcao = ''

    function adicionarMusica() {
        let titulo = prompt("Digite o título da musica:")
        let artista = prompt("Digite o nome do artista:")
        let duracao = prompt("Digite a duracao da musica (min:seg):")
        playlist.push({ titulo, artista, duracao })
        console.log(`Musica "${titulo}" adicionada com sucesso!`)
    }

    function exibirPlaylist() {
        if (playlist.length === 0) {
            console.log("A playlist está vazia.")
            return
        }
    
        let mensagem = "Playlist:\n"
        for (let i = 0; i < playlist.length; i++) {
            mensagem += `${i + 1}. ${playlist[i].titulo} - ${playlist[i].artista} (${playlist[i].duracao})\n`
        }
        console.log(mensagem)
    }
    
    exibirPlaylist()

    function removerMusica() {
        let tituloRemover = prompt("Digite o título exato da música a ser removida:")
         let novaPlaylist = []
         let encontrada = false
         for (let i = 0; i < playlist.length; i++) { if (playlist[i].titulo !== tituloRemover) 
            { novaPlaylist.push(playlist[i]); } else { encontrada = true
                
            } 
        }
    }

    function editarMusica() {
        let tituloEditar = prompt("Digite o titulo exato da música a ser editada:")
        for (let i = 0; i < playlist.length; i++) {
            if (playlist[i].titulo === tituloEditar) {
                let novoTitulo = prompt("Digite o novo título da música:")
                let novoArtista = prompt("Digite o novo nome do artista:")
                let novaDuracao = prompt("Digite a nova duração da música (min:seg):")
                playlist[i] = { titulo: novoTitulo, artista: novoArtista, duracao: novaDuracao }
                console.log(`Música "${novoTitulo}" editada com sucesso!`)
                return;
            }
        }
        console.log(`Música "${tituloEditar}" não encontrada.`)
    }

    function exibirDuracaoTotal() {
        let duracaoTotalSegundos = 0
    
        for (let i = 0; i < playlist.length; i++) {
            let duracao = playlist[i].duracao
            let minutos = 0
            let segundos = 0
            let separadorIndex = -1
    
            for (let j = 0; j < duracao.length; j++) {
                if (duracao[j] === ':') {
                    separadorIndex = j
                    break;
                }
            }
    
            if (separadorIndex !== -1) {
                for (let k = 0; k < separadorIndex; k++) {
                    minutos = minutos * 10 + (duracao[k] - '0')
                }
                for (let k = separadorIndex + 1; k < duracao.length; k++) {
                    segundos = segundos * 10 + (duracao[k] - '0')
                }
            }
    
            duracaoTotalSegundos += (minutos * 60) + segundos
        }
    
        let minutosTotais = Math.floor(duracaoTotalSegundos / 60);
        let segundosTotais = duracaoTotalSegundos % 60
        console.log(`Duração total da playlist: ${minutosTotais} minutos e ${segundosTotais} segundos`)
    }
    
gerenciarPlaylist() 

}
while (opcao !== '5') {
    opcao = prompt(`Menu:
1. Adicionar musica
2. Listar músicas
3. Remover musica
4. Editar musica
5. Exibir duracao total
6. Sair

Quantidade de musicas na playlist: ${playlist.length}
Escolha uma opção:`)

    switch(opcao) {
        case '1':
            adicionarMusica()
            break
        case '2':
            exibirPlaylist()
            break
        case '3':
            removerMusica()
            break
        case '4':
            editarMusica()
            break
        case '5':
            exibirDuracaoTotal()
            break
        case '6':
            console.log("Saindo...")
            break
        default:
            console.log("Opção inválida, tente novamente.")
    }
}
