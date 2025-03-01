const addedProducts = {};

const selector = {
  productId: 'data-product-id',
  productTitle: 'data-bundleBuilder-title',
  productPrice: 'data-bundleBuilder-price',
  productInformation: '.card-information',
  removeProduct: '[data-bundleBuilder="removeProduct"]',

  aside: '.bundle-builder-aside',
  totals: '.bundle-builder-aside--totals',
  products: '.bundle-builder-aside--products',
  noProducts: '.bundle-builder-aside--products--no-products',
  btn: '.product-form__submit',
  btnRemove: '.bundle-builder-form--resetAll'
}

const nodeSelector = {
  aside: document.querySelector(selector.aside),
  totals: document.querySelector(selector.totals),
  products: document.querySelector(selector.products),
  noProducts: document.querySelector(selector.noProducts),
  btn: document.querySelector(selector.btn),
  btnRemove: document.querySelector(selector.btnRemove)
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
  Aside(true);
  const productId = this.getAttribute(selector.productId);
  const productTitle = this.getAttribute(selector.productTitle);
  const productPrice = this.getAttribute(selector.productPrice);
  const productInformation = this.querySelector(selector.productInformation).innerHTML;
  const removeProduct = this.querySelector(selector.removeProduct);
  const productImage = this.querySelector(`[data-product-id="${productId}"] img`).getAttribute('src');

  if (!this.classList.contains('added')) {
    addProductBundle(this, productId, productTitle, productImage, productPrice, productInformation, removeProduct);
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



function Aside(showProducts) {
  if (showProducts) {
      nodeSelector.totals.classList.remove('visually-hidden');
      nodeSelector.products.classList.remove('visually-hidden');
      nodeSelector.noProducts.classList.add('visually-hidden');
      nodeSelector.btn.disabled = false;
      nodeSelector.btnRemove.disabled = false;

      nodeSelector.btn.value = aside_addForm;
  } else {
      nodeSelector.totals.classList.add('visually-hidden');
      nodeSelector.products.classList.add('visually-hidden');
      nodeSelector.noProducts.classList.remove('visually-hidden');

      nodeSelector.btn.disabled = true;
      nodeSelector.btnRemove.disabled = true;
      nodeSelector.btn.value = aside_defaultForm;
  }
}

function addProductBundle(productDiv, productId, productTitle, productImage, productPrice, productInformation,removeProduct) {
  productDiv.classList.add('added');
  productDiv.setAttribute('data-bundleBuilder-added', 'true');
  removeProduct.classList.remove('visibility-hidden');
  showToast(`Hai aggiunto ${productTitle}`);
  addedProducts[productId] = { title: productTitle, price: productPrice };
  updateTotalPrice();
  addProductToForm(productId, productTitle, productPrice);
  addAsideProduct(productId, productTitle, productImage, productInformation)
  updateTotal();
}

function removeProductBundle(productDiv, productId, removeProduct) {
  productDiv.classList.remove('added');
  productDiv.removeAttribute('data-bundleBuilder-added');
  removeProduct.classList.add('visibility-hidden');
  removeAsideProduct(productId)
  updateTotal();
}
function addAsideProduct(productId, productTitle, productImage, productInformation) {
  const productPreviewDiv = document.createElement('div');
  productPreviewDiv.classList.add('bundle-builder-aside--product');

  const imgElement = document.createElement('img');
  imgElement.setAttribute('src', productImage);
  productPreviewDiv.appendChild(imgElement);
  productPreviewDiv.innerHTML += `<p>${productTitle}</p>${productInformation}`;
  
  productPreviewDiv.id = `product-preview-${productId}`;
  const productImageView = document.querySelector('.bundle-builder-aside--products');
  productImageView.appendChild(productPreviewDiv);
}


function removeAsideProduct(productId) {
  delete addedProducts[productId];
  const productInfoDivToRemove = document.getElementById(`product-info-${productId}`);
  productInfoDivToRemove.remove();
  const productPreviewDiv = document.getElementById(`product-preview-${productId}`);
  productPreviewDiv.remove();
  if (Object.keys(addedProducts).length === 0) {
    const productImageView = document.querySelector('.bundle-builder-aside--products');
  }
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
  Aside(false)
  }
}

if (!customElements.get('bundle-builder-form')) {
  customElements.define(
    'bundle-builder-form',
    class BundleBuilderForm extends HTMLElement {
      constructor() {
        super();
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
        const body = JSON.stringify(formData)
        console.log(body)
        fetch(`${routes.cart_add_url}`, { ...fetchConfig('javascript'), ...{ body } })
        .then(response => {
          if (response) {
            console.log('Prodotti aggiunti con successo al carrello');
            publish(PUB_SUB_EVENTS.cartUpdate, { source: 'quick-add', cartData: response });
            console.log(response)
            openCartDrawer(response)
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
  Aside(false);
  const productDivs = document.querySelectorAll('[data-bundleBuilder="product"]');

  productDivs.forEach(div => {
    const removeProduct = div.querySelector(selector.removeProduct);
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

function openCartDrawer() {
  // Example: Your method for opening the cart might look something like this, depending on your CSS and HTML structure.
  document.querySelector('cart-drawer').classList.remove('is-empty');
  document.querySelector('cart-drawer').classList.add('open');
  document.querySelector('cart-drawer').classList.add('animate');
  document.querySelector('cart-drawer').classList.add('active');  
}

function closeCartDrawer() {
  document.querySelector('cart-drawer').classList.remove('open');
}