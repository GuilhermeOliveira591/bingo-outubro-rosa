
function gerarArrayNumeros(inicio, fim) {
    const numeros = [];
    for (let i = inicio; i <= fim; i++) {
        numeros.push(i);
    }
    return numeros;
}

const numeros = gerarArrayNumeros(1, 90);

const sortearBtnPalavra = document.getElementById('sortear-btn'); 
const historicoRecenteNumerosEl = document.getElementById('historico-recente-numeros');

let numerosDisponiveis = [...numeros];

let historicoNumeros = [];


function atualizarHistoricoNumeros() {
    const spans = historicoRecenteNumerosEl.getElementsByTagName('span');
    for (let i = 0; i < spans.length; i++) {
        spans[i].textContent = historicoNumeros[i] || '-';
    }
}

function sortearNumero() {
    historicoWrapperNumeros.classList.remove('hidden');
    historicoWrapperPalavras.classList.add('hidden');
    sortearBtnPalavra.disabled = true;

    if (numerosDisponiveis.length === 0) {
        globoVisualEl.textContent = "FIM!";
        sortearNumeroBtn.disabled = true; 
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * numerosDisponiveis.length);

    const numeroSorteado = numerosDisponiveis.splice(indiceSorteado, 1)[0];
    globoVisualEl.textContent = numeroSorteado;

    historicoNumeros.unshift(numeroSorteado); 
    atualizarHistoricoNumeros();
}

sortearNumeroBtn.addEventListener('click', sortearNumero);