//show && hidden password//
const pass = document.getElementById('inp2');
const show = document.getElementById('show');
const hidden = document.getElementById('hidden');

show.addEventListener("click",function(){
        pass.type="text";
        show.style.display="none";
        hidden.style.display="block";
})
hidden.addEventListener("click",function(){
    pass.type="password";
    show.style.display="block";
    hidden.style.display="none";
})

function optionsSlideShow(){
  const slideDiv = document.getElementById("options-slide");
  slideDiv.style.left="115px";
}
function optionsSlideHide(){
  const slideDiv = document.getElementById("options-slide");
  slideDiv.style.left="500px";
}

const modal = document.getElementById("log");
const loginButton =document.getElementById("show-log");
const span =document.getElementById("close");

loginButton.onclick =function(){
    modal.style.display="block";
}

span.onclick =function(){
    modal.style.display="none";
}


    

function secondWay(){

    let card = document.getElementById("card2");
    card.classList.remove("card");
    card.classList.add("card2");
    let showMore = document.querySelector(".show");
    showMore.style.hight="140vw";

}
function firstWay(){
    let card = document.getElementById("card2");
    card.classList.remove("card2");
    card.classList.add("card");
    let showMore = document.querySelector(".show");
    showMore.style.hight="120vw";
}



//active//
var header = document.getElementById("nav2");
var btns = header.getElementsByClassName("li-nav");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active2");
  current[0].className = current[0].className.replace(" active2", "");
  this.className += " active2";
  });
}






