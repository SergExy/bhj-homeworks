document.addEventListener('DOMContentLoaded', () => {
  const reveals = Array.from(document.querySelectorAll('.reveal'));

  checkVisible(reveals);
  document.addEventListener('scroll', () => {
    checkVisible(reveals);
  });
})

function checkVisible(arr) {
  arr.forEach(el => {
    const { top, bottom } = el.getBoundingClientRect();

    if (top > 0 && top >= window.innerHeight) {
      return false;
    }
    if (bottom < 0) {
      return false;
    }

    el.classList.add('reveal_active');
  });
};
