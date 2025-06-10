let userscore = 0;
let compscore = 0;


const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user");
const compscorepara = document.querySelector("#comp");


const gencompchoice = () =>{
    let options = ["rock","paper","scissors"];
    const randomix = Math.floor(Math.random()*3);
    return options[randomix];
}

const draw = ()  =>{
     msg.innerText = "Game Draw!! Play Again";
     msg.style.backgroundColor = "#081b31";
}

const showwinner = (userwin,userchoice,compchoice)  =>{
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `You Win!! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = `You Lose!! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
  }
}


const playgame = (userchoice) =>{
    //generate computer choice
    const compchoice = gencompchoice();
    if(userchoice==compchoice){
        draw();
    }
    else{
        let userwin = true;
        if(userchoice === "rock"){
            userwin = compchoice ==="paper" ? false : true;
        }
        else if(userchoice === "paper"){
            userwin = compchoice ==="scissors" ? false : true;
        }
        else {
            userwin = compchoice ==="rock" ? false : true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
  }

const choices = document.querySelectorAll(".choice");
choices.forEach( (choice) => {
    choice.addEventListener("click", () =>{
        const userchoice = choice.getAttribute("id");
       //console.log("choice was clicked",choiceid);
      playgame(userchoice);
    });
});

