// Data de início do relacionamento
const startDate = new Date('2007-12-20'); // Substitua pela data correta
const tempoEl = document.getElementById('tempo');

// Função para atualizar o tempo do relacionamento
function atualizarTempo() {
    const now = new Date();
    const diff = now - startDate;

    const anos = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const meses = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const dias = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diff % (1000 * 60)) / 1000);

    // Exibe o tempo formatado na tela
    tempoEl.textContent = `${anos} anos, ${meses} meses, ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}

// Atualiza o contador a cada segundo
setInterval(atualizarTempo, 1000);

// Carrossel Automático
let slideIndex = 0;
const slides = document.querySelector('.slides');

function mudarSlide() {
    const totalSlides = slides.children.length;
    slideIndex = (slideIndex + 1) % totalSlides;
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Muda de slide a cada 3 segundos
setInterval(mudarSlide, 3000);

// Função para criar corações caindo
function criarCoração() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.setProperty('--pos', Math.random());
    document.querySelector('.hearts-container').appendChild(heart);

    // Remove o coração após a animação
    setTimeout(() => {
        heart.remove();
    }, 5000); // Tempo deve coincidir com a duração da animação
}

// Cria um coração a cada 500 milissegundos
setInterval(criarCoração, 500);
