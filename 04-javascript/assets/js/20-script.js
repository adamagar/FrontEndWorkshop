function setMode(){
    const isDark = document.querySelector("body").classList.contains("dark")
    console.log(isDark)
    const btnToggle = document.querySelector(".btn-toggle");
    

    if(isDark){
        document.body.classList.remove("dark")
        btnToggle.innerHTML = `<i class="fa-regular fa-moon"></i>`
    }else{
        document.body.classList.add("dark")
        btnToggle.innerHTML = `<i class="fa-solid fa-sun"></i>`
    }
}