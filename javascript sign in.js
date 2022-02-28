document.addEventListener("DOMContentLoaded", () =>{
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#createAccountLink").addEventListener("click", e =>{
        e.preventDefault();
        loginForm.classList.add("hidden-msg");
        createAccountForm.classList.remove("hidden-msg");
    })

    document.querySelector("#SignInLink").addEventListener("click", e =>{
        e.preventDefault();
        loginForm.classList.remove("hidden-msg");
        createAccountForm.classList.add("hidden-msg");
    })
})