let username = document.getElementById("username")
let password = document.getElementById("password")
let email = document.getElementById("email")
let registerBtn = document.getElementById("sign_up")

registerBtn.addEventListener("click",register)

function register(e) {
    e.preventDefault()
    // because submit button refreshes the page at default
    // so we prevent the buttonn from refreshing the page
    if(username.value === "" || password.value === "" || email.value === "")
        alert("please fill data")
    else{
        localStorage.setItem("username",username.value)
        localStorage.setItem("email",email.value)
        localStorage.setItem("password",password.value)

        setTimeout(()=>{
            window.location="login.html"
        },1000)
    }

}    

