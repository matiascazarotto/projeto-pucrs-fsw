// Input Buscar
const searchInput = document.getElementById('input-buscar');
searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();
    const items = document.querySelectorAll('.produto, .container-servicos');
    items.forEach((item) => {
        const descricao = item.querySelector('.descricaoProduto, .descricaoServico');
        if (descricao) {
            const texto = descricao.textContent.toLowerCase();
            if (texto.includes(searchTerm)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        }
    });
});

// Seleciona os elementos de link do menu
const linkProdutos = document.getElementById('link-produtos');
const linkServicos = document.getElementById('link-servicos');

// Seleciona os containers de produtos e serviços
const containersProdutos = document.querySelectorAll('.container-produtos');
const containersServicos = document.querySelectorAll('.container-servicos');

// Eventos para o link de produtos
linkProdutos.addEventListener('click', (e) => {
    e.preventDefault();
    containersProdutos.forEach(container => {
        container.classList.remove('escondido');
    });
    containersServicos.forEach(container => {
        container.classList.add('escondido');
    });
    linkProdutos.classList.add('ativo');
    linkServicos.classList.remove('ativo');
});

// Eventos para o link de serviços
linkServicos.addEventListener('click', (e) => {
    e.preventDefault();
    containersProdutos.forEach(container => {
        container.classList.add('escondido');
    });
    containersServicos.forEach(container => {
        container.classList.remove('escondido');
    });
    linkServicos.classList.add('ativo');
    linkProdutos.classList.remove('ativo');
});
containersProdutos.forEach(container => {
    container.classList.remove('escondido');
});
containersServicos.forEach(container => {
    container.classList.add('escondido');
});


// Botão agendamento
const btnAgendamento = document.getElementById('btn-agendamento');
    btnAgendamento.addEventListener('click', function () {
        window.location.href = 'agendamento.html';
    });