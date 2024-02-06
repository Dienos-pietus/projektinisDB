const modalContainer = document.createElement('div');
modalContainer.classList.add('modal-container');

const modalContent = document.createElement('div');
modalContent.classList.add('modal-content');

const modalText = document.createElement('p');
modalText.classList.add('modal-text');

const closeModalBtn = document.createElement('button');
closeModalBtn.classList.add('close-modal');
closeModalBtn.innerHTML = '&times;';

modalText.appendChild(closeModalBtn); 
modalContent.appendChild(modalText); 
modalContainer.appendChild(modalContent);
document.body.appendChild(modalContainer);


modalContainer.style.display = 'none';
modalContainer.style.position = 'fixed';
modalContainer.style.top = '50%';
modalContainer.style.left = '50%';
modalContainer.style.transform = 'translate(-50%, -50%)';
modalContainer.style.backgroundColor = '#fefefe';
modalContainer.style.padding = '60px'; 
modalContainer.style.border = '1px solid #ccc';
modalContainer.style.zIndex = '9999';
modalContainer.style.maxWidth = '80%'; 

modalContent.style.position = 'relative';
modalContent.style.display = 'flex'; 
modalContent.style.flexDirection = 'column'; 

modalText.style.fontSize = '20px'; 

closeModalBtn.style.marginTop = '10px';
closeModalBtn.style.fontSize = '24px';
closeModalBtn.style.border = 'none';
closeModalBtn.style.backgroundColor = 'transparent';
closeModalBtn.style.cursor = 'pointer';

// Funkcija, kuri rodo modalą su nurodytu tekstu
function showModal(text) {
    modalText.textContent = text;
    modalContainer.style.display = 'block';
}


function hideModal() {
    modalContainer.style.display = 'none';
}

closeModalBtn.addEventListener('click', hideModal);

modalContainer.addEventListener('click', function(event) {
    if (event.target === modalContainer) {
        hideModal();
    }
});

export { showModal, hideModal };
