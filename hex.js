var tablinks=document.getElementsByClassName("tablink");
var tabcontent=document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tab of tablinks){
        tab.classList.remove("active-link");
    }
    for(conten of tabcontent){
        conten.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}
// ----------------typing--------------
// var typed = new Typed(".typing",{
//     strings:["Front-End Developer"],
//     typeSpeed: 170,
//     backSpeed: 90,
//     loop: true
// });

var textWrapper = document.querySelector('.ml10 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml10 .letter',
    rotateY: [-90, 0],
    duration: 1300,
    delay: (el, i) => 45 * i
  }).add({
    targets: '.ml10',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

// --------for responsive menu and xmark-----
var sidemenu= document.getElementById("sidemenu")
function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px";
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbwTHrp_ujEdi9vQgTh2jea7HBPG3CNzcev3CzzqozrMWUpetnr9oBvfKPh-upCYw-JAuQ/exec'
const form = document.forms['submit-to-google-sheet']
const  msg=document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response =>{
        msg.innerHTML="Message sent successfully"
        setTimeout(function(){
            msg.innerHTML=""
        },4000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})