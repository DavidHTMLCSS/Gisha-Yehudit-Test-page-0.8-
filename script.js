// Функция для проверки видимости элемента
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Анимация появления элементов при прокрутке
function handleScrollAnimation() {
    document.querySelectorAll('.image-about-us, .image-rav, .home-logo, .content h1').forEach(el => {
        if (isElementInViewport(el) && !el.classList.contains('visible')) {
            el.classList.add('visible');
        }
    });
}

// Обработка события прокрутки
window.addEventListener('scroll', handleScrollAnimation);

// Запуск анимации при загрузке страницы
document.addEventListener('DOMContentLoaded', handleScrollAnimation);
