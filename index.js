let boxes = document.querySelectorAll(".box");
let resetbtn =document.querySelector("#resetbtn");
let Newbtn = document.querySelector("#Newbtn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;//  playerX , Player O

const WinPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];
const resetGame = () => {
    turnO = true;
     enableBoxes();
     msgcontainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        //  console.log("box was clicked");
       
         if(turnO){ // player O
            box.innerText = "O";
            turnO = false;
         } else{ // playerX
            box.innerText = "X";
            turnO = true;
         }
         box.disabled = true;
         checkwinner();
    });
});

// to only get single winner
  const disableBoxes = () =>
  {
    for(let box of boxes){
        box.disabled = true;
    }
  };

const enableBoxes = () =>
  {
    for(let box of boxes){
        box.enabled = false;
        box.innerText ="";
    }
  };



const showwinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    //  Notice the backticks (the key just below yourEsc` key on most keyboards). This allows string interpolation to work.


    msgcontainer.classList.remove("hide");
}

// to decide winner
const checkwinner = () =>{
    for (let pattern of WinPatterns){
    let pos1value = boxes[pattern[0]].innerText;
    let pos2value = boxes[pattern[1]].innerText;
    let pos3value = boxes[pattern[2]].innerText;
    if(pos1value !="" && pos2value !="" && pos3value !=""){
        if(pos1value === pos2value && pos2value === pos3value){
            console.log("winner ",pos1value);
            showwinner(pos1value);
        }
    }
  }
};

Newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
