/* Define prooducts using js instead of html */
let products=document.querySelector(".products")
let productsDB=JSON.parse(localStorage.getItem("productsDB"))

function drawProducts(productsDB=[]) {
    let products_var = productsDB.map((item)=>{
        return `
            <div class="product-item">
                <img src="${item.image}" alt="${item.title}">
                <div class="product-item-desc">
                    <h2>${item.title}</h2>
                    <p>${item.desc}</p>
                    <span>color: ${item.color}</span>
                     <p>${item.price} $</p>
                </div>
                <div class="product-item-actions">
                    <button class="add-to-cart" onclick= addedTocart(${item.id})>Add to cart</button>
           
                </div>
            </div>
        `;
    })
    products.innerHTML=products_var.join("")
}
drawProducts(productsDB)


let cartProducts=document.querySelector("#user_info li .cartProducts")
let cartProducts_div=document.querySelector("#user_info li .cartProducts div")
let badge=document.querySelector(".badge")
let shoppingCartIcon = document.querySelector("#user_info li.shoppingCartIcon")


//let addedItems = [] 
// if we always start with empty array so when we refreshes all data is deleted
// so we check if there are items in local storage
let addedItems=localStorage.getItem("ProductsInCart")?
JSON.parse(localStorage.getItem("ProductsInCart")):[]
if(addedItems){
    addedItems.map((item)=>{
    cartProducts_div.innerHTML+=`<p>${item.title} ${item.quantity}</p>`
  })
badge.style.display="block"
badge.innerHTML += addedItems.length
}

function addedTocart(id) {
    if (localStorage.getItem("username")) {
        let chosenProduct = productsDB.find((item) => id===item.id)
        // here we find the clicked item by user
        // cartProducts.style.display="block"
        let isProductinCart = addedItems.some(it=>chosenProduct.id === it.id)
        // we check if all items contains the  clicked item 
        if (isProductinCart) {
            addedItems.map((p)=>{
                if(p.id === chosenProduct.id)
                    p.quantity += 1
                    console.log(p);
                    return p 
            })}
        else{
            addedItems.push(chosenProduct)
        }
    cartProducts_div.innerHTML=""
    // each time user clicks at product we make cartProducts_div empty and re draw it
    addedItems.forEach((item)=>{
        cartProducts_div.innerHTML+=`<p>${item.title}  <span class="itemQuantity">${item.quantity}</span></p>`
        // we draw each item title and quantity from allItems array
    })
    badge.style.display="block"
    badge.innerHTML = cartProducts_div.childElementCount
    // //or we can use
    // let cartProductsitemsLength=document.querySelectorAll("#user_info li .cartProducts div p ")
    // badge.innerHTML = cartProductsitemsLength.length
   // addedItems = [...addedItems, chosenItem ]
    localStorage.setItem("ProductsInCart",JSON.stringify(addedItems))
    }
    else
        window.location="login.html"    
}

// function getUniqueItems(arr) {
//    let unique = arr.map((item)=>item.id)
//                 .map((item,index,final)=>final.indexOf(item)===index && index)
//                 .filter((item)=>arr[item])
//                 .map((item)=>arr[item])
//                 console.log(unique);
//                 return unique
// }

shoppingCartIcon.addEventListener("click",opencart)
function opencart() {
    if (cartProducts_div.innerHTML!="") {
        if(cartProducts.style.display =="block")
            cartProducts.style.display ="none"
        else 
        cartProducts.style.display ="block"
    }
} 


let search_Input = document.querySelector("#search")
search_Input.addEventListener( "keyup" ,() => {
    let search_value = search_Input.value.trim()
    /* The line let valuee = search_Input.value is executed immediately when the page loads. At that moment, 
    the input field likely contains an empty string (since the user hasn’t entered anything yet).
    When you click the search button, the event listener fires, but the value of valuee remains the same
    (empty string) because it was set earlier.
    To fix this, you need to get the value of the input field inside the event listener
    when the button is clicked. */
    if (search_value ==="") {
        drawProducts(productsDB)
    }
    else{
        let required_item= productsDB.filter(item => item.title.toLowerCase().indexOf(search_value.toLowerCase())!==-1)
        // here we check if the title we write is a part of any title in localstorage 
        // it is searches bt character not the whole word
        drawProducts(required_item);
    }
  });


