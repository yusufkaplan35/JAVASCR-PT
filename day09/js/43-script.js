//! dec function
function lengthiBul(value) {
    return value.length;
}
console.log(lengthiBul("merhaba"));
//! expression function
let topla = function (a, b) {
    return a + b;
};
console.log(topla(5, 6));
let toplamSonuc = topla(5, 12);
console.log(toplamSonuc);
//!arrow function
let carpma = (a, b) => a * b;
console.log(carpma(6, 7));
const firstletter = (str) => { 
    let letter=str.charAt(str.length-1);
    return letter;
}
console.log(firstletter("merhaba"))
const findSubstring = (parametre) => { 
let sonuc=  parametre.substring(1,3);
   return sonuc
 }
console.log(findSubstring("merhaba"))