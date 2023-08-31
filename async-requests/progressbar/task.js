document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form');
  const progress = document.getElementById('progress');
  const xhr = new XMLHttpRequest();

  form.onsubmit = (e) => {
    e.preventDefault();
    let maxValue = 0;

    xhr.onreadystatechange = () => {
      const proUp = setInterval(() => {
        if (progress.value < maxValue) {
          progress.value += 0.1;
        } else {
          clearInterval(proUp);
        }
      }, 100);

      if (xhr.readyState === xhr.OPENED) {
        progress.value = 0;
        maxValue = 0.25;
      }
      if (xhr.readyState === xhr.HEADERS_RECEIVED) {
        maxValue = 0.50;
      }
      if (xhr.readyState === xhr.LOADING) {
        maxValue = 0.75;
      }
      if (xhr.readyState === xhr.DONE) {
        maxValue = 1;
      }
    }

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    let formData = new FormData(form);
    console.log(formData);
    xhr.send(formData);
  }
})