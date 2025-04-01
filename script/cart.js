let shop = document.getElementById("shop");
let shopItemData = [
    { id: "Backpack1", image: "../assets/backpack.JPG", name: "Backpack", price: 200}, 
    { id: "Backpack2", image: "../assets/backpack1.JPG", name: "Backpack1", price: 200},
    { id: "Backpack3", image: "../assets/backpack2.JPG", name: "Backpack2", price: 200},
    { id: "Backpack4", image: "../assets/backpack3.JPG", name: "Backpack3", price: 200}, 
    { id: "Backpack5", image: "../assets/backpack4.JPG", name: "Backpack4", price: 200},
    { id: "Backpack6", image: "../assets/backpack6.JPG", name: "Backpack6", price: 200},
    { id: "Duffle1", image: "../assets/toiletriesbag1.JPG", name: "Toiletriesbag1", price: 200},
    { id: "Duffle2", image: "../assets/toiletriesbag2.JPG", name: "Toiletriesbag2", price: 200}, 
    { id: "Duffle3", image: "../assets/toiletriesbag3.JPG", name: "Toiletriesbag3", price: 200},
    { id: "Duffle4", image: "../assets/toiletriesbag4.JPG", name: "Toiletriesbag4", price: 200},
    { id: "Duffle5",image: "../assets/toiletriesbag5.JPG", name: "Toiletriesbag5", price: 200},
    { id: "Duffle6", image: "../assets/toiletriesbag6.JPG", name: "Toiletriesbag6", price: 200}
  
];
let basket = [
    { id: 1, item: 1}
];
let generateShop = () => {
    return (shop.innerHTML = shopItemData.map ( (x)=>{
        let{ id, name, price, image} = x;
        return `
          <div id=product-id-${id} class="item">
          <div class= "details">
          <h3>${name}</h3> 
    <img
      src=${image}
      alt="image of a backpack"
      width="200px"
      height="200px"
    />
        <div class="button">
            <i onclick="decrement(${id})" class="bi bi-dash"></i>
            <div id=${id} class = "quantity">0</div>
            <i onclick="increment(${id})" class="bi bi-plus"></i>
            <p>$ ${price}</p>
        </div>
        </div>
    </div>
    `;
    }).join(""));
};
generateShop();

let increment = (id) => {
    let selectedItem = id;
let search = basket.find((x) => x.id === selectedItem.id);
if (search === undefined) {
    basket.push({id: selectedItem.id, item: 1});
}
else {
    search.item += 1;
}
//console.log(basket);
update(selectedItem.id);
};
let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);
    if (search.item === 0) return;
    else {
        search.item -= 1;
    };
  //  console.log(basket);
    update(selectedItem.id);
};
let update = (id) => {
    let search = basket.find((x)=> x.id === id);
  console.log (search.item);
  document.getElementById(id).innerHTML = search.item;  
};