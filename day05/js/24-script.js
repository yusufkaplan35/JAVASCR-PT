
function changeMode(){

    let bodyEl=document.querySelector("body");
    let buttonToggle=document.querySelector(".toggle-btn");

    let isDark= bodyEl.classList.contains("dark");
    //console.log(isDark);

    if(isDark){
        bodyEl.classList.remove("dark");
        buttonToggle.innerHTML='<i class="fa-solid fa-moon"></i>'
    }else{
        bodyEl.classList.add("dark");
        buttonToggle.innerHTML='<i class="fa-solid fa-sun"></i>'

    }

}