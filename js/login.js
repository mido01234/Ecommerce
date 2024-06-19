let username = document.getElementById("username")
let password = document.getElementById("password")
let loginBtn = document.getElementById("sign_in")
let usernameLS = localStorage.getItem("username")
let passwordLS = localStorage.getItem("password")

loginBtn.addEventListener("click",login)

function login(e) {
    e.preventDefault()
    // because submit button refreshes the page at default
    // so we prevent the buttonn from refreshing the page
    if(username.value === "" || password.value === "" )
        alert("please fill data")
    else {
        if(username.value && username.value.trim() === usernameLS.trim() 
            && password.value && password.value.trim() === passwordLS){
                setTimeout(()=>{
                    window.location="index.html"
                },1500)      
        }
        else{alert("wrong username or password")}
    }
}
  