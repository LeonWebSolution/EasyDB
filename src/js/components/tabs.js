export class Tabs {
  constructor() {
      document.addEventListener("DOMContentLoaded", () => {
          this.initTabs();
      });
  }

  initTabs() {
      var goTopButton = document.querySelector('.footer__go-top');

      // Проверяем, существует ли кнопка
      if (goTopButton) {
          goTopButton.addEventListener('click', function() {
              // Используем плавный скроллинг к верху страницы
              window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
              });
          });
      }
  }
}
