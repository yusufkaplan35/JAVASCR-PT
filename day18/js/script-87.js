import { countries } from "../data/countries.js";
const search = document.getElementById("search");
const countrylist = document.getElementById("countrylist");
let timer = null;
search.addEventListener("input", (e) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
        // Textboxtaki bilgiyi al
        const userInput = e.target.value;
        // ulkeleri filtrele
        const filteredCountries = filterCountry(userInput);
        // listeyi guncelle
        setList(filteredCountries);
        console.log("Hello");
    }, 500);
});
const filterCountry = (val) => {
    if (val.length < 3) return [];
    const filteredCountries = countries.filter((item) =>
        item.name.official.toLowerCase().includes(val.toLowerCase())
    );
    return filteredCountries;
};
const setList = (items) => {
    countrylist.innerHTML = "";
    items.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item.name.official;
        countrylist.append(li);
    });
};
