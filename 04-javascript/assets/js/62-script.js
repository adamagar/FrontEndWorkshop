import {countries} from "../data/countries.js"

console.log(countries)

const loadData = ()=>{
    const ddlCountries = document.querySelector("#ddlCountries")
    let options = "";
    for (let country of countries) {
        options += `<option value="">${country.name.common}</option>`
    
    }
    ddlCountries.innerHTML=options;
}
loadData()

