// Sukuriame modalų turinio elementus
const modalContainer = document.createElement('div');
modalContainer.classList.add('modal-container');

const modalContent = document.createElement('div');
modalContent.classList.add('modal-content');

const modalText = document.createElement('p');
modalText.classList.add('modal-text');

const closeModalBtn = document.createElement('button');
closeModalBtn.classList.add('close-modal');
closeModalBtn.innerHTML = '&times;';

modalText.appendChild(closeModalBtn); // Pridedame išjungimo mygtuką po teksto
modalContent.appendChild(modalText); // Pridedame teksto elementą į turinio konteinerį
modalContainer.appendChild(modalContent);
document.body.appendChild(modalContainer);

// Priskiriame stilius
modalContainer.style.display = 'none';
modalContainer.style.position = 'fixed';
modalContainer.style.top = '50%';
modalContainer.style.left = '50%';
modalContainer.style.transform = 'translate(-50%, -50%)';
modalContainer.style.backgroundColor = '#fefefe';
modalContainer.style.padding = '60px'; // Padidiname padding'ą dar labiau
modalContainer.style.border = '1px solid #ccc';
modalContainer.style.zIndex = '9999';
modalContainer.style.maxWidth = '80%'; // Nustatome maksimalų modalinio lango plotį

modalContent.style.position = 'relative';
modalContent.style.display = 'flex'; // Kad elementai būtų išdėstyti vertikaliai
modalContent.style.flexDirection = 'column'; // Kad elementai būtų išdėstyti vertikaliai

modalText.style.fontSize = '20px'; // Padidiname teksto dydį

closeModalBtn.style.marginTop = '10px'; // Pridedame tarpelį tarp teksto ir išjungimo mygtuko
closeModalBtn.style.fontSize = '24px'; // Padidiname migtuko dydį
closeModalBtn.style.border = 'none';
closeModalBtn.style.backgroundColor = 'transparent';
closeModalBtn.style.cursor = 'pointer';

// Funkcija, kuri rodo modalą su nurodytu tekstu
function showModal(text) {
    modalText.textContent = text;
    modalContainer.style.display = 'block';
}

// Funkcija, kuri paslepia modalą
function hideModal() {
    modalContainer.style.display = 'none';
}

// Pridedame reakciją į migtuko paspaudimą
closeModalBtn.addEventListener('click', hideModal);

// Pridedame reakciją į paspaudimą bet kurioje vietoje
modalContainer.addEventListener('click', function(event) {
    if (event.target === modalContainer) {
        hideModal();
    }
});

// Eksportuojame funkciją, kad būtų prieinama kituose failuose
export { showModal, hideModal };
