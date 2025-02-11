const container = document.querySelector(".container");

const qrCodeBtn = document.querySelector("#qr-form button")

console.log("QRCODE: ",qrCodeBtn)
const qrCodeInput = document.querySelector("#qr-form input")

const qrCodeImg = document.querySelector("#qr-code img")
console.log("IMG:",qrCodeImg);

function generateQrCode(){
const qrCodeInputValue = qrCodeInput.value;
    console.log(qrCodeInputValue)
    if(!qrCodeInputValue) return;

    qrCodeBtn.InnerText = "Gerando código..."

    qrCodeImg.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`

    container.classList.add("active")//adiciona a classe active
}

qrCodeBtn.addEventListener("click", generateQrCode)