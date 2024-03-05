//defininf function
function sayHello(){
    const inputTxt = document.querySelector("#txtName").value;
    
    document.querySelector("#welcome").innerHTML = `Hello and Welcome <i> ${inputTxt} </i>`
}
//calling function
// sayHello()