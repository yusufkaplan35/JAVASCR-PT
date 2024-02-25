import {
    stringSortASC,
    stringSortDESC,
    numericSortASC,
    numericSortDESC,
    randomSort
} from "./sorting.js";
const arrStrings = ["Ali", "Ayşe", "Veli", "Cengiz", "Aysun", "Ayten", "Faruk"];
const arrNumbers = [23, 45, 1, 34, 115, 1134, 47, 33];
const btnSort1 = document.getElementById("btnSort1");
const btnSort2 = document.getElementById("btnSort2");
const btnSort3 = document.getElementById("btnSort3");
const btnSort4 = document.getElementById("btnSort4");
const btnSort5 = document.getElementById("btnSort5");
const result = document.getElementById("result");
btnSort1.addEventListener("click", () => {
    result.textContent = stringSortASC(arrStrings);
});
btnSort2.addEventListener("click", () => {
    result.textContent = stringSortDESC(arrStrings);
});
btnSort3.addEventListener("click", () => {
    result.textContent = numericSortASC(arrNumbers);
});
btnSort4.addEventListener("click", () => {
    result.textContent = numericSortDESC(arrNumbers);
});
btnSort5.addEventListener("click", () => {
    result.textContent = randomSort(arrNumbers);
});