let car = {
    brand: "Volvo",
    model: "XC90",
    year: 2024,
    color: "red",
    engine: "3.0",
    doors: 4,
};
const fillSelectForm = () => { 
  let carKeys=  Object.keys(car)
  //console.log(carKeys)
let selectFormEl=document.getElementById("formSelect");
let strSelectForm="";
for (let i = 0; i< carKeys.length; i++) {
  strSelectForm+=`<option>${carKeys[i]}  </option>`
    
}
selectFormEl.innerHTML=strSelectForm
}
document.getElementById("formSelect").addEventListener("click",(e)=>{
  let carValue= e.target.value;
  document.getElementById("result").innerHTML=car[carValue]
})
fillSelectForm()
