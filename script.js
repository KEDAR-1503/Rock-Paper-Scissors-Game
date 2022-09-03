const startbtn=document.getElementById("startbtn");
var plife1 = document.getElementById("plife1");
var plife2 = document.getElementById("plife2");
var plife3 = document.getElementById("plife3");

var clife1 = document.getElementById("clife1");
var clife2 = document.getElementById("clife2");
var clife3 = document.getElementById("clife3");

var plifearr = [plife1,plife2,plife3];

var clifearr =[clife1,clife2,clife3];

var remover=document.getElementById("remover")
var computercontrol=document.getElementById("compcontrol")

var playerscore= document.getElementById("playerscore");
var compscore = document.getElementById("compscore");

var message=document.getElementById('message')


startbtn.addEventListener("click",()=>{
const startwindow=document.getElementById("startwindow");
startwindow.style.animationName="fadeout";
startwindow.style.animationDuration="4s";
startwindow.style.animationTimingFunction="ease-out";
setTimeout(function(){startwindow.style.display='none'},2000);

let playername=document.getElementById("playername");
let username=document.getElementById("inputvalue");
playername.innerHTML=username.value;
if(username.value === ''){
    playername.innerHTML="PLAYER 1";
}
let music=document.getElementById("music");
 music.play();
})

let setintervalvalue=null;

const computerchoice = document.getElementById("computerchoice");
window.addEventListener("load",()=>{
let toggles = document.getElementById("toggles");

 let set=setInterval(()=>{
let classname = toggles.getAttribute("class");
if(classname == "fas fa-hand-rock fa-6x"){
toggles.classList.remove("fa-hand-rock");
toggles.setAttribute("class", "fas fa-hand-paper fa-6x")

}
if(classname == "fas fa-hand-paper fa-6x"){
toggles.classList.remove("fa-hand-paper")
toggles.setAttribute("class", "fas fa-hand-scissors fa-6x") 
}
if(classname == "fas fa-hand-scissors fa-6x") {
toggles.classList.remove("fa-hand-scissors")
toggles.setAttribute("class", "fas fa-hand-rock fa-6x")
}
},1000)
setintervalvalue=set;
});

let userselectedchoice=null;
let pcount=0;
let ccount=0;

function computerselection(){
    clearInterval(setintervalvalue);
    let randomchoice=Math.floor(Math.random()*3);
    let toggles = document.getElementById("toggles");
    let arr=["fas fa-hand-rock fa-6x","fas fa-hand-paper fa-6x","fas fa-hand-scissors fa-6x"];
    let choicestring=arr[randomchoice];
    toggles.setAttribute("class",choicestring);
    let i=userselectedchoice.innerHTML;
    let x=i.search("fas")
    let y=i.search("x")
    let finaluserchoice=i.substring(x,y+1)
    let finalcomputerchoice= choicestring;
  

    if(finalcomputerchoice == finaluserchoice ){
        message.innerHTML ="TIE"
    }
    if((finalcomputerchoice === "fas fa-hand-paper fa-6x") && (finaluserchoice ==="fas fa-hand-rock fa-6x")){
        message.innerHTML = "COMP WINS"
    }
    if((finalcomputerchoice === "fas fa-hand-paper fa-6x") && (finaluserchoice ==="fas fa-hand-scissors fa-6x")){
        message.innerHTML = "PLAYER WINS"
    }
    if((finalcomputerchoice === "fas fa-hand-rock fa-6x") && (finaluserchoice ==="fas fa-hand-paper fa-6x")){
        message.innerHTML = "PLAYER WINS"
    }
    if((finalcomputerchoice === "fas fa-hand-rock fa-6x") && (finaluserchoice ==="fas fa-hand-scissors fa-6x")){
        message.innerHTML = "COMP WINS"
    }
    if((finalcomputerchoice === "fas fa-hand-scissors fa-6x") && (finaluserchoice ==="fas fa-hand-paper fa-6x")){
        message.innerHTML = "COMP WINS"
    }
    if((finalcomputerchoice === "fas fa-hand-scissors fa-6x") && (finaluserchoice ==="fas fa-hand-rock fa-6x")){
        message.innerHTML = "PLAYER WINS"
    }

    if(message.innerHTML === "PLAYER WINS"){
        playerscore.innerHTML =parseInt(playerscore.innerHTML)+1;
        clifearr[ccount].style.display="none";
        ccount++;
        if(ccount >=3){
            remover.style.display="none"
            computercontrol.style.display="none"
            message.style.width="100vw"
            message.innerHTML="PLAYER WINS GAME OVER"
        }
    }
    else if(message.innerHTML === "COMP WINS"){
        compscore.innerHTML =parseInt(compscore.innerHTML)+1;
        plifearr[pcount].style.display ="none";
        pcount++;
        if(pcount >=3){
            remover.style.display="none"
            computercontrol.style.display="none"
            message.style.width="100vw"
            message.innerHTML="COMP WINS GAME OVER"
            message.style.backgroundColor="red"
            message.style.color="white"
        }
    }
    else{}
}

document.querySelectorAll(".rps").forEach((item)=>{

    item.addEventListener("click",()=>{
    userselectedchoice = item;
    computerselection();
    })
    })

const newmouse = document.getElementById("newmouse");
const newmouse2 = document.getElementById("newmouse2");
document.addEventListener("mousemove" ,(e)=>{
    newmouse.setAttribute("style", `top: ${e.pageY-15}px;left:${e.pageX-15}px`)
})
document.addEventListener("mousemove" ,(e)=>{
    newmouse2.setAttribute("style", `top: ${e.pageY-15}px;left:${e.pageX-15}px`)
})

const mutebtn =document.getElementById("mute");
mutebtn.addEventListener("click",()=>{
    let music=document.getElementById("music");
    let unmutebtn=document.getElementById("unmute")
    let volume =unmutebtn.getAttribute("class")
    if( volume === "fas fa-volume-up fa-4x"){
        music.pause();
        unmutebtn.setAttribute("class","fas fa-volume-mute fa-4x")
    }else if( volume === "fas fa-volume-mute fa-4x" ){
        music.play();
        unmutebtn.setAttribute("class","fas fa-volume-up fa-4x")
    }
})



let restartbtn = document.getElementById("restart");
restartbtn.addEventListener("click",()=>{

// reset life
plifearr.forEach((life)=>{
life.style.display = "initial";

})
clifearr.forEach((life)=>{
life.style.display = "initial";

})

// reset controls
remover.style.display = "flex"
computercontrol.style.display ="flex"

// reset score
playerscore.innerHTML = 0;
compscore.innerHTML =0 ;
ccount = 0;
pcount = 0;

// reset message
message.innerHTML = "LETS PLAY"
message.style.width = "20vw"


})
