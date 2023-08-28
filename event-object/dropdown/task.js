document.addEventListener('DOMContentLoaded', () => {
  const dropBtn = Array.from(document.querySelectorAll('.dropdown__value'));
  const dropList = document.querySelector('.dropdown__list');
  const dropLinks = Array.from(document.querySelectorAll('.dropdown__link'));

  dropBtn.forEach(el => {
    el.addEventListener('click', () => {
      dropList.classList.toggle('dropdown__list_active');
    })
  });

  dropLinks.forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      
      dropBtn.forEach(btn => {
        btn.textContent = e.target.textContent;
        dropList.classList.remove('dropdown__list_active');
      });
    })
  });

})