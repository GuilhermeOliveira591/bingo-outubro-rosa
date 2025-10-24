// Gera um array de números de 'inicio' a 'fim'
function gerarArrayNumeros(inicio, fim) {
    const numeros = [];
    for (let i = inicio; i <= fim; i++) {
        numeros.push(i);
    }
    return numeros;
}

// Banco de números para o bingo
const numeros = gerarArrayNumeros(1, 90);

const TAMANHO_CARTELA_NUMEROS = 25;
const POSICAO_GRATIS_NUMEROS = 12; // Posição central (índice 12 em um array de 25)

// Função para embaralhar um array (algoritmo Fisher-Yates)
function embaralharNumeros(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/**
 * Cria e retorna um elemento <table> representando uma cartela de bingo de números.
 * A cartela é uma grade 5x5 com 24 números aleatórios (de 1 a 90) e um espaço grátis no centro.
 * @returns {HTMLTableElement} O elemento da tabela da cartela de bingo.
 */
function criarTabelaCartelaNumeros() {
    const numerosEmbaralhados = embaralharNumeros([...numeros]);
    // Pega os primeiros 24 números para a cartela
    const numerosDaCartela = numerosEmbaralhados.slice(0, TAMANHO_CARTELA_NUMEROS - 1);

    const tabela = document.createElement('table');
    tabela.className = 'bingo-card'; // Adiciona uma classe para estilização futura

    for (let i = 0; i < 5; i++) {
        const row = tabela.insertRow();
        for (let j = 0; j < 5; j++) {
            const cell = row.insertCell();
            const indiceAtual = i * 5 + j;

            if (indiceAtual === POSICAO_GRATIS_NUMEROS) {
                cell.textContent = "GRÁTIS";
                cell.classList.add('free-space');
            } else {
                // Ajusta o índice para pegar da lista de 24 números
                const indiceNumero = indiceAtual < POSICAO_GRATIS_NUMEROS ? indiceAtual : indiceAtual - 1;
                cell.textContent = numerosDaCartela[indiceNumero];
            }
        }
    }
    return tabela;
}

function gerarCartelasNumerosEmMassa(containerImpressao, quantidade) {
    containerImpressao.innerHTML = '';

    for (let i = 1; i <= quantidade; i++) {
        const cartelaDiv = document.createElement('div');
        cartelaDiv.className = 'cartela-impressao';
        
        const tituloCartela = document.createElement('p');
        tituloCartela.className = 'cartela-titulo';
        tituloCartela.textContent = `Cartela Nº ${i}`;
        
        const novaTabela = criarTabelaCartelaNumeros();
        
        cartelaDiv.appendChild(tituloCartela);
        cartelaDiv.appendChild(novaTabela);
        
        containerImpressao.appendChild(cartelaDiv);
    }
}