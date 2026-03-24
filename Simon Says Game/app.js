let gameSeq=[];
let userSqn=[];


let btns = ["red","Purple","yellow","blue"];

let started=false;
let level =0;

let highScore =0;

let h2 = document.querySelector("h2");
let h3 = document.querySelector("#high-score");

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game is started");
        started = true;
        

        levelUp();
    }
})

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);

}
function checkans(idx){

    if(userSqn[idx]===gameSeq[idx]){
        if(userSqn.length === gameSeq.length){
            setTimeout(levelUp,1000);
        }
    } else {
    if (level > highScore) {
        highScore = level;
        h3.innerText = `High Score: ${highScore}`;
    }

    h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start`;
    
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function() {
        document.querySelector("body").style.backgroundColor = "white";
    }, 150);

    resetGame();
}

}


function btnPress(){
    let btn =this;
    btnFlash(btn);

    userColor = btn.getAttribute("id");
    userSqn.push(userColor)

    checkans(userSqn.length -1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function levelUp(){
    userSqn=[];
    level++;
    h2.innerText =`Level ${level}`;

    let randIndex = Math.floor(Math.random()* 4);
    let randColor = btns[randIndex];
    let randbtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randbtn);

}

function resetGame() {
    started = false;
    gameSeq = [];
    userSqn = [];
    level = 0;
}