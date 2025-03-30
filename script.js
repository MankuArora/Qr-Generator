let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
let qrGenerate = document.getElementById("qrGenerate");

function generateQR() {
    if (qrText.value.length > 0) {
        // Encode the URL to handle special characters
        let qrData = encodeURIComponent(qrText.value);
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrData}" + qrText.value;        ;
        imgBox.classList.add("show-img");
    } else {
        // Optionally, you can hide the image box if the input is empty
        imgBox.classList.remove("show-img");
    }
}

qrGenerate.addEventListener("click", () => {
    generateQR();
});