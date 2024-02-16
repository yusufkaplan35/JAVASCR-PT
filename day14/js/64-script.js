import {countries} from "../data/countries.js"
//console.log(countries)
const loadData = () => { 
    let selectOptions=""
    for(let country of  countries){
      //country.name.common
selectOptions+=`<option> ${country.name.common} </option>`
    }
document.getElementById("selectID").innerHTML=selectOptions
return selectOptions;
 }
loadData()