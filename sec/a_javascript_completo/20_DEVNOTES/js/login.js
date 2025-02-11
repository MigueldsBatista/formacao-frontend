const usernameInput = document.querySelector("#username")
const passwordInput = document.querySelector("#password")
const submitBtn = document.querySelector("input[type='submit']")


submitBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;
    if(username==='admin' && password ==='123'){
        window.location.href = "index.html";
        alert("Logado com sucesso!")
        return;
    }
    alert("Usuário e/ou senha incorretos!")
})