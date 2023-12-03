const heart = document.querySelector(".fa-solid.fa-heart");

heart.addEventListener("click", () => {
        heart.style.color = "red";
    

});
function changeText() {
        document.querySelector(".number").textContent = "0899788700";
}
const nav = document.querySelector(".navbar");
const close = document.querySelector("#close");
const bar = document.querySelector("#bar");

if(bar) {
        bar.addEventListener("click", () => {
                nav.classList.add("active")
        })
}
if(close) {
        close.addEventListener("click", () => {
                nav.classList.remove("active")
        })
}