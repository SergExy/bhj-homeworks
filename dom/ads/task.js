document.addEventListener('DOMContentLoaded', () => {
  const rotator = Array.from(document.querySelectorAll('.rotator__case'));
  let activeIndex = 0;

  setInterval(() => {
    rotator[activeIndex].classList.remove('rotator__case_active');

    (rotator.length - 1 <= activeIndex) ? activeIndex = 0 : activeIndex++;

    rotator[activeIndex].classList.add('rotator__case_active');
  }, 1000);
});