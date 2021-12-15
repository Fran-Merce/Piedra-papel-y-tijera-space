const options = document.querySelectorAll('.option')
// const a = document.querySelectorAll('#scissorsOption')
const optionPlayerContainer = document.querySelector("#player-screen")
const optionCpuContainer = document.querySelector("#cpu-screen")



options.forEach(option => {
    option.addEventListener('click', function (e) {
        const optionSelected = e.target.src
        optionPlayerContainer.innerHTML = `<img src="${optionSelected}">`
        // getOptionCpu()
        validacion(e.target, getOptionCpu(optionsObject))

    })
})



const getRandomNumber = () => {
    let randomNumber = Math.floor(Math.random() * (3 - 0) + 0);
    return randomNumber
}


const optionsObject = [
    scissorsOption = document.querySelector('#scissorsOption'),
    rockOption = document.querySelector('#rockOption'),
    paperOption = document.querySelector('#paperOption'),
]
const getOptionCpu = () => {
    const random = getRandomNumber()
    // console.log(random);
    options.forEach(option => {
        if (option.getAttribute('data-id') == options[random].getAttribute('data-id')) {
            // console.log(options[random]);
            optionCpuContainer.innerHTML = `<img src="${options[random].src}">`
        }
    })
    return selected = options[random]
}

let scorePlayer =0
let scoreCpu = 0
function validacion(playerSelected, OptionCpu) {
    if (playerSelected === OptionCpu) {
        console.log("empate")
        document.querySelector('.pop-up-tie').style.visibility="visible"
    } 
    else if ((playerSelected === optionsObject[0] && OptionCpu === optionsObject[2])
            || (playerSelected === optionsObject[1] && OptionCpu === optionsObject[0]) 
            || (playerSelected === optionsObject[2] && OptionCpu === optionsObject[1])) 
            {
            document.querySelector('.pop-up-win').style.visibility="visible"
            console.log("ganaste");
            
            document.querySelector('.score-board__player').textContent=`${scorePlayer+=1}`
        } 
    else {
        document.querySelector('.pop-up-defeat').style.visibility="visible"
        document.querySelector('.score-board__cpu').textContent=`${scoreCpu+=1}`
    }
}

// function reset() {
//     optionPlayerContainer.innerHTML =""
//     optionCpuContainer.innerHTML=""
// }