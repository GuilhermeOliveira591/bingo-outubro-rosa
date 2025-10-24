
const palavras = [
    "Prevenção", "Cuidado", "Vida", "Amor", "Apoio", "Família", "Esperança",
    "Mamografia", "Consciência", "Saúde", "Outubro Rosa", "Laço Rosa",
    "Autoexame", "Força", "Coragem", "Superação", "União", "Solidariedade",
    "Informação", "Cura", "Respeito", "Bem-estar", "Vitória", "Exame",
    "Toque", "Mulher", "Empatia", "Luta", "Abraço", "Amizade", "Proteção",
    "Atitude", "Confiança", "Fé", "Recomeço", "Sobrevivente", "Resiliência",
    "Acolhimento", "Juntos", "Conhecimento", "Celebração", "Inspiração",
    "Movimento", "Viver", "Florescer", "Campanha", "Conscientização", "Divulgação",
    "Participar", "Ajudar", "Doar", "Evento", "Palestra", "Caminhada", "Iluminação",
    "Rastreamento", "Comunicação", "Ensinar", "Aprender", "Carinho", "Afeto",
    "Companheirismo", "Humanização", "Escuta", "Generosidade", "Rede", "Amparo",
    "Gentileza", "Compreensão", "Ouvir", "Partilha", "Causa", "Otimismo", "Paciência",
    "Determinação", "Motivação", "Beleza", "Autoestima", "Alegria", "Paz", "Futuro",
    "Renascer", "Chance", "Vencedora", "Rosa", "Exemplo", "Sorriso", "Gratidão", "Riso",
    "Remissão", "Caminho", "Dignidade", "Luz", "Laços", "Encontro", "Aliança", "Sintonia",
    "Vínculo", "Prosperar", "Sucesso"
];

const sortearBtn = document.getElementById('sortear-btn');
const sortearNumeroBtn = document.getElementById('sortear-numero-btn');
const historicoRecenteEl = document.getElementById('historico-recente');
const globoVisualEl = document.getElementById('globo-visual');
const historicoWrapperPalavras = document.getElementById('historico-wrapper-palavras');
const historicoWrapperNumeros = document.getElementById('historico-wrapper-numeros');

let palavrasDisponiveis = [...palavras];
let historicoPalavras = [];

function atualizarHistorico() {
    const spans = historicoRecenteEl.getElementsByTagName('span');
    for (let i = 0; i < spans.length; i++) {
        spans[i].textContent = historicoPalavras[i] || '-';
    }
}

function sortearPalavra() {
    historicoWrapperPalavras.classList.remove('hidden'); 
    historicoWrapperNumeros.classList.add('hidden');
    sortearNumeroBtn.disabled = true;

    if (palavrasDisponiveis.length === 0) {
        globoVisualEl.textContent = "FIM!"; 
        sortearBtn.disabled = true;
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * palavrasDisponiveis.length);

    const palavraSorteada = palavrasDisponiveis.splice(indiceSorteado, 1)[0];

    globoVisualEl.textContent = palavraSorteada; 

    historicoPalavras.unshift(palavraSorteada);

    atualizarHistorico();
}

sortearBtn.addEventListener('click', sortearPalavra);