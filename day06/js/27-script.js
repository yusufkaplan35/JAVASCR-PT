function changeMode(){
    let bodyEl=document.querySelector("body")
    let buttonToggle= document.querySelector(".toggle-btn")
    /*
    <i class="fa-solid fa-moon"></i>
    */
 let isDark=   bodyEl.classList.contains("dark");

 bodyEl.classList.toggle("dark");

 buttonToggle.innerHTML=isDark ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>'

}