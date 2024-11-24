let playlist = [];
let opcao = '';

function adicionarMusica() {
    let titulo = prompt("Digite o titulo da musica:");
    let artista = prompt("Digite o nome do artista:");
    let duracao = prompt("Digite a duracao da musica (min:seg):");
    playlist.push({ titulo, artista, duracao });
    console.log(`Musica "${titulo}" adicionada com sucesso!`);
}

function listarMusica() {
    if (playlist.length === 0) {
        console.log("A playlist está vazia.");
        return; // Adicionado para evitar exibir a mensagem "Playlist:" sem músicas.
    }

    let mensagem = "Playlist:\n";
    for (let i = 0; i < playlist.length; i++) {
        mensagem += `${i + 1}. ${playlist[i].titulo} - ${playlist[i].artista} (${playlist[i].duracao})\n`;
    }
    console.log(mensagem);
}

function removerMusica() {
    let tituloRemover = prompt("Digite o título exato da musica a ser removida:");
    let novaPlaylist = [];
    let encontrada = false;

    for (let i = 0; i < playlist.length; i++) {
        if (playlist[i].titulo !== tituloRemover) {
            novaPlaylist.push(playlist[i]);
        } else {
            encontrada = true;
        }
    }

    if (encontrada) {
        playlist = novaPlaylist;
        console.log(`Musica "${tituloRemover}" removida com sucesso!`);
    } else {
        console.log(`Musica "${tituloRemover}" nao encontrada.`);
    }
}

function editarMusica() {
    let tituloEditar = prompt("Digite o titulo exato da musica a ser editada:");
    for (let i = 0; i < playlist.length; i++) {
        if (playlist[i].titulo === tituloEditar) {
            let novoTitulo = prompt("Digite o novo título da musica:");
            let novoArtista = prompt("Digite o novo nome do artista:");
            let novaDuracao = prompt("Digite a nova duracao da musica (min:seg):");
            playlist[i] = { titulo: novoTitulo, artista: novoArtista, duracao: novaDuracao };
            console.log(`Musica "${novoTitulo}" editada com sucesso!`);
            return;
        }
    }
    console.log(`Musica "${tituloEditar}" nao encontrada.`);
}

function exibirDuracaoTotal() {
    let duracaoTotalSegundos = 0;

    for (let i = 0; i < playlist.length; i++) {
        let duracao = playlist[i].duracao;
        let minutos = 0;
        let segundos = 0;
        let separadorIndex = -1;

        for (let j = 0; j < duracao.length; j++) {
            if (duracao[j] === ':') {
                separadorIndex = j;
                break;
            }
        }

        if (separadorIndex !== -1) {
            for (let k = 0; k < separadorIndex; k++) {
                minutos = minutos * 10 + (duracao[k] - '0');
            }
            for (let k = separadorIndex + 1; k < duracao.length; k++) {
                segundos = segundos * 10 + (duracao[k] - '0');
            }
        }

        duracaoTotalSegundos += (minutos * 60) + segundos;
    }

    let minutosTotais = duracaoTotalSegundos / 60;
    let segundosTotais = duracaoTotalSegundos % 60;

    let minutosInteiros = parseInt(minutosTotais);
    let segundosRestantes = duracaoTotalSegundos - minutosInteiros * 60;

    console.log(`Duracao total da playlist: ${minutosInteiros} minutos e ${segundosRestantes} segundos`);
}

function gerenciarPlaylist() {
    while (opcao !== '6') {
        opcao = prompt(`Menu:
1. Adicionar musica
2. Listar musicas
3. Remover musica
4. Editar musica
5. Exibir duracao total
6. Sair

Quantidade de musicas na playlist: ${playlist.length}
Escolha uma opcao:`);

        switch (opcao) {
            case '1':
                adicionarMusica();
                break;
            case '2':
                listarMusica();
                break;
            case '3':
                removerMusica();
                break;
            case '4':
                editarMusica();
                break;
            case '5':
                exibirDuracaoTotal();
                break;
            case '6':
                console.log("Saindo...");
                break;
            default:
                console.log("Opcao invalida, tente novamente.");
        }
    }
}

gerenciarPlaylist();
