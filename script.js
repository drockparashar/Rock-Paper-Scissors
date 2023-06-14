const userScore=document.getElementById("user_score")
const compScore=document.getElementById("comp_score")
const rock=document.querySelector(".rock")
const paper=document.querySelector(".paper")
const scissors=document.querySelector(".scissors")
const descision=document.getElementById("decision")
const win=document.getElementById("win")
let user=0
let comp=0


rock.addEventListener("click",()=>
{
    let userChoice="r";
    game(userChoice)
})

paper.addEventListener("click",()=>
{
    let userChoice="p";
    game(userChoice)
})

scissors.addEventListener("click",()=>
{
    let userChoice="s";
    game(userChoice)
})


function game( userChoice)
{
    let ar=["r","p","s"]
    let rand=Math.floor(Math.random()*3)
    let computerChoice=ar[rand]
    switch(computerChoice)
    {
        case "r":
            descision.textContent="Computer's Choice is Rock"
            break
        case "p":
            descision.textContent="Computer's Choice is Paper"
            break
        case "s":
            descision.textContent="Computer's Choice is Scissors"
            break
    }
    switch(userChoice+computerChoice){
        case "pr":
        case "rs":
        case "sp":
            user+=1
            compScore.textContent=comp
            userScore.textContent=user
            win.textContent="User Wins"
            break;
        
        case "rp":
        case "sr":
        case "ps":
                comp+=1
                userScore.textContent=user
                compScore.textContent=comp
                win.textContent="Computer Wins"
                break;
        
        case "pp":
        case "rr":
        case "ss":
                userScore.textContent=user
                compScore.textContent=comp
                win.textContent="Draw"
                break;
                
        
    }

}








