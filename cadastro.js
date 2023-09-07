// Botão do cadastro
const cadastrarButton = document.getElementById('cadastrar-button');
cadastrarButton.addEventListener('click', function () {
    const nome = document.getElementById('nome').value;
    const dataNascimento = document.getElementById('data-nascimento').value;
    const cpf = document.getElementById('cpf').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const repetirSenha = document.getElementById('repetir-senha').value;
    const cep = document.getElementById('cep').value;
    const cidade = document.getElementById('cidade').value;
    const rua = document.getElementById('rua').value;
    const numero = document.getElementById('numero').value;
    const bairro = document.getElementById('bairro').value;
    // Verifica se as senhas são iguais
    if (senha !== repetirSenha) {
        alert('As senhas não coincidem. Por favor, verifique.');
        return;
    }

    // Cria um objeto com os dados do usuário
    const usuario = {
        nome,
        dataNascimento,
        cpf,
        telefone,
        email,
        senha,
        cep,
        cidade,
        rua,
        numero,
        bairro,
    };

    // Armazena no armazenamento local
    localStorage.setItem('usuario', JSON.stringify(usuario));
    localStorage.setItem('usuarioLogado', 'true');
    alert('Cadastro realizado com sucesso!');

    // Redirecionar o usuário para a página de login
    window.location.href = 'login.html';
});
