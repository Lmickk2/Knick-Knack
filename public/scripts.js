const categorySelect = document.getElementById("category-select");
const products = document.querySelectorAll(".product");

categorySelect.addEventListener("change", function() {
  const selectedCategory = this.value;
  
  products.forEach(function(product) {
    if (selectedCategory === "all" || product.dataset.category === selectedCategory) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
});




// document.getElementById('product-form').addEventListener('submit', function(event) {
//     event.preventDefault();

//     var formData = new FormData();
//     formData.append('product-name', document.getElementById('product-name').value);
//     formData.append('product-description', document.getElementById('product-description').value);
//     formData.append('product-price', document.getElementById('product-price').value);
//     formData.append('product-image', document.getElementById('product-image').files[0]);

//     var xhr = new XMLHttpRequest();
//     xhr.open('POST', '/submitProduct', true);
//     xhr.onload = function() {
//         if (xhr.status === 200) {
//             alert('Product submitted successfully!');
//         } else {
//             alert('Error submitting product.');
//         }
//     };
//     xhr.send(formData);
// });
