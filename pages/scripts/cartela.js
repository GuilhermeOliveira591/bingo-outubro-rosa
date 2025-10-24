// Banco de palavras
const palavras = [
    "Prevenção", "Cuidado", "Vida", "Amor", "Apoio", "Família", "Esperança", 
    "Mamografia", "Consciência", "Saúde", "Outubro Rosa", "Laço Rosa", 
    "Autoexame", "Força", "Coragem", "Superação", "União", "Solidariedade", 
    "Informação", "Cura", "Respeito", "Bem-estar", "Vitória", "Exame", 
    "Toque", "Mulher", "Empatia", "Luta", "Abraço", "Amizade", "Proteção", 
    "Atitude", "Confiança", "Fé", "Recomeço", "Sobrevivente", "Resiliência", 
    "Acolhimento", "Juntos", "Conhecimento", "Celebração", "Inspiração", 
    "Movimento", "Viver", "Florescer", "Campanha","Conscientização", "Divulgação", 
    "Participar", "Ajudar", "Doar", "Evento", "Palestra", "Caminhada", "Iluminação", 
    "Rastreamento", "Comunicação", "Ensinar", "Aprender", "Carinho", "Afeto", 
    "Companheirismo", "Humanização", "Escuta", "Generosidade", "Rede", "Amparo",
    "Gentileza", "Compreensão", "Ouvir", "Partilha", "Causa","Otimismo", "Paciência",
    "Determinação", "Motivação", "Beleza", "Autoestima", "Alegria", "Paz", "Futuro",
    "Renascer", "Chance", "Vencedora", "Rosa", "Exemplo", "Sorriso", "Gratidão", "Riso", 
    "Remissão", "Caminho", "Dignidade", "Luz", "Laços","Encontro","Aliança","Sintonia",
    "Vínculo", "Prosperar","Sucesso"
];

const TAMANHO_CARTELA = 25;
const POSICAO_GRATIS = 12;

function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function criarTabelaCartela() {
    const palavrasEmbaralhadas = embaralhar([...palavras]);
    const palavrasDaCartela = palavrasEmbaralhadas.slice(0, TAMANHO_CARTELA - 1);
    const tabela = document.createElement('table');
    tabela.className = 'bingo-card';

    for (let i = 0; i < 5; i++) {
        const row = tabela.insertRow();
        for (let j = 0; j < 5; j++) {
            const cell = row.insertCell();
            const indiceAtual = i * 5 + j;

            if (indiceAtual === POSICAO_GRATIS) {
                cell.textContent = "ESPAÇO GRÁTIS";
                cell.classList.add('free-space');
            } else {
                const indicePalavra = indiceAtual < POSICAO_GRATIS ? indiceAtual : indiceAtual - 1;
                cell.textContent = palavrasDaCartela[indicePalavra];
            }
        }
    }
    return tabela;
}

function gerarCartelasPalavrasEmMassa(containerImpressao, quantidade) {
    containerImpressao.innerHTML = '';

    for (let i = 1; i <= quantidade; i++) {
        const cartelaDiv = document.createElement('div');
        cartelaDiv.className = 'cartela-impressao';
        
        const tituloCartela = document.createElement('p');
        tituloCartela.className = 'cartela-titulo';
        tituloCartela.textContent = `Cartela Nº ${i}`;
        
        const novaTabela = criarTabelaCartela();
        
        cartelaDiv.appendChild(tituloCartela);
        cartelaDiv.appendChild(novaTabela);
        
        containerImpressao.appendChild(cartelaDiv);
    }
}