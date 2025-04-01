let cart = [];
console.log(products);
function displayProducts() {
    console.log(products);
    console.log("Displaying products...");
    let productsContainer = 
    document.getElementById("products");
  
    productsContainer.innerHTML = "";
      //Clear previous content 
      products.forEach(product => {
      let productDiv = 
      document.createElement("div"); 
      productDiv.classList.add("product"); // Ensure the "product" class is styled in your CSS
       productDiv.innerHTML = `
       <div id="product-details">
       <div id="product-image">
        <img src="${product.image}" alt="${product.name}" height="300" width="300">
        </div>
        <div id="product-info">
        <h3>${product.name}</h3>
        <p>${product.desc}</P>
        <div id= "price-cart">
        <p>Price: $${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
        </div>
        </div>
       `;
         productsContainer.appendChild(productDiv); 
         });
        };
        document.addEventListener("DOMContentLoaded", () => {
            displayProducts();
        });
        