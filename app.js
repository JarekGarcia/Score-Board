let home = 0;
let away = 0;

function homeScore() {
    console.log('+1 Home')
    home++
    console.log(home)
    document.getElementById("currentHomeScore").innerText = home

}

function homeScoreThree() {
    console.log('+3 Home')
    home += 3
    console.log(home)
    document.getElementById("currentHomeScore").innerText = home

}

function awayScore() {
    console.log('+1 Away')
    away++
    console.log(away)
    document.getElementById("currentAwayScore").innerText = away

}

function awayScoreThree() {
    console.log('+3 Away')
    away += 3
    console.log(away)
    document.getElementById("currentAwayScore").innerText = away

}

function resetScore() {
    home = 0;
    away = 0;
    document.getElementById("currentHomeScore").innerText = home
    document.getElementById("currentAwayScore").innerText = away

}
