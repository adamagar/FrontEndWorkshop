const headEl = document.querySelector("h1");
console.log(headEl);

let headContent = headEl.innerText;
console.log(headContent);

headEl.innerHTML = "Hello JS DOM";

const aboutUsEl = document.querySelector(".about-us");
console.log(aboutUsEl)