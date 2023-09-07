// Verificar se o usuário está logado
const usuarioJSON = localStorage.getItem('usuario');
if (usuarioJSON) {
    const usuario = JSON.parse(usuarioJSON);

    // Exibe nome e email do usuário logado
    const userName = document.getElementById('user-name');
    const userEmail = document.getElementById('user-email');
    userName.textContent = usuario.nome;
    userEmail.textContent = usuario.email;

    // Formulário de cadastro de pet
    const petForm = document.getElementById('pet-form');
    petForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const petNome = document.getElementById('pet-nome').value;
        const petTipo = document.getElementById('pet-tipo').value;
        const petRaca = document.getElementById('pet-raca').value;
        const petTemperamento = document.getElementById('pet-temperamento').value;
        // Lista de pets do armazenamento local
        const petsJSON = localStorage.getItem('pets');
        const pets = petsJSON ? JSON.parse(petsJSON) : [];
        // Adicionar o novo pet
        const petData = {
            nome: petNome,
            tipo: petTipo,
            raca: petRaca,
            temperamento: petTemperamento,
        };
        pets.push(petData);
        localStorage.setItem('pets', JSON.stringify(pets));
        petForm.reset();
        alert('Pet cadastrado com sucesso!');
        location.reload();
    });
} else {
    // Se o usuário não estiver logado, redireciona para o login
    window.location.href = 'login.html';
}

// Carregar os pets do armazenamento local
function carregarPets() {
    const listaPets = document.querySelector('#lista-pets ul');
    const semPetsMsg = document.querySelector('#sem-pets-msg');
    const petsJSON = localStorage.getItem('pets');
    if (petsJSON) {
        const pets = JSON.parse(petsJSON);
        // Verifica se há pelo menos um pet
        if (pets.length > 0) {
            semPetsMsg.style.display = 'none';
            // Preencher a lista de pets
            listaPets.innerHTML = '';
            pets.forEach(pet => {
                const listItem = document.createElement('li');
                listItem.className = 'lista-pets';
                const nomeSpan = document.createElement('span');
                nomeSpan.className = 'nome';
                nomeSpan.textContent = `${pet.nome},`;
                const tipoSpan = document.createElement('span');
                tipoSpan.className = 'tipo';
                tipoSpan.textContent = `${pet.tipo},`;
                const racaSpan = document.createElement('span');
                racaSpan.className = 'raca';
                racaSpan.textContent = `${pet.raca},`;
                const temperamentoSpan = document.createElement('span');
                temperamentoSpan.className = 'temperamento';
                temperamentoSpan.textContent = `${pet.temperamento}`;
                listItem.appendChild(nomeSpan);
                listItem.appendChild(tipoSpan);
                listItem.appendChild(racaSpan);
                listItem.appendChild(temperamentoSpan);
                listaPets.appendChild(listItem);
            });
            
        } else {
            semPetsMsg.style.display = 'block'; 
        }
    } else {
        semPetsMsg.style.display = 'block';
    }
}
window.addEventListener('load', carregarPets);
