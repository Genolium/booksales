document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]'); // Выбираем все ссылки с #
  
    for (const link of links) {
      link.addEventListener('click', function(event) {
        event.preventDefault(); // Отменяем стандартное поведение ссылки
        const targetId = this.getAttribute('href'); // Получаем ID целевого элемента
        const targetElement = document.querySelector(targetId); // Находим целевой элемент
  
        window.scrollTo({
          top: targetElement.offsetTop, // Прокручиваем страницу к целевому элементу
          behavior: 'smooth' // Плавная прокрутка
        });
      });
    }
  });

const auth = document.getElementById('auth');
if (document.cookie.includes('loggedIn=true')) {
  auth.textContent = 'Выход';
    auth.addEventListener('click', () => {
      document.cookie = "loggedIn=; max-age=0; path=/";
      window.location.href = 'index.html'; 
    });
} 
else{
  auth.textContent = 'Авторизация';
  auth.href = 'auth.html';
}