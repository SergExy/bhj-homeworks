document.addEventListener('DOMContentLoaded', () => {
  const xhr = new XMLHttpRequest();
  const signin = document.getElementById('signin');
  const form = document.getElementById('signin__form');
  const welcome = document.getElementById('welcome');
  const userIdEl = document.getElementById('user_id');

  const userId = localStorage.userId;

  if (userId) {

    userIdEl.innerText = userId;
    signin.classList.remove('signin_active');
    welcome.classList.add('welcome_active');

  } else {

    form.onsubmit = (e) => {
      e.preventDefault();
      const formData = new FormData(form);

      xhr.onreadystatechange = () => {
        if (xhr.readyState === xhr.DONE) {
          const res = JSON.parse(xhr.responseText);

          if (!xhr.status.toString().startsWith('20')) return alert('Не удалось авторизоваться');

          if (!res.success) {
            return alert('Неверный логин/пароль');
          }

          userIdEl.innerText = res.user_id;
          signin.classList.remove('signin_active');
          welcome.classList.add('welcome_active');
          localStorage.userId = res.user_id;

        }
      }

      xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
      xhr.send(formData);
      form.reset();
    }

  }
})