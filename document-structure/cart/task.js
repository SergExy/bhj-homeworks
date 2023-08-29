document.addEventListener('DOMContentLoaded', () => {
  const dec = Array.from(document.querySelectorAll('.product__quantity-control_dec'));
  const inc = Array.from(document.querySelectorAll('.product__quantity-control_inc'));

  const addProduct = Array.from(document.querySelectorAll('.product__add'));
  const cart = document.querySelector('.cart__products');

  dec.forEach(el => {
    el.addEventListener('click', () => {
      const count = el.nextElementSibling;
      count.textContent = (count.textContent <= 1) ? 1 : --count.textContent;
    })
  })
  inc.forEach(el => {
    el.addEventListener('click', () => {
      const count = el.previousElementSibling;
      count.textContent = ++count.textContent;
    })
  })

  addProduct.forEach(el => {
    el.addEventListener('click', () => {
      const mainParent = el.closest('.product');
      const countParent = Array.from(el.previousElementSibling.children);

      const { id } = mainParent.dataset;
      const count = +countParent[1].innerText;

      const cartProduct = document.createElement('div');
      cartProduct.classList.add('cart__product');
      cartProduct.dataset.id = id;

      const cartProductCount = document.createElement('div');
      cartProductCount.classList.add('cart__product-count');
      cartProductCount.textContent = count;

      const cartProductImage = Array.from(mainParent.children)[1].cloneNode(false);
      cartProductImage.className = 'cart__product-image';

      cartProduct.appendChild(cartProductImage);
      cartProduct.appendChild(cartProductCount);

      const inCart = Array.from(cart.children);

      //проверка присутствия в коризне товара
      const productInCart = inCart.find(cartEl => id == cartEl.dataset.id);

      if (productInCart) {
        const cloneProduct = productInCart.cloneNode(true);
        const cloneCount = cloneProduct.lastElementChild;
        cloneCount.innerText = count + +cloneCount.innerText;

        productInCart.replaceWith(cloneProduct);
      } else {
        cart.appendChild(cartProduct);
      }
    })
  })
})