const ergebniss = document.getElementById('ergebniss')
const spielerPunkteDisplay = document.getElementById('scorePlayer')
const kiPunkteDisplay = document.getElementById('scoreKi')
let runningGame = false
let maxRunden = 0
let runde = 0
let playerPoints = 0
let kiPoints = 0
const kiHands = ['Stein', 'Schere', 'Papier']

const check = (event) => {
    if (!runningGame) {
        maxRunden = Number(document.querySelector('input[type=radio]:checked').value)
        runningGame = true
    }
    console.log(runde, maxRunden)
    if (runde < maxRunden) {
        runde++
        const ki = kiHands[skynet()]
        const player = event.target.innerText

        switch (vergleich(ki, player)) {
            case 0: ergebniss.innerHTML = "Leider unentschieden"
                spielerPunkteDisplay.innerHTML = playerPoints
                kiPunkteDisplay.innerHTML = kiPoints
                break;
            case -1: ergebniss.innerHTML = "Leider Verloren"
                kiPoints++
                spielerPunkteDisplay.innerHTML = playerPoints
                kiPunkteDisplay.innerHTML = kiPoints
                break;
            case 1: ergebniss.innerHTML = "Du hast gewonnen"
                playerPoints++
                spielerPunkteDisplay.innerHTML = playerPoints
                kiPunkteDisplay.innerHTML = kiPoints
                break;
        }
        if (runde === maxRunden) {
            check()
            ergebniss.innerHTML = "Das Spiel ist Zuende"
        }


    }

}


const skynet = () => {
    return Math.floor(Math.random() * kiHands.length)
}

const vergleich = (ki, player) => {
    let result = 0
    switch (ki + player) {
        case "SteinStein":
        case "SchereSchere":
        case "PapierPapier":
            result = 0
            break;
        case "SteinSchere":
        case "ScherePapier":
        case "PapierStein":
            result = -1
            break;
        case "SchereStein":
        case "PapierSchere":
        case "PapierStein":
            result = 1
            break;
    }
    return result

}

const reset = () => {
    runnnigGame = false
    runde = 0
    playerpoints = 0
    kiPoints = 0
}
