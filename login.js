// Elementos do formulário
const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const senhaInput = document.getElementById('senha');
// Evento do formuário
form.addEventListener('submit', function (e) {
    e.preventDefault(); 
    const email = emailInput.value;
    const senha = senhaInput.value;

    // Verifica se o usuário existe no armazenamento local
    const usuarioJSON = localStorage.getItem('usuario');
    if (usuarioJSON) {
        const usuario = JSON.parse(usuarioJSON);
        if (email === usuario.email && senha === usuario.senha) {
            alert('Login bem-sucedido! Redirecionando para a página principal...');
            window.location.href = 'index.html';
            localStorage.setItem('usuarioLogado', 'true');
            const linkMinhaConta = document.getElementById('account-link');
            linkMinhaConta.addEventListener('click', function (e) {
                e.preventDefault();
                window.location.href = 'conta.html';
            });
        } else {
            alert('Login falhou. Por favor, verifique suas credenciais.');
        }
    } else {
        alert('Nenhum usuário cadastrado. Por favor, faça o cadastro primeiro.');
    }
});
