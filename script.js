//Modal query slectors

modal = document.querySelector('.modal');
modalTitle = document.querySelector('.modal-title');
modalContent = document.querySelector('.modal-content');

//Open Modal
function openModal(modal_title, modal_content) {
    modalTitle.innerHTML = modal_title + ' <button type="button" button onclick="closeModal();"> X </button>';
    modalContent.innerHTML = modal_content;

    if(modal.style.display == 'block') {
        //Modal off
        closeModal();
    } else {
        //Modal on
        modal.style.display = 'block';
    }
}
//Close modal 
function closeModal() {
    modal.style.display = 'none';

    //modal data reset
    modalTitle.innerHTML = '';
    modalContent.innerHTML = '';
}








