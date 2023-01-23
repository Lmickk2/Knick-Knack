const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#product-name').value.trim();
    const description = document.querySelector('#product-desc').value.trim();
    const price = document.querySelector('#product-price').value.trim();
    const image = document.querySelector('#product-image').value.trim();

  
    if (name && description && price && image) {
      const response = await fetch(`api/sell`, {
        method: 'POST',
        body: JSON.stringify({ name, description, image, price }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/sell');
      } else {
        alert('Failed to create product');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/sell/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/sell');
      } else {
        alert('Failed to delete product');
      }
    }
  };
  
  document
    .querySelector('.new-product-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.product-list')
    .addEventListener('click', delButtonHandler);
  