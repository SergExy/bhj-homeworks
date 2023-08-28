document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('tasks__form');
  const text = document.getElementById('task__input');
  const list = document.getElementById('tasks__list');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const parent = document.createElement('div');
    const title = document.createElement('div');
    const removeBtn = document.createElement('a');
    
    parent.classList.add('task');
    title.classList.add('task__title');
    title.textContent = text.value;

    removeBtn.classList.add('task__remove');
    removeBtn.innerHTML = '&times;';

    parent.appendChild(title);
    parent.appendChild(removeBtn);

    removeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      parent.remove();
    })
    
    list.appendChild(parent);
    form.reset();
  })
});