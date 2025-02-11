window.addEventListener("resize", () => {
    console.log(document.documentElement.offsetWidth);
});

const buttons = document.querySelectorAll("#image-picker li");

const image = document.querySelector("#product-image")

buttons.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        
        buttons.forEach((btn)=>{
            btn.querySelector(".color").classList.remove("selected")
        })//remove a outra classe selecionada

        const clicked = e.target;
        const id = clicked.getAttribute("id");

        clicked.querySelector(".color").classList.add("selected");

        image.classList.add("changing");

        image.setAttribute("src", `img/iphone_${id}.jpg`)

        setTimeout(()=>{
            image.classList.toggle("changing")
        }, 200)

    })
})