// Variáveis para o sorteio de números
let criminalNumbers = Array.from({ length: 20 }, (_, i) => i + 1);
let detectiveNumbers = Array.from({ length: 32 }, (_, i) => i + 1);
let arrayLogDices = [];
let totalDays = 0;
let detetiveDays = 0;
let totalHours = 0;
let myCardsinHand = []
let criminalHand = 0
let criminalContries = []
const divLogsDice = document.getElementById("logs-dice")
const divCards = document.getElementById("cards")
const divActivatedCard = document.getElementById("activated-card")
const selectCountries = document.getElementById("countries");
const checkLocations = document.getElementById("locations");

const paises = ["Brazil", "Estados Unidos", "Mexico", "Canadá", 'Venezuela', 'Argentina', 'Portugual', 'Espanha', 'Alemanha', 'França', 'Russia', 'Libano', 'Nigéria', 'Africa do Sul', 'Egito', 'Ganna', 'Madagascar', 'Australia', 'Japão', 'China']
const locations = ["Bar", "Igreja", "Estadio", "Hotel", "Banco", "Praia"]

// Função de embaralhar array
const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

selectCountries.addEventListener("change", function (event) {
    playSound('trip')
})

// Função para sortear números sem repetição (Criminoso)
document.getElementById('criminalBtn')?.addEventListener('click', function () {
    alert('foi')

    if (criminalNumbers.length === 0) {
        criminalNumbers = Array.from({ length: 20 }, (_, i) => i + 1);
        alert('Todos os números foram sorteados! Reiniciando...');
    }
    let number = criminalNumbers.splice(Math.floor(Math.random() * criminalNumbers.length), 1)[0];
    document.getElementById('result').innerText = `Número sorteado: ${number}`;

});

// Função para sortear números sem repetição (Detetive)
document.getElementById('detectiveBtn')?.addEventListener('click', function () {
    let number = detectiveNumbers.splice(Math.floor(Math.random() * detectiveNumbers.length), 1)[0];
    document.getElementById('resultDetective').innerText = `Número sorteado: ${number}`;
});

// Função para rolar 1 dado
document.getElementById('rollOneDiceBtn')?.addEventListener('click', function () {
    let diceValue = Math.floor(Math.random() * 6) + 1;
    arrayLogDices.push(diceValue)
    showLogsDices()
    playSound('dice')
    document.getElementById('diceResult').innerText = `Valor do dado: ${diceValue}`;
});

// Função para rolar 2 dados
document.getElementById('rollTwoDiceBtn')?.addEventListener('click', function () {
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;
    arrayLogDices.push(`${dice1}, ${dice2} = ${dice1 + dice2}`)
    showLogsDices()
    playSound('dices')
    document.getElementById('diceResult').innerText = `Dados: ${dice1}, ${dice2} (Soma: ${dice1 + dice2})`;
});

// Função para rolar 2 dados e guardar o total da soma
document.getElementById('rollTwoDiceSaveBtn')?.addEventListener('click', function () {
    initGameDetetive()
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;
    let diceSum = dice1 + dice2;
    diceSum = (diceSum < 4 ? 4 : diceSum);
    detetiveDays = diceSum
    playSound('dices')
    document.getElementById('days-prison').innerText = `${diceSum} days`;
});

// Função para adicionar horas e converter para dias
document.getElementById('addHourBtn')?.addEventListener('click', function () {
    let addedHours = parseInt(document.getElementById('hourInput').value);
    totalHours += addedHours;

    if (totalHours >= 24) {
        let extraDays = Math.floor(totalHours / 24);
        totalHours = totalHours % 24;
        totalDays += extraDays;
    }
    updateTimeDisplay();
});

function getCardCriminal() {
    if (criminalNumbers.length === 0) {
        criminalNumbers = Array.from({ length: 20 }, (_, i) => i + 1);
        alert('Todos os números foram sorteados! Reiniciando...');
    }
    let number = criminalNumbers.splice(Math.floor(Math.random() * criminalNumbers.length), 1)[0];
    return number
}

function getOneCard() {
    // if (detectiveNumbers.length === 0) {
    //     detectiveNumbers = Array.from({ length: 32 }, (_, i) => i + 1);
    //     alert('Todas as cartas já foram sorteadas! Reiniciando...');
    // }
    let number = detectiveNumbers.splice(Math.floor(Math.random() * detectiveNumbers.length), 1)[0];
    return number
}

// Função para obter um item aleatório sem repetição
function getRandomItems(numItems) {
    const arrayCopy = [...paises]; // Cria uma cópia do array original
    const result = [];

    for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * arrayCopy.length); // Seleciona um índice aleatório
        const selectedItem = arrayCopy.splice(randomIndex, 1); // Remove o item selecionado do array e adiciona ao resultado
        result.push(selectedItem);
    }
    let number = criminalNumbers.splice(Math.floor(Math.random() * criminalNumbers.length), 1)[0];
    return result;
}

function updateTimeDisplay() {
    document.getElementById('days-ocurred').innerText = `${totalDays} Dias, ${totalHours} Horas`;
    if (totalDays > detetiveDays) {
        playSound('gameover')
        alert('Fim de jogo, seu tempo acabou!')
        initGameDetetive()
    }
}

// Função para remover imagens ao clicar duas vezes
function removeImage(id) {
    let img = document.getElementById(id);
    img.style.display = 'none';
}

function populateSelect() {
    selectCountries.innerText = ''
    paises.sort().map((item, i) => {
        let option = document.createElement('option');
        option.innerHTML = item;
        selectCountries.appendChild(option)
    })
}

function populateRadio() {
    checkLocations.innerText = ''
    locations.sort().map((item, i) => {
        let input = document.createElement('input');
        let label = document.createElement('label');
        input.id = i;
        input.type = 'radio';
        input.name = 'local';
        input.value = item;
        input.innerText = item
        input.checked = true
        label.innerText = item
        label.appendChild(input)
        checkLocations.appendChild(label)
    })
}

function showLogsDices() {
    let label = document.createElement('label')
    label.innerText = `(${arrayLogDices.length}).  ${arrayLogDices[arrayLogDices.length - 1]}`
    divLogsDice.appendChild(label)
    divLogsDice.scrollTop = divLogsDice.scrollHeight;
}

function initValues() {
    criminalNumbers = Array.from({ length: 20 }, (_, i) => i + 1);
    detectiveNumbers = Array.from({ length: 32 }, (_, i) => i + 1);
    arrayLogDices = [];
    totalDays = 0;
    totalHours = 0;
    myCardsinHand = []
}

function updateCards() {
    // <img src="./assets/img/card/criminoso_1.png" id="img2" ondblclick="removeImage('img2')"></img>
    divCards.innerText = ''
    if (myCardsinHand.length == 0) {
        detectiveNumbers = Array.from({ length: 32 }, (_, i) => i + 1);
        alert('Todas as cartas já foram sorteadas! Reiniciando...');
        playSound('card')
        myCardsinHand.push(getOneCard())
        myCardsinHand.push(getOneCard())
        playSound('card')
        myCardsinHand.push(getOneCard())
        myCardsinHand.push(getOneCard())
        myCardsinHand.push(getOneCard())
        playSound('card')

    } else if (myCardsinHand.length < 5) {
        myCardsinHand.push(getOneCard())
        playSound('card')
    }

    for (let i = 0; i < myCardsinHand.length; i++) {
        let img = document.createElement('img')
        img.src = `./assets/img/card/detetive_${myCardsinHand[i]}.png`
        img.alt = `detetive_${myCardsinHand[i]}.png`
        img.addEventListener('click', function () {
            divActivatedCard.innerText = ''
            let img1 = document.createElement('img')
            img1.src = `./assets/img/card/detetive_${myCardsinHand[i]}.png`
            img1.alt = `detetive_${myCardsinHand[i]}.png`
            img1.addEventListener('dblclick', function () {
                myCardsinHand.splice(i, 1);
                divCards.innerText = ''
                divActivatedCard.innerText = ''
                updateCards()
            })
            // img1.addEventListener('click', function () {
            //     divActivatedCard.innerText = ''
            // })

            divActivatedCard.appendChild(img1)
        })
        divCards.appendChild(img)
    }
}

function gameOver(){
    playSound('police')
    alert("Criminoso foi pego!")
    initGameCriminal()
}

function playSound(nameSound) {
    let sound = 0
    switch (nameSound) {
        case "dice":
            sound = document.getElementById('soundDice')
            break;
        case "dices":
            sound = document.getElementById('soundDices')
            break;
        case "card":
            sound = document.getElementById('soundCard')
            break;
        case "trip":
            sound = document.getElementById('soundTrip')
            break;
        case "police":
            sound = document.getElementById('soundPolice')
            break;
        case "gameover":
            sound = document.getElementById('soundGameOver')
            break;
    }
    // Reproduzir o som
    sound.currentTime = 0;  // Reinicia o áudio desde o início
    sound.play();            // Reproduz o áudio
    if(nameSound == "police" ){
        sound.currentTime = 0;  // Reinicia o áudio desde o início
        sound.play();            // Reproduz o áudio
        sound.currentTime = 0;  // Reinicia o áudio desde o início
        sound.play();            // Reproduz o áudio
        sound.currentTime = 0;  // Reinicia o áudio desde o início
        sound.play();            // Reproduz o áudio
        sound.currentTime = 0;  // Reinicia o áudio desde o início
        sound.play();                // Reproduz o áudio
    }
}

function updateContriesCrimanl() {
    divCards.innerText = ''; // Limpa o conteúdo atual da div

    criminalContries.map((item, i) => {
        let button = document.createElement('button');
        button.value = item;
        button.innerText = item;
        
        // Adiciona o evento de clique para remover o país da lista e atualizar a exibição
        button.addEventListener('click', function () {
            criminalContries.splice(i, 1); // Usar splice para remover o item do array
            updateContriesCrimanl(); // Atualiza a lista exibida
        });
        
        divCards.appendChild(button); // Adiciona o botão na div
    });
}

function initGameDetetive() {
    initValues()
    updateTimeDisplay()
    for (let i = 0; i < 5; i++) {
        playSound('card')
        myCardsinHand.push(getOneCard())
    }
    updateCards()
    populateSelect()
    populateRadio()
}

function initGameCriminal() {
    criminalHand = 0
    populateRadio()
    divActivatedCard.innerText = ''
    criminalContries = getCardCriminal()
    let img = document.createElement('img')
    img.src = `./assets/img/card/criminoso_${criminalContries}.png`
    img.alt = `${criminalContries}.png`
    divActivatedCard.appendChild(img)
    criminalContries = getRandomItems(10)
    updateContriesCrimanl()

}
