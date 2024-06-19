var username = document.getElementById("username")
var email = document.getElementById("email")
var productsNumber = document.querySelector("#productsNumber span")

username.innerHTML=localStorage.getItem("username")
email.innerHTML = localStorage.getItem("email")

if (JSON.parse(localStorage.getItem("ProductsInCart")).length != 0) {
    productsNumber.textContent = JSON.parse(localStorage.getItem("ProductsInCart")).length 
} else {
    var products_widget = document.querySelector("#productsNumber")
    products_widget.remove()
}