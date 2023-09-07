// Verifica se o usuário está logado
function verificarUsuarioLogado() {
    const usuarioJSON = localStorage.getItem('usuario');
    const usuarioLogado = localStorage.getItem('usuarioLogado');
    if (usuarioJSON && usuarioLogado === 'true') {
        const usuario = JSON.parse(usuarioJSON);
        // Atualizar a barra de navegação com o nome do usuário
        const userNameElement = document.getElementById('user-name-nav');
        if (userNameElement) {
            userNameElement.textContent = usuario.nome;
        }
        // Se o usuário está logado, redirecionar para "conta.html" quando clicar em "Minha Conta"
        const linkMinhaConta = document.getElementById('minha-conta');
        linkMinhaConta.addEventListener('click', function (e) {
            e.preventDefault();
            window.location.href = 'conta.html';
        });
        // Eventos para o link "Sair da Conta"
        const linkSairConta = document.getElementById('link-sair-conta');
        if (linkSairConta) {
            linkSairConta.style.display = 'block'; // Mostrar o botão "Sair" apenas quando o usuário está logado
            linkSairConta.addEventListener('click', function (e) {
                e.preventDefault();
                sairDaConta();
            });
        }
    } else {
        // Ocultar o botão "Sair" quando o usuário não está logado
        const linkSairConta = document.getElementById('link-sair-conta');
        if (linkSairConta) {
            linkSairConta.style.display = 'none';
        }
    }
}


document.addEventListener('DOMContentLoaded', verificarUsuarioLogado);

// Função para sair da conta
function sairDaConta() {
    localStorage.setItem('usuarioLogado', 'false');
    window.location.href = 'index.html';
}