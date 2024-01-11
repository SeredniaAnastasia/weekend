
const searchBtn = document.querySelector('.header__search-btn');
const searchInput = document.querySelector('.header__search');

searchBtn?.setAttribute('aria-label', 'Відкрити поле пошуку')

searchBtn?.addEventListener('click', function(){
  searchInput?.classList.toggle('header__search--active')
  this.classList.toggle('header__search-btn--active')
  if (this.classList.contains('header__search-btn--active')) {
    this.setAttribute('aria-expanded', 'true')
    this.setAttribute('aria-label', 'Закрити поле пошуку')
    
        } else {
          this.setAttribute('aria-expanded', 'false')
          this.setAttribute('aria-label', 'Відкрити поле пошуку')
        }
})
