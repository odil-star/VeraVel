const phoneInput = document.querySelector('.phone-input');
const emailInput = document.querySelector('.email-input');

const modalBtns = document.querySelectorAll('.modal-btn');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');
const modalOverlay = document.querySelector('.modal__overflay');
const modalContent = document.querySelector('.modal__content');

if (phoneInput) {
    phoneInput.addEventListener('input', () => {
        let numbers = phoneInput.value.replace(/\D/g, '');

        if (!numbers.startsWith('7')) {
            numbers = '7' + numbers;
        }

        numbers = numbers.substring(0, 11);

        let result = '+7';

        if (numbers.length > 1) {
            result += ' (' + numbers.substring(1, 4);
        }

        if (numbers.length >= 4) {
            result += ') ' + numbers.substring(4, 7);
        }

        if (numbers.length >= 7) {
            result += '-' + numbers.substring(7, 9);
        }

        if (numbers.length >= 9) {
            result += '-' + numbers.substring(9, 11);
        }

        phoneInput.value = result;
    });

    phoneInput.addEventListener('focus', () => {
        if (phoneInput.value === '') {
            phoneInput.value = '+7 ';
        }
    });
}

if (emailInput) {
    emailInput.addEventListener('input', () => {
        emailInput.value = emailInput.value.replace(/[^\w@.-]/g, '');
    });
}

function openModal() {
    if (!modal) return;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

modalBtns.forEach(btn => {
    btn.addEventListener('click', openModal);
});

if (modalClose) {
    modalClose.addEventListener('click', closeModal);
}

if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
}
if (modalContent) {
    modalContent.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}