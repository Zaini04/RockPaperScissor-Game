
let userScore = 0;
let compScore = 0;


const Options = document.querySelectorAll(".Option");
const msg = document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");



const showWinner = (userWin) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Won `;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose`;
        msg.style.backgroundColor = "red";
    }
}
const drawGame = () =>{
    msg.innerText = `Game was draw! Play Again`;
    msg.style.backgroundColor = "#081b31";
}

const genCompChoice = () =>{
    const choices = ["rock" , "paper" , "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return choices[randIdx];
};
const playGame = (userChoice) =>{
     console.log("user choice is",userChoice);
    const compChoice = genCompChoice();
     console.log("comp choice is",compChoice);

     if(userChoice === compChoice){
        drawGame();
     }else {
        let userWin=true;
             if(userChoice==="rock" && compChoice==="paper"){
                userWin=false;
             }else if(userChoice==="rock" && compChoice==="scissors"){
                userWin=true;
             }else if(userChoice==="paper" && compChoice==="scissors"){
                userWin=false;
             }else if(userChoice==="paper" && compChoice==="rock"){
                userWin=true;
             }else if(userChoice==="scissors" && compChoice==="paper"){
                userWin=true;
             }else if(userChoice==="scissors" && compChoice==="rock"){
                userWin=fale;
             }
     showWinner(userWin)
    }


};



Options.forEach((Option)  => {
    Option.addEventListener("click" , () =>{
        const userChoice = Option.getAttribute("id");
        // console.log(userChoice," was clicked");
        playGame(userChoice);
    });
});
$('#rock , #paper , #scissors').on('click' , function(){
   console.log("hello Zain");
   $('#msg').fadeOut(300).fadeIn(300);
});
