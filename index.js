const options = document.querySelectorAll('.option')
const optionPlayerContainer = document.querySelector("#player-screen")
const optionCpuContainer = document.querySelector("#cpu-screen")
const btnRestart = document.querySelector("#btnRestart")
let scorePlayer =0
let scoreCpu = 0
let generateAnimation = false;

options.forEach(option => {
    option.addEventListener('click', function (e) {
        const optionSelected = e.target
        optionPlayerContainer.innerHTML = `<img  src="${optionSelected.src}" class="options__imgs">`
        animation()
        function timeout (){
            validate(optionSelected, getOptionCpu(optionsObject))
        }
        setTimeout(timeout,2000)
    })
})

const optionsObject = [
    scissorsOption = document.querySelector('#scissorsOption'),
    rockOption = document.querySelector('#rockOption'),
    paperOption = document.querySelector('#paperOption'),
]


const getRandomNumber = () => {
    let randomNumber = Math.floor(Math.random() * (3 - 0) + 0);
    return randomNumber
}


const getOptionCpu = () => {
    const random = getRandomNumber()
    options.forEach(option => {
        if (option.getAttribute('data-id') == options[random].getAttribute('data-id')) {
            optionCpuContainer.innerHTML = `
                <div>
                    <div class="animacion2">
                        <img class="options__imgs" src="${options[random].src}" >
                    </div>
                </div>
            `
        }
    })
    return selected = options[random]
}


const  validate = (playerSelected, OptionCpu)=> {
    if (playerSelected === OptionCpu) {
        document.querySelector('#pop-up').classList.add("pop-up-tie")
        document.querySelector('#result').textContent="empate"
        popUp.style.visibility="visible"

    } 
    else if ((playerSelected === optionsObject[0] && OptionCpu === optionsObject[2])
            || (playerSelected === optionsObject[1] && OptionCpu === optionsObject[0]) 
            || (playerSelected === optionsObject[2] && OptionCpu === optionsObject[1])) 
            {
                document.querySelector('#pop-up').classList.add("pop-up-win")
                document.querySelector('#result').textContent="ganaste"
                document.querySelector('.score-board__player').textContent=`${scorePlayer+=1}`
                popUp.style.visibility="visible"

        } 
    else {document.querySelector('#pop-up').classList.add("pop-up-defeat")
            document.querySelector('#result').textContent="Perdiste"
            popUp.style.visibility="visible"
            document.querySelector('.score-board__cpu').textContent=`${scoreCpu+=1}`
    }
}




const popUp =document.querySelector('#pop-up')
btnRestart.addEventListener("click",()=>{
    optionCpuContainer.innerHTML = ""
    optionPlayerContainer.innerHTML=""
    popUp.style.visibility="hidden"
    if(popUp.classList){
        
        popUp.style.visibility="hidden"
        if(popUp.classList == "pop-up-tie"){
            popUp.classList.remove("pop-up-tie")
            console.log("hola1");
        }else if(popUp.classList == "pop-up-win"){
            popUp.classList.remove("pop-up-win")
            console.log("hola2");
        }else{
            popUp.classList.remove("pop-up-defeat")
            console.log("hola3");
        }

    }
    generateAnimation=false

})














const animation=()=> {
    const CpuContainerChild = document.createElement("div") 
        if(generateAnimation !=true){
            generateAnimation =true
            CpuContainerChild.classList.add("animacion")
            const CpuContainerChildChild=document.createElement('div')
            CpuContainerChild.appendChild(CpuContainerChildChild)
            optionCpuContainer.appendChild( CpuContainerChild)
        }
}