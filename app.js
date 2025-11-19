let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let msgContainer = document.querySelector(".msgContainer");
let winnerMessage = document.querySelector("#msg");
let newGamebtn = document.querySelector("#newgamebtn") ;



let turn_o = true;
const winPatterns = [
  [0, 1,2],
 [3, 4, 5],
 [6, 7, 8],
 [0, 3, 6],
 [1, 4, 7],
 [2, 5, 8],
 [0, 4, 8],
 [2, 4, 6],
];

const resetGame = () => {
    turn_o = true;
    enableboxes ();
    msgContainer.classList.add("hide");

}
newGamebtn.addEventListener("click" , resetGame);
reset.addEventListener("click" , resetGame);

boxes.forEach((box) => {
  box.addEventListener("click", () => {

    
   
    if (turn_o === true) {
      box.innerText = "O";
      turn_o = false;
    } else {
      box.innerText = "X";
      turn_o = true;
    }
    box.disabled = true;

    checkingWinner () ;
  });
});

const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = ""

    }

}

const disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const showWinner = (winner) => {
    winnerMessage.innerText =` Congratulations  Winner is ${winner}`
    msgContainer.classList.remove("hide");
    disableboxes ();


}

const checkingWinner = () => {
    for ( let pattern of winPatterns) {
      let positionone = boxes[pattern[0]].innerText;
      let positiontwo = boxes[pattern[1]].innerText;
      let positionthree = boxes[pattern[2]].innerText;
      if ( positionone != "" && positiontwo !=  "" && positionthree != "") {
        if (positionone === positiontwo && positiontwo === positionthree) {
            console.log(" Hurrah! Winner is:" , positionone);
            showWinner (positionone) ;
        }
      }
    };
    }
