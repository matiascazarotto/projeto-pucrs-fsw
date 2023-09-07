// Lista atual de pets do armazenamento local
const petsJSON = localStorage.getItem('pets');
const pets = petsJSON ? JSON.parse(petsJSON) : [];

// Selecionar o elemento do dropdown
const petDropdown = document.getElementById('pet');

// Input selecionar pet
const inputPet = document.createElement('option');
inputPet.textContent = 'Selecione um Pet';
petDropdown.appendChild(inputPet);

// Dropdown com os pets cadastrados
pets.forEach(pet => {
    const opcoes = document.createElement('option');
    opcoes.value = pet.nome;
    opcoes.textContent = pet.nome;
    petDropdown.appendChild(opcoes);
});
