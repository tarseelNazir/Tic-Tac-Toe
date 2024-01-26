let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#Reset-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0 =true;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

let resetGame = () => {
turn0=true;
enableBoxes();
msgContainer.classList.add("hide");

};


boxes.forEach((box) =>{
    box.addEventListener("click", ()=>{
        console.log("box was clicked");
       if(turn0){
        box.innerText="O";
        turn0=false;
       }else{
        box.innerText="X";
        turn0=true;
       }
       box.disabled=true;


       chkWinner();

       
    });
});

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled= true;
    }
};

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled= false;
        box.innerText="";
    }
};
  

const showWinnwer = (winner) => {
    msg.innerText =`Congratulations, Winner is ${winner}`; 
    msgContainer.classList.remove("hide");
    disableBoxes();

   
};
const chkWinner = () => {
    for (let pattern of winPatterns){
       let posVal1=boxes[pattern[0]].innerText;
       let posVal2=boxes[pattern[1]].innerText;
       let posVal3=boxes[pattern[2]].innerText;

if (posVal1 != "" && posVal2 != "" && posVal3 != "") {
    if(posVal1 === posVal2  && posVal2 === posVal3){
        console.log("winner",posVal1);
        showWinnwer(posVal1);
    
    }
    
}
    } 
};

resetBtn.addEventListener("click", resetGame);