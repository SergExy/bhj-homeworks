document.addEventListener('DOMContentLoaded', () => {
  const sizeControl = Array.from(document.querySelectorAll('.font-size'));
  const book = document.getElementById('book');

  sizeControl.forEach(el => {

    el.addEventListener('click', (e) => {

      e.preventDefault();

      const { size } = el.dataset;
      const currActive = document.querySelector('.font-size_active');
      currActive.classList.remove('font-size_active');
      book.className = 'book';

      switch (size) {
        case 'small':
          el.classList.add('font-size_active');
          book.classList.add('book_fs-small');
          break;
        case 'big':
          el.classList.add('font-size_active');
          book.classList.add('book_fs-big');
          break;
      
        default:
          el.classList.add('font-size_active');
          break;
      };

    })
  });
})