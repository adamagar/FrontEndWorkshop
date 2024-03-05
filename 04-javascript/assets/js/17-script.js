const inputEl = document.querySelector("#txtName");
console.log(inputEl.value);

const welcomeEl = document.querySelector("#welcome");

welcomeEl.innerHTML = `Hello, <i>${inputEl.value}</i>`