const choices = ["✊","✋","✌️"];
const playerdisplay = document.getElementById("playerdisplay");
const computerdisplay = document.getElementById("computerdisplay");
const resultdisplay = document.getElementById("resultdisplay");
const playerscoredisplay = document.getElementById("plays")
const compscoredisplay = document.getElementById("comps")

let playerscore = 0
let coputerscore = 0
function playgame(playerchoice){
    let x = Math.floor(Math.random()*3);
    let compchoice = choices[x]
    console.log(compchoice);
    let result = "";
    if(playerchoice === compchoice){
        result = "TIE 🙂"
    }
    else{
        switch(playerchoice){
            case "✊" :
                if(compchoice === "✌️") result = "YOU WIN 🥳"
                else result = "YOU LOOSE 🤥"
                break;
            case "✋" :
                if(compchoice === "✊") result = "YOU WIN 🥳"
                else result = "YOU LOOSE 🤥"
                break;
            case "✌️" :
                if(compchoice === "✋") result = "YOU WIN 🥳"
                else result = "YOU LOOSE 🤥"
                break;
        }
    }
    playerdisplay.innerHTML = `PLAYER:${playerchoice}`
    computerdisplay.innerHTML = `COMPUTER:${compchoice}`
    resultdisplay.innerHTML = result;

    switch(result){
        case "YOU WIN 🥳":
            playerscore++;
            playerscoredisplay.innerText=playerscore;
            break;
        case "YOU LOOSE 🤥":
            coputerscore++;
            compscoredisplay.innerText=coputerscore;
            break;
    }
}

function end(){
    playerscore = 0
    coputerscore = 0
    playerscoredisplay.innerText=0
    compscoredisplay.innerText=0
    playerdisplay.innerHTML='PLAYER:'
    computerdisplay.innerHTML='COMPUTER:'
    resultdisplay.innerHTML=''
}