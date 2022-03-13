const inp = document.getElementById("colorpick");
const inpText = document.getElementById("textColor");
const container = document.getElementById("Container");
const hex = document.getElementById("hexcode");

// Bunlar ise farklı opsiyonlar 

// container.addEventListener("mousemove", () => {
//     hex.innerHTML = inp.value
//     hex.style.color = inp.value;
// });
// container.addEventListener("mousedown", () => {
//     hex.innerHTML = inp.value;
//     hex.style.color = inp.value;
// });

setInterval(input, 1)

function input() {

    hex.innerHTML = inp.value;
    hex.style.color = inp.value;

}

