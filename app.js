var userScore=0;
var compScore=0;

let choices=document.querySelectorAll(".choices");
var msg=document.querySelector(".msg1");
var userScorepara=document.querySelector("#user-score")
var compScorepara=document.querySelector("#comp-score")
const genCompChice=()=>{
const option=["rock","paper","scissor"];
const index=Math.floor(Math.random()*3)
return option[index];
}
const drawGame=()=>{
    console.log("game is draw");
    msg.innerText="Game is draw.";
    msg.style.backgroundColor="blueviolet"
}
const showWineer=(userWin,userchoice,comchoice)=>{
    if(userWin){
        userScore++;
        userScorepara.innerText=userScore;
        console.log("you win");
        msg.innerHTML=`You Win! your ${userchoice} beats ${comchoice}`
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorepara.innerText=compScore;
        console.log("computer win");
        msg.innerText="You lost"
        msg.style.backgroundColor="red";

    }

}
const playGame=(userchoice)=>{
    console.log("user choice=",userchoice)
    //generate choice->modular

    const comchoice=genCompChice();
    console.log("computer choice= ",comchoice)
if(userchoice===comchoice){
drawGame();
}else{
    var userWin=true;
    if(userchoice==="rock"){
        userWin=comchoice==="paper"?false:true;

    }else if(userchoice=="paper"){
        userWin=comchoice=="scissor"?false:true;

    }else{
        userWin=comchoice==="rock"?false:true;
    }
    showWineer(userWin,userchoice,comchoice);
}

}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        // console.log(`choice was clicked ${userchoice}`);
        playGame(userchoice)
    });
    })