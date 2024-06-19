let noproducts=document.querySelector(".noproducts")
let products=document.querySelector(".products")
//  let items_objects = JSON.parse(localStorage.getItem("ProductsInCart"))  wrong
function drawProducts(allproducts=[]) {  //default parameter
    if(JSON.parse(localStorage.getItem("ProductsInCart")).length === 0){
        noproducts.innerHTML = "No products" ;
    }
    let items_objects = JSON.parse(localStorage.getItem("ProductsInCart"))||allproducts
    // here we make local storage called every time we call this function not once page is refreshed 
    // in the document above 
    let products_var = items_objects.map((item)=>{
        return `
            <div class="product-item">
                <img src="${item.image}" alt="${item.title}">
                <div class="product-item-desc">
                    <h2>${item.title}</h2>
                    <p>${item.desc}</p>
                    <span>color: ${item.color}</span>
                    <p>quantity: ${item.quantity}</p>
                    <p>price: ${item.price}</p>
                </div>
                <div class="product-item-actions">
                    <button class="add-to-cart" onclick= removefromcart(${item.id})>Remove from Cart</button>
                   
                </div>
            </div>
        `;
    })
    products.innerHTML=products_var.join("")
}
drawProducts();

function removefromcart(id) {
    let ProductsInCart = localStorage.getItem("ProductsInCart")
    if(ProductsInCart){  
        let x = JSON.parse(ProductsInCart)
        let filteredData=x.filter((item) => id !== item.id)
        localStorage.setItem("ProductsInCart",JSON.stringify(filteredData))
        drawProducts(filteredData)
    }
}