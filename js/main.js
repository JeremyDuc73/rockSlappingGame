const cells = document.querySelectorAll('.cell')
const chris = document.querySelector('.chrisRock')
const score = document.querySelector('#score')
const timeLeft = document.querySelector('#timeLeft')
const startButton = document.querySelector('.start')

let position;
let scoreValue =0;
let timeLeftValue = null;
let moveChris = null;
let startCountdown = null;


startButton.addEventListener('click', start)

cells.forEach(cell =>{
    cell.addEventListener('mousedown', ()=>{
        if (cell.id == position){
            scoreValue++
            score.innerHTML = scoreValue
            position = null
        }
    })
})

function randomlySpawnChris(){

    if(!timeLeftValue) return

    cells.forEach(cell=>{cell.classList.remove('chrisRock')})
    let randomCell = cells[Math.floor(Math.random()*9)]
    randomCell.classList.add('chrisRock')
    position = randomCell.id
}

function countdown(){

    if(!timeLeftValue) return


    timeLeftValue--
    timeLeft.innerHTML = timeLeftValue
    if (timeLeftValue == 0){
        clearInterval(moveChris)
        clearInterval(startCountdown)
        alert(`GAME OVER !! SCORE : ${scoreValue}`)
    }
}

function start(){
    timeLeftValue = 5
    scoreValue = 0
    score.innerHTML = scoreValue
    moveChris = setInterval(randomlySpawnChris, 500)
    startCountdown = setInterval(countdown,1000)
}








