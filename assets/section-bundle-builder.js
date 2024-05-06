const addedProducts = {};


const bundleList = {
  productId: 'data-product-id',
  productTitle: 'data-bundleBuilder-title',
  productPrice: 'data-bundleBuilder-price',
  productInformation: '.card-information',
  removeProduct: '[data-bundleBuilder="removeProduct"]'
};

const asideObj = {
  aside: '.bundle-builder-aside',
  totals: '.bundle-builder-aside--totals',
  products: '.bundle-builder-aside--products',
  noProducts: '.bundle-builder-aside--products--no-products',
  btn: '.product-form__submit',
  btnRemove: '.bundle-builder-form--resetAll'
}

init();

function init() {
  const productDivs = document.querySelectorAll('[data-bundleBuilder="product"]');
  
  productDivs.forEach(div => {
    div.addEventListener('click', handleProductClick);
  });
}

function showToast(message) {
  const activeToast = document.querySelector('.toast');

  if (activeToast) {
    activeToast.remove();
  }

  const toast = document.createElement('div');
  toast.classList.add('toast');

  const messageDiv = document.createElement('div');
  messageDiv.classList.add('toast-message');
  messageDiv.textContent = message;

  const closeBtn = document.createElement('span');
  closeBtn.classList.add('close-btn');
  closeBtn.textContent = 'x';
  closeBtn.addEventListener('click', function() {
    toast.remove();
  });

  toast.appendChild(messageDiv);
  toast.appendChild(closeBtn);

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}


function formatPrice(price) {
  return new Intl.NumberFormat('it-IT', { style: 'currency', currency: window.Shopify.currency.active }).format(price).replace(/\s/g, '');
}

function handleProductClick(event) {
  event.preventDefault();
  toggleAside(true);
  const productId = this.getAttribute(bundleList.productId);
  const productTitle = this.getAttribute(bundleList.productTitle);
  const productPrice = this.getAttribute(bundleList.productPrice);
  const productInformation = this.querySelector(bundleList.productInformation).innerHTML;
  const removeProduct = this.querySelector(bundleList.removeProduct);

  if (!this.classList.contains('added')) {
    addProductBundle(this, productId, productTitle, productPrice, productInformation, removeProduct);
  } else {
    removeProductBundle(this, productId, removeProduct);
  }
}

function addProductToForm(productId, productTitle) {
  const form = document.querySelector('.bundle-builder-form');
  const productInfoDiv = document.createElement('div');
  productInfoDiv.classList.add('bundle-builder-aside--product');
  productInfoDiv.id = `product-info-${productId}`;
  productInfoDiv.innerHTML = `
    <input type="hidden" name="id" value="${productId}" />
    <input type="hidden" min="1" type="number" id="quantity" name="quantity" value="1"/>
    <input type="hidden" name="properties[From]" value="bundle-builder" />
  `;
  form.appendChild(productInfoDiv);
}

function toggleAside(showProducts) {
  const aside = document.querySelector(asideObj.aside);
  const totals = document.querySelector(asideObj.totals);
  const products = document.querySelector(asideObj.products);
  const noProducts = document.querySelector(asideObj.noProducts);
  const btn = document.querySelector(asideObj.btn);
  const btnRemove = document.querySelector(asideObj.btnRemove)

  if (showProducts) {
      totals.classList.remove('visually-hidden');
      products.classList.remove('visually-hidden');
      noProducts.classList.add('visually-hidden');
      btn.disabled = false;
      btnRemove.disabled = false;

      btn.value = aside_addForm;
  } else {
      totals.classList.add('visually-hidden');
      products.classList.add('visually-hidden');
      noProducts.classList.remove('visually-hidden');

      btn.disabled = true;
      btnRemove.disabled = true;
      btn.value = aside_defaultForm;
  }
}

function addProductBundle(productDiv, productId, productTitle, productPrice, productInformation,removeProduct) {
  productDiv.classList.add('added');
  productDiv.setAttribute('data-bundleBuilder-added', 'true');
  removeProduct.classList.remove('visibility-hidden');

  showToast(`Hai aggiunto ${productTitle}`);
  addedProducts[productId] = { title: productTitle, price: productPrice };
  updateTotalPrice();
  addProductToForm(productId, productTitle, productPrice);
  

  const productPreviewDiv = document.createElement('div');
  productPreviewDiv.classList.add('bundle-builder-aside--product');
  productPreviewDiv.innerHTML = `<p>${productTitle}</p>${productInformation}`;
  productPreviewDiv.id = `product-preview-${productId}`;
  const productImageView = document.querySelector('.bundle-builder-aside--products');
  productImageView.appendChild(productPreviewDiv);
  updateTotal();
}


function removeProductBundle(productDiv, productId, removeProduct) {
  productDiv.classList.remove('added');
  productDiv.removeAttribute('data-bundleBuilder-added');
  removeProduct.classList.add('visibility-hidden');

  delete addedProducts[productId];
  const productInfoDivToRemove = document.getElementById(`product-info-${productId}`);
  productInfoDivToRemove.remove();
  const productPreviewDiv = document.getElementById(`product-preview-${productId}`);
  productPreviewDiv.remove();
  if (Object.keys(addedProducts).length === 0) {
    const productImageView = document.querySelector('.bundle-builder-aside--products');
  }

  updateTotal();
}

function updateTotalPrice() {
  const productDivs = document.querySelectorAll('.bundle-builder-aside--product');
  let totalPrice = 0;

  productDivs.forEach(div => {
    const priceElement = div.querySelector('[data-bundlebuilder-price]');
    if (priceElement) {
      const priceString = priceElement.getAttribute('data-bundlebuilder-price');
      const priceValue = parseFloat(priceString.replace(/[^0-9.-]+/g, ''));
      totalPrice += priceValue;
    }
  });

  return totalPrice;
}

function updateTotal() {
  const productElements = document.querySelectorAll('.bundle-builder-aside--product');
  let totalPrice = 0;
  const currency = window.Shopify.currency.active;

  productElements.forEach(element => {
    const priceElement = element.querySelector('.price-item--regular');
    if (priceElement) {
      const priceText = priceElement.textContent.trim();
      const priceValue = parseFloat(priceText.replace('€', '').replace(currency, '').replace('.', '').replace(',', '.'));
      totalPrice += priceValue;
    }
  });

  const totalValueElement = document.querySelector('.bundle-builder-aside .bundle-builder-aside--totals__total-value');
  totalValueElement.textContent = totalPrice.toLocaleString('it-IT', { style: 'currency', currency: currency });
  const priceWithoutCurrency = totalValueElement.textContent.replace(/[^0-9.-]+/g, '');
  const formattedPriceNoDecimals = parseFloat(priceWithoutCurrency).toString();

  if(formattedPriceNoDecimals == 0) {
  toggleAside(false)
  }
}

if (!customElements.get('bundle-builder-form')) {
  customElements.define(
    'bundle-builder-form',
    class BundleBuilderForm extends HTMLElement {
      constructor() {
        super();
        console.log(document.querySelector('cart-drawer'))
        this.cart = document.querySelector('cart-notification') || document.querySelector('cart-drawer');
        if (this.cart && this.cart.querySelector('cart-drawer')) {
          const submitButton = this.querySelector('[type="submit"]');
          if (submitButton) {
            submitButton.setAttribute('aria-haspopup', 'dialog');
          }
        }

        this.form = this.querySelector('.bundle-builder-form');
        this.form.addEventListener('submit', this.onSubmitHandler.bind(this));
      }

      onSubmitHandler(event) {
        event.preventDefault();

        const items = [];
        const idInputs = this.form.querySelectorAll('input[name="id"]');

        idInputs.forEach(input => {
          const productId = input.value;
          items.push({ 
            id: parseInt(productId), 
            quantity: 1, 
            properties: { '_bundle-builder': true } 
          });
        });

        const formData = { items: items };

        fetch(`${routes.cart_add_url}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        })
        .then(response => {
          if (response.ok) {
            console.log('Prodotti aggiunti con successo al carrello');
            updateCartDrawer(response);
            openCartDrawer()
          } else {
            console.error('Si è verificato un errore durante l\'aggiunta dei prodotti al carrello');
            resetAll();
            showToast(`Si è verificato un errore: riprova`);
          }
        })
        .catch(error => {
          console.error('Si è verificato un errore:', error);
          resetAll();
          showToast(`Si è verificato un errore: riprova`);
        });
      }
    }
  );
}

function resetAll() {
  toggleAside(false);
  const productDivs = document.querySelectorAll('[data-bundleBuilder="product"]');

  productDivs.forEach(div => {
    const removeProduct = div.querySelector(bundleList.removeProduct);
    div.classList.remove('added');
    removeProduct.classList.add('visibility-hidden')
  });

  Object.keys(addedProducts).forEach(productId => {
    delete addedProducts[productId];
  });


  const productInfoDivs = document.querySelectorAll('.bundle-builder-aside--product');
  productInfoDivs.forEach(div => {
    div.remove();
  });
  showToast(`Hai rimosso tutti i prodotti.`);
}

function updateCartDrawer(cart) {
  // Update the cart item count (example)
  // document.querySelector('.cart-count-bubble').textContent = cart.item_count;

  // Example: Updating a cart item list. Note: This is a simplification. You may need to dynamically create DOM elements based on the cart's contents, or use a templating approach.

}

function openCartDrawer() {
  // Example: Your method for opening the cart might look something like this, depending on your CSS and HTML structure.
  document.querySelector('cart-drawer').classList.add('open');
  document.querySelector('cart-drawer').classList.add('animate');
  document.querySelector('cart-drawer').classList.add('active');  
}

function closeCartDrawer() {
  document.querySelector('cart-drawer').classList.remove('open');
}