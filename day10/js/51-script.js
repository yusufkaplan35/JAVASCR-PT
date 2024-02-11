document.querySelector("#btnOrtalama").addEventListener("click", () => {
    let number1El = document.querySelector("#inpNumber1");
    let number2El = document.querySelector("#inpNumber2");
    let sonucEl = document.querySelector("#sonuc");
    let vize = Number(number1El.value);
    let final= Number(number2El.value);
    if(!notGecerli(vize)||!notGecerli(final)){
        alert("lutfen gecerli not giriniz")
        return;
    }
    let ortalama=getAverage(vize,final)
    let sonuc=convertToLetter(ortalama)
    sonucEl.innerHTML=` Not ortalamanizin harf notu: ${sonuc}'dir`
    number1El.value=""
    number2El.value=""
    
});
const getAverage = (vize, final) => (vize + final) / 2;
const convertToLetter = (not) => {
    let letter = "";
    if (not >= 90 && not <= 100) {
        letter = "A";
    } else if (not >= 80 && not < 90) {
        letter = "B";
    } else if (not >= 70 && not < 80) {
        letter = "C";
    } else if (not >= 50 && not < 70) {
        letter = "D";
    } else {
        letter = "F";
    }
    return letter;
};
const notGecerli = (not) => {
    return not && not <= 100 && not >= 0 && !isNaN(not);
};