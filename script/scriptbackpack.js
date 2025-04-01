let cart2 = [];
console.log(products1);
function displayProducts1() {
    console.log(products1);
    console.log("Displaying products1...");
    let products1Container = 
    document.getElementById("products1");

    if (!products1Container) {
        console.error("Error: Element with ID 'products1' not found.");
        return;
    }
  
    products1Container.innerHTML = "";
      //Clear previous content 
      products1.forEach(product => {
      let productDiv = 
      document.createElement("div"); 
      productDiv.classList.add("product"); // Ensure the "product" class is styled in your CSS
       productDiv.innerHTML = `
       <div id="product1-details">
       <div id="product1-image">
        <img src="${product.image}" alt="${product.name}" height="300" width="250">
        </div>
        <div id="product1-info">
        <h3>${product.name}</h3>
        <div class="priceCart" id= "priceCart">
        <p>Price: $${product.price}</p>
        <button onclick="addToCart('${product.id}')">Add to Cart</button>
        </div>
        </div>
        </div>
       `;
         products1Container.appendChild(productDiv); 
         });
        };
        document.addEventListener("DOMContentLoaded", () => {
            displayProducts1();
        });
        