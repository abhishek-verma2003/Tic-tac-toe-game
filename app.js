let boxes=document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn = true;
let count=0;
const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const resetGame = () =>{
    turn =true;
    enableBtns();
    msgContainer.classList.add("hide");
}
const disableBtns = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBtns = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn){
            box.innerText="0";
            turn = false;
        }else{
            box.innerText="X";
            turn = true;
        }
        box.disabled = true;
        let isWinner = checkWinner();
        count++;
        if(count === 9 & !isWinner){
            msg.innerText="It is a draw";
            msgContainer.classList.remove("hide");
            disableBtns();
        }
    });
});
const showWinner = (winner) =>{
    msg.innerText = `Congratulations , winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBtns();
}
const checkWinner = () =>{
    for(let pattern of winPatterns){
        let pos1val= boxes[pattern[0]].innerText;
        let pos2val= boxes[pattern[1]].innerText;
        let pos3val= boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != "" ){
            if(pos1val === pos2val && pos2val === pos3val){
                showWinner(pos1val);
            }
        }
    }
};

newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);