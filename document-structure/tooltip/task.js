document.addEventListener('DOMContentLoaded', () => {
  const hasTooltip = Array.from(document.querySelectorAll('.has-tooltip'));
  const body = document.querySelector('body');

  hasTooltip.forEach((el, i) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();

      const tooltipActive = document.querySelector('.tooltip_active');
      if (tooltipActive) tooltipActive.remove();

      const text = el.getAttribute('title');

      if (tooltipActive?.textContent == text) {
        return false;
      }

      const posEl = el.getBoundingClientRect();

      const tooltip = document.createElement('div');
      tooltip.textContent = text;
      tooltip.className = 'tooltip tooltip_active';
      tooltip.style.top = posEl.bottom + 'px';
      tooltip.style.left = posEl.left + 'px';

      body.appendChild(tooltip);
    })
  })
})