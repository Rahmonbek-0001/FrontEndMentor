function fetchAdvices(){fetch("https://api.adviceslip.com/advice").then(e=>e.json()).then(e=>{document.querySelector(".advice").innerHTML=e.slip.advice,document.querySelector(".adNumber").innerHTML=e.slip.id}).catch(e=>{console.log(e)})}const btn=document.querySelector("#getAdvice");btn.addEventListener("click",fetchAdvices);