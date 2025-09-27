// Скрипт для скрытия картинки при прокрутке (уход влево)
document.addEventListener('DOMContentLoaded', function() {
    const firstScreen = document.querySelector('.first-screen');
    
    function handleScroll() {
        const firstScreenBottom = firstScreen.offsetTop + firstScreen.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight;
        
        // Если прокрутили дальше первого экрана - уводим картинку влево
        if (scrollPosition > firstScreenBottom + 50) {
            document.body.classList.add('scrolled');
        } else {
            document.body.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll(); // Инициализация при загрузке
});