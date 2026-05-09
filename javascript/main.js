const courseItems = document.querySelectorAll('.curses__contnent-items');

courseItems.forEach(item => {
    const button = item.querySelector('button');

    button.addEventListener('click', () => {    
        console.log('click')
        const isOpen = item.classList.contains('active');

        courseItems.forEach(el => {
            el.classList.remove('active');
        });

        if (!isOpen) {
            item.classList.add('active');
        }
    });
});