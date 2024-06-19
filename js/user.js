var links =document.querySelector("#links")
var user_info =document.querySelector("#user_info")
var user =document.querySelector("#user")
var logoutBtn =document.querySelector("#logout")
if(localStorage.getItem("username")){
    links.remove()
    user_info.style.display="flex" // so that logout and user are next to each other
    user.innerHTML=localStorage.getItem("username")

}
logoutBtn.addEventListener("click",function () {
    localStorage.clear()
    setTimeout(()=>{
        window.location="register.html"
    },1500)
})
