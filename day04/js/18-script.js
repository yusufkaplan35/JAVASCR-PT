let h1El = document.querySelector(".title");
console.log(h1El);

let h1Text = h1El.innerText;
console.log(h1Text);

document.querySelector(".message").innerText=`message: Merhaba ${h1Text} `//1.kullanim


/*  let messageEl=document.querySelector(".message")
 messageEl.innerText=`message: Merhaba ${h1Text} `//2.kullanim
  */
