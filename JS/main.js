
let openNav = document.querySelector("#openNav");
let exitNav = document.querySelector("#exitNav");
let aside = document.querySelector("aside");
let headerText = document.querySelectorAll(".toggleBtn")
// let containerText = document.querySelectorAll(".text")

let myDay = document.getElementById("day");
let myHours = document.getElementById("hours");
let myMinute = document.getElementById("minute");
let mySeconde = document.getElementById("seconde");


let layerCounter = document.getElementById("layerCounter");
let countTimer = document.getElementById("countTimer");




//Todo JQuery :
$("#openNav").click(function(){
  $("aside").css({"left":"0px"});
  $("#openNav").fadeOut(500);
})



//Todo Java Script:
// openNav.addEventListener("click", function(){
//   aside.style.left = "0px";
//   openNav.classList.add("d-none");
// })




//Todo JQuery :
$("#exitNav").click(function(){
  $("aside").css({"left" : "-200px"});
  $("#openNav").fadeIn(500);
  // $("#openNav").removeClass("d-none");
});



//Todo Java Script:
// exitNav.addEventListener("click", function(){
//   // console.log(exitNav);
//   aside.style.left = "-200px";
//   openNav.classList.remove("d-none");
// })






//Todo Slider jquery:
$(".sliderHome h3.toggleBtn").next().slideUp(1000);

$(".toggleBtn").click(function(e){
  $(e.target).next().slideToggle(500);
  $(".sliderHome .text").not($(e.target).next()).slideUp(500);
})


//Todo Slider Java Script:
// for(let i=0;i<headerText.length; i++){
//   headerText[i].addEventListener("click",function(){
//     console.log(this);
//     this.nextElementSibling.classList.toggle("active")
//   })
// }







//Todo Function Calculate Character number In TextArea :

$("#textArea").on("input", function(){
  let textArea = document.getElementById("textArea");
  let charNum = textArea.value.length;
  let charNumCalc = 100 - charNum;

  if(charNumCalc < 0){
    charNumCalc = 0
    $("#textArea").attr("maxlength" , "0")
  }
  $("#characterNum").text(charNumCalc)
});


// textArea.addEventListener("input" , function(){
  
//   let textArea = document.getElementById("textArea");
//   let characterNum = document.getElementById("characterNum");
//   let charNum = textArea.value.length;
//   let charNumCalc = 100 - charNum;

//   if(charNumCalc < 0){
//     charNumCalc = 0
//     textArea.setAttribute("maxlength" , "0")
//   }
//   characterNum.innerHTML = charNumCalc ;
// })
// // soal leha loa ma3araf motaghayer local we ykon mostahkadam fy add event listener mosh bya3mal error




//Todo Set the date counting down to :
// var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
var countDownDate = new Date("12/18/2023 10:00:00").getTime();



//Todo Function Calculate Time and counting down timer :
// Update the count down every 1 second
let timDownFunc = setInterval(function() {
  
  // Get today date and time :
  let now = new Date().getTime();
  
  // Find the distinction between now and the count down date :
  let distinction = countDownDate - now;
  
  // Time calculations for days, hours, minutes and seconds :
  let days = Math.floor(distinction / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distinction % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60 )) ;
  let minutes = Math.floor((distinction % (1000 * 60 * 60 )) / (1000 * 60  )) ;
  let seconds = Math.floor((distinction % (1000 * 60 )) / (1000 )) ;
  
  //Handle shape to the timer By Add Zero if Number less Than 10 :
  if(days < 10){
    days = `0${days}`
  }
  if(hours < 10){
    hours = `0${hours}`
  }
  if(minutes < 10){
    minutes = `0${minutes}`
  }
  if(seconds < 10){
    seconds = `0${seconds}`
  }

  
  //Stop The Function Event Today and If the count down is finished, write some text
  if(distinction < 0){
    clearInterval(timDownFunc);
    // countTimer.innerHTML = `<p>The Event Today </br> "Happy Nice day"</p>`;
    $("#countTimer").html(`<p>The Event Today </br> "Happy Nice day"</p>`) ;
  }

  
  // Display the result in the element in Document :
  countTimer.innerHTML = `-${days}d : ${hours}h : ${minutes}m : ${seconds}s`;
}, 1000);







//Todo Display NavBar during Scroll Top  or Y Axis :
$(window).scroll(function(){
  let stopScroll = $("#sliderDown").offset().top;
  let windowOffset = $(window).scrollTop();
  if(windowOffset > stopScroll -50){
    $("#navBarLink").fadeOut(500)
    // $("#navBarLink").slideUp(500);

    $("#btnUp").fadeIn(500);
  }else {
    $("#navBarLink").fadeIn(500)
    // $("#navBarLink").slideDown(500);

    $("#btnUp").fadeOut(500);
  }
})



//Todo Display Btn Up  during Scroll Top  or Y Axis :
$("#btnUp").click(function(){
  $(window).scrollTop(0);
})



//Todo Display Loading Page during Download document Page :
$(document).ready(function(){
  $(".loader").fadeOut(1000 , function (){
    $("#loadingScreen").slideUp(1000);
    // $("body").css({"overflow" :"auto"})
    $("body").css("overflow" ,"auto")
  });
})
















//Todo JQuery :

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */

// particlesJS.load('particles-js', 'JS/particles.json', function() {
//   console.log('callback - particles.js config loaded');
// });
