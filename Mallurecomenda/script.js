const tooltip = document.getElementById('tooltip-resumo');

// Criar o fundo escuro (overlay) se ele ainda não existir no HTML
let overlay = document.getElementById('overlay-screen');
if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'overlay-screen';
    document.body.appendChild(overlay);
}

const cards = document.querySelectorAll('.book-card');

cards.forEach(card => {
    // Agora usamos 'click' em vez de 'mouseenter'
    card.addEventListener('click', (e) => {
        const resumo = card.getAttribute('data-resumo');
        const imagemSrc = card.querySelector('.book-image').src;
        const titulo = card.querySelector('h3').innerText;

        tooltip.innerHTML = `
            <img src="${imagemSrc}" alt="${titulo}">
            <h2>${titulo}</h2>
            <p>${resumo}</p>
            <button id="close-btn" style="margin-top:20px; cursor:pointer; padding:10px 20px; border-radius:5px; border:none; background:var(--accent-color); color:white;">Fechar</button>
        `;

        tooltip.classList.add('active');
        overlay.classList.add('active');
    });
});

// Função para fechar ao clicar no fundo ou no botão de fechar
function fecharResumo() {
    tooltip.classList.remove('active');
    overlay.classList.remove('active');
}

overlay.addEventListener('click', fecharResumo);

// Usando delegação de evento para o botão que é criado dinamicamente
tooltip.addEventListener('click', (e) => {
    if (e.target.id === 'close-btn') {
        fecharResumo();
    }
});