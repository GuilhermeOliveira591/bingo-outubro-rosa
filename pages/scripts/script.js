// Banco de palavras validado na proposta
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

// Elementos da página
// const palavraAtualEl = document.getElementById('palavra-atual'); // REMOVIDA
const sortearBtn = document.getElementById('sortear-btn');
const historicoRecenteEl = document.getElementById('historico-recente');
const globoVisualEl = document.getElementById('globo-visual');

// Variáveis de controle do jogo
let palavrasDisponiveis = [...palavras];
let historicoPalavras = [];

// Função para atualizar o histórico na tela (as 3 últimas palavras)
function atualizarHistorico() {
    const spans = historicoRecenteEl.getElementsByTagName('span');
    for (let i = 0; i < spans.length; i++) {
        spans[i].textContent = historicoPalavras[i] || '-';
    }
}

// Função principal do sorteio
function sortearPalavra() {
    if (palavrasDisponiveis.length === 0) {
        // palavraAtualEl.textContent = "FIM!"; // REMOVIDA
        globoVisualEl.textContent = "FIM!"; // O globo agora mostra a mensagem final
        sortearBtn.disabled = true;
        return;
    }

    // Pega um índice aleatório da lista de palavras disponíveis
    const indiceSorteado = Math.floor(Math.random() * palavrasDisponiveis.length);
    
    // Remove a palavra da lista de disponíveis e a guarda
    const palavraSorteada = palavrasDisponiveis.splice(indiceSorteado, 1)[0];

    // Atualiza a tela
    // palavraAtualEl.textContent = palavraSorteada; // REMOVIDA
    globoVisualEl.textContent = palavraSorteada; // A palavra aparece apenas no globo

    // Adiciona ao início do histórico
    historicoPalavras.unshift(palavraSorteada);

    // Atualiza o visual do histórico
    atualizarHistorico();
}

// Adiciona o evento de clique ao botão
sortearBtn.addEventListener('click', sortearPalavra);