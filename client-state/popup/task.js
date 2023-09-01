document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('subscribe-modal');
  const modalClose = document.querySelector('.modal__close');

  if (!getCookie('modal')) {
    setTimeout(() => {
      modal.classList.add('modal_active');
    }, 1000);
  }

  modalClose.onclick = () => {
    document.cookie = `modal=true`
    modal.classList.remove('modal_active');
  }
})

function getCookie(name) {
  const cookiesArr = document.cookie.split(';');
  const cookie = cookiesArr.find(el => el.startsWith(`${name}=`));

  return cookie ? cookie.substring(name.length + 1) : false;
}