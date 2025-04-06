document.addEventListener('DOMContentLoaded', () => {
    const show_mobile_menu = document.querySelector('.show-mobile-menu');
    const hide_mobile_menu = document.querySelector('.close-mobile-menu');
    const mobile_menu = document.querySelector('.mobile-menu');

    show_mobile_menu.addEventListener('click', () => {
        mobile_menu.classList.remove('hidden');
        mobile_menu.style.animation = 'slideUp 0.5s forwards';
    });

    hide_mobile_menu.addEventListener('click', () => {
        mobile_menu.style.animation = 'slideDown 0.5s forwards';
        setTimeout(() => {
            mobile_menu.classList.add('hidden');
        }, 500);
    });
});