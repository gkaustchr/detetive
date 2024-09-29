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
let country = ''
let local = ''
let nameCriminal = ''
let detectiveFile = []

const divLogsDice = document.getElementById("logs-dice")
const divCards = document.getElementById("cards")
const divActivatedCard = document.getElementById("activated-card")

const selectCountries = document.getElementById("text-country");
const selectLocations = document.getElementById("text-local");
const selectCriminal = document.getElementById("text-criminal");

const modalInfo = document.getElementById("modalInfo");
const modalInfoBody = document.getElementById("modal-info-body");
const modalInfoTitle = document.getElementById("titleModalInfo");
const modalInit = document.getElementById("modalInit");

const imgs = document.querySelectorAll("#cards img")
const modalImgCard = document.getElementById("modalImgCard");
const modalImgCardBody = document.getElementById("modal-img-card");



const paises = [
    { name: "África do Sul", url: "https:////upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/23px-Flag_of_South_Africa.svg.png" },
    { name: "Alemanha", url: "https:////upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/23px-Flag_of_Germany.svg.png" },
    { name: "Angola", url: "https:////upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Angola.svg/23px-Flag_of_Angola.svg.png" },
    { name: "Argentina", url: "https:////upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/23px-Flag_of_Argentina.svg.png" },
    { name: "Austrália", url: "https:////upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Australia.svg/23px-Flag_of_Australia.svg.png" },
    { name: "Brasil", url: "https:////upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/22px-Flag_of_Brazil.svg.png" },
    { name: "Camarões", url: "https:////upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Flag_of_Cameroon.svg/23px-Flag_of_Cameroon.svg.png" },
    { name: "Canadá", url: "https:////upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/23px-Flag_of_Canada_%28Pantone%29.svg.png" },
    { name: "Chile", url: "https:////upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/23px-Flag_of_Chile.svg.png" },
    { name: "China", url: "https:////upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/23px-Flag_of_the_People%27s_Republic_of_China.svg.png" },
    { name: "Coreia do Sul", url: "https:////upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/23px-Flag_of_South_Korea.svg.png" },
    { name: "Costa Rica", url: "https:////upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Costa_Rica.svg/23px-Flag_of_Costa_Rica.svg.png" },
    { name: "Egito", url: "https:////upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/23px-Flag_of_Egypt.svg.png" },
    { name: "Espanha", url: "https:////upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/23px-Flag_of_Spain.svg.png" },
    { name: "Estados Unidos", url: "https:////upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/23px-Flag_of_the_United_States.svg.png" },
    { name: "França", url: "https:////upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/23px-Flag_of_France.svg.png" },
    { name: "Guatemala", url: "https:////upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Flag_of_Guatemala.svg/23px-Flag_of_Guatemala.svg.png" },
    { name: "Índia", url: "https:////upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/23px-Flag_of_India.svg.png" },
    { name: "Indonésia", url: "https:////upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/23px-Flag_of_Indonesia.svg.png" },
    { name: "Irã", url: "https:////upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/23px-Flag_of_Iran.svg.png" },
    { name: "Itália", url: "https:////upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/23px-Flag_of_Italy.svg.png" },
    { name: "Jamaica", url: "https:////upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Jamaica.svg/23px-Flag_of_Jamaica.svg.png" },
    { name: "Japão", url: "https:////upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/23px-Flag_of_Japan.svg.png" },
    { name: "México", url: "https:////upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/23px-Flag_of_Mexico.svg.png" },
    { name: "Nigéria", url: "https:////upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_Nigeria.svg/23px-Flag_of_Nigeria.svg.png" },
    { name: "Nova Zelândia", url: "https:////upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/23px-Flag_of_New_Zealand.svg.png" },
    { name: "Peru", url: "https:////upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Peru.svg/23px-Flag_of_Peru.svg.png" },
    { name: "Portugal", url: "https:////upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/23px-Flag_of_Portugal.svg.png" },
    { name: "Reino Unido", url: "https:////upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/23px-Flag_of_the_United_Kingdom.svg.png" },
    { name: "Rússia", url: "https:////upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/23px-Flag_of_Russia.svg.png" },
    { name: "Tanzânia", url: "https:////upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Tanzania.svg/23px-Flag_of_Tanzania.svg.png" },
    { name: "Venezuela", url: "https:////upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Venezuela.svg/23px-Flag_of_Venezuela.svg.png" }
];

const locations = [
    "Bar",
    "Casa de Banho",
    "Estação de Trem",
    "Fazenda",
    "Hotel",
    "Praça",
    "Teatro",
    "Templo"
]

const criminals = [
    "Alexander Ivanov",
    "Emily Smith",
    "Taylor Brown",
    "Jamie Rivera",
    "Lars Hansen",
    "David Johnson",
    "Ava Wilson",
    "Thomas Müller",
    "Laura Ortega",
    "Dmitry Petrov",
    "Elena Ivanova",
    "Viktor Novikov",
    "Quinn Patel",
    "Jean Dupont",
    "Mateo Fernández"
];


// Função de embaralhar array
const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

async function getflags() {
    let response = await fetch('https://api-paises.pages.dev/paises.json');
    response = await response.json()
    console.log(response)
}

selectCountries.addEventListener("change", function (event) {
    playSound('trip')
})

modalInfo?.addEventListener('keypress', function (e) {
    alert('foi')
    if (e.key == "Escape") {
        closeModalInfo()
    }
});

// // Função para sortear números sem repetição (Criminoso)
// document.getElementById('criminalBtn')?.addEventListener('click', function () {
//     if (criminalNumbers.length === 0) {
//         criminalNumbers = Array.from({ length: 20 }, (_, i) => i + 1);
//         alert('Todos os números foram sorteados! Reiniciando...');
//     }
//     let number = criminalNumbers.splice(Math.floor(Math.random() * criminalNumbers.length), 1)[0];

// });

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

//  Retorna um criminal aleatorio para o criminoso
function getCriminalRandom() {
    let availableNames = [...criminals];

    if (availableNames.length === 0) {
        availableNames = [...criminals]; // Reinicia quando todos os nomes forem escolhidos
    }

    const randomIndex = Math.floor(Math.random() * availableNames.length);
    const name = availableNames.splice(randomIndex, 1)[0]; // Remove o nome do array disponível
    return name;
}

function getCardCriminal() {
    if (criminalNumbers.length === 0) {
        criminalNumbers = Array.from({ length: 20 }, (_, i) => i + 1);
        // alert('Todos os números foram sorteados! Reiniciando...');
    }
    let number = criminalNumbers.splice(Math.floor(Math.random() * criminalNumbers.length), 1)[0];
    return number
}

function handleRowDays() {
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;
    let diceSum = dice1 + dice2;
    diceSum = (diceSum < 4 ? 4 : diceSum);
    detetiveDays = diceSum
    playSound('dices')
    document.getElementById('days-prison').innerText = `${diceSum} days`;
}

function getOneCard() {
    if (detectiveNumbers.length === 0) {
        detectiveNumbers = Array.from({ length: 32 }, (_, i) => i + 1);
        // alert('Todas as cartas já foram sorteadas! Reiniciando...');
    }
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
    divLogsDice.innerText = ''
    arrayLogDices = [];
    totalDays = 0;
    totalHours = 0;
    myCardsinHand = []
    country = ''
    local = ''
    nameCriminal = ''
    detetiveDays = ''
    selectCountries.innerText = 'País:'
    selectLocations.innerText = 'Local:'
    selectCriminal.innerText = 'Criminoso:'
    divCards.innerText = ''
}

function updateCards() {
    // <img src="./assets/img/card/criminoso_1.png" id="img2" ondblclick="removeImage('img2')"></img>
    divCards.innerText = ''

    if (myCardsinHand.length < 5) {
        myCardsinHand.push(getOneCard())
        playSound('card')
    }

    for (let i = 0; i < myCardsinHand.length; i++) {
        let img = document.createElement('img')
        img.src = `./assets/img/card/detetive_${myCardsinHand[i]}.png`
        img.alt = `detetive_${myCardsinHand[i]}.png`
        // Inserir carta em modo de ataque
        img.addEventListener('click', function () {
            divActivatedCard.innerText = ''
            let img1 = document.createElement('img')
            img1.src = `./assets/img/card/detetive_${myCardsinHand[i]}.png`
            img1.alt = `detetive_${myCardsinHand[i]}.png`

            img1.addEventListener('dblclick', function () {
                modalImgCardBody.innerText = '';
                modalImgCard.style.display = 'none';
                modalImgCard.classList.remove('show');

                myCardsinHand.splice(i, 1);
                divCards.innerText = ''
                divActivatedCard.innerText = ''
                updateCards()
            })

            // Evento para mostrar a imagem ao passar o mouse
            img1.addEventListener('mouseenter', function () {
                modalImgCard.innerText = ''; // Limpa o conteúdo anterior
                modalImgCard.style.backgroundImage = `url(./assets/img/card/detetive_${myCardsinHand[i]}.png`
                modalImgCard.style.display = 'block';
                modalImgCard.classList.add('show');
            });

            // Evento para esconder a imagem ao retirar o mouse
            img1.addEventListener('mouseleave', function () {
                modalImgCard.innerText = '';
                modalImgCard.style.display = 'none';
                modalImgCard.classList.remove('show');
            });

            divActivatedCard.appendChild(img1)
        })

        // Evento para mostrar a imagem ao passar o mouse
        img.addEventListener('mouseenter', function () {
            modalImgCard.innerText = ''; // Limpa o conteúdo anterior
            modalImgCard.style.backgroundImage = `url(./assets/img/card/detetive_${myCardsinHand[i]}.png`
            modalImgCard.style.display = 'block';
            modalImgCard.classList.add('show');
        });

        // Evento para esconder a imagem ao retirar o mouse
        img.addEventListener('mouseleave', function () {
            modalImgCard.innerText = '';
            modalImgCard.style.display = 'none';
            modalImgCard.classList.remove('show');
        });

        divCards.appendChild(img)
    }
}

function gameOver() {
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
    if (nameSound == "police") {
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
    console.log(criminalContries)
    criminalContries.map((item, i) => {
        item = item[0]
        let button = document.createElement('button');
        button.classList.add('btn')
        button.classList.add('btn-outline-primary')
        button.value = item?.name;
        button.title = 'Click para remover país';
        button.innerText = item?.name;
        button.background = `url("${item?.url}") no-repeat hidden 0 0 transparent`

        // Adiciona o evento de clique para remover o país da lista e atualizar a exibição
        button.addEventListener('click', function () {
            criminalContries.splice(i, 1); // Usar splice para remover o item do array
            updateContriesCrimanl(); // Atualiza a lista exibida
        });

        divCards.appendChild(button); // Adiciona o botão na div
    });
}

function initGameDetetive() {
    updateTimeDisplay()
    for (let i = 0; i < 5; i++) {
        playSound('card')
        myCardsinHand.push(getOneCard())
    }
    updateCards()
    handleRowDays()
}

function openModalInfo(name) {
    switch (name) {
        case 'countries':
            console.log(name)
            createElementCountries()
            break;

        case 'local':
            console.log(name)
            createElementLocal()
            break;
        case 'criminal':
            console.log(name)
            createElementCriminal()
            break;
        case 'prison':
            console.log(name)
            createElementPrison()
            break;
        case 'detetive':
            console.log(name)
            createElementDetetiveFile()
            break;

    }
    modalInfo.classList.add('show')
    modalInfo.style.display = 'block'
}

function closeModalInfo() {
    modalInfo.classList.remove('show')
    modalInfo.style.display = 'none'
}

function openModalInit() {
    initValues()
    modalInit.classList.add('show')
    modalInit.style.display = 'block'
}

function closeModalInit() {
    initGameDetetive()
    modalInit.classList.remove('show')
    modalInit.style.display = 'none'
}

function initGameCriminal() {
    criminalHand = 0
    // populateRadio()
    divActivatedCard.innerText = ''
    nameCriminal = getCriminalRandom()
    
    criminalHand = getCardCriminal()

    let img = document.createElement('img')
    img.src = `./assets/img/card/criminoso_${criminalHand}.png`
    img.alt = `${criminalHand}.png`

    // Evento para mostrar a imagem ao passar o mouse
    img.addEventListener('mouseenter', function () {
        modalImgCard.innerText = ''; // Limpa o conteúdo anterior
        modalImgCard.style.display = 'block';
        modalImgCard.classList.add('show');
        modalImgCard.style.backgroundImage = `url(./assets/img/card/criminoso_${criminalHand}.png`
    });

    // Evento para esconder a imagem ao retirar o mouse
    img.addEventListener('mouseleave', function () {
        modalImgCard.innerText = '';
        modalImgCard.style.display = 'none';
        modalImgCard.classList.remove('show');
    });

    index = criminals.findIndex((item, i) => item == nameCriminal ? i : null) + 1
    if(! index > 0 || index > 15){
        index = 1
    }

    let img3 = document.createElement('img')
    img3.src = `./assets/img/criminal/criminal_${index}.jpg`
    img3.alt = `criminal_${index}.jpg`

    // Evento para mostrar a imagem ao passar o mouse
    img3.addEventListener('mouseenter', function () {
        modalImgCard.innerText = ''; // Limpa o conteúdo anterior
        modalImgCard.style.backgroundImage = `url(./assets/img/criminal/criminal_${index}.jpg)`
        modalImgCard.style.display = 'block';
        modalImgCard.classList.add('show');
    });

    // Evento para esconder a imagem ao retirar o mouse
    img3.addEventListener('mouseleave', function () {
        modalImgCard.innerText = '';
        modalImgCard.style.display = 'none';
        modalImgCard.classList.remove('show');
    });

    selectCriminal.innerText = `Criminoso: ${nameCriminal}`


    divActivatedCard.appendChild(img3)
    divActivatedCard.appendChild(img)

    criminalContries = getRandomItems(10)

    updateContriesCrimanl()

}

function createElementCountries() {
    console.log(modalInfoBody)
    const div = document.createElement('div')
    paises.map((item, i) => {
        const d = document.createElement('div')
        const img = document.createElement('img')
        img.src = item.url
        const p = document.createElement('p')
        p.innerText = item.name
        d.appendChild(img)
        d.appendChild(p)
        if (country == item.name) {
            d.classList.add('selected')
        } else {
            d.classList.remove('selected')
        }
        d.addEventListener('click', function () {
            if (country == item.name) {
                country = ''
            } else {
                country = item.name
            }
            createElementCountries()
            closeModalInfo()
        })
        div.appendChild(d)
    })
    selectCountries.innerText = `País: ${country}`
    modalInfoBody.innerText = ''
    modalInfoTitle.innerText = 'Países'
    console.log(modalInfo)
    modalInfoBody.appendChild(div)
}

function createElementLocal() {
    console.log(modalInfoBody)
    const div = document.createElement('div')
    locations.map((item, i) => {
        const d = document.createElement('div')
        const img = document.createElement('img')
        img.src = `./assets/img/local/local_${i + 1}.jpg`
        const p = document.createElement('p')
        p.innerText = item
        d.appendChild(img)
        d.appendChild(p)
        if (local == item) {
            d.classList.add('selected')
        } else {
            d.classList.remove('selected')
        }
        d.addEventListener('click', function () {
            if (local == item) {
                local = ''
            } else {
                local = item
            }
            createElementCountries()
            closeModalInfo()
            selectLocations.innerText = `Local: ${local}`
        })
        div.appendChild(d)
    })
    selectLocations.innerText = `Local: ${local}`
    modalInfoTitle.innerText = 'Locais'
    modalInfoBody.innerText = ''
    modalInfoBody.appendChild(div)
}

function createElementCriminal() {
    console.log(modalInfoBody)
    const div = document.createElement('div')
    criminals.map((item, i) => {
        const d = document.createElement('div')
        const img = document.createElement('img')
        img.src = `./assets/img/criminal/criminal_${i + 1}.jpg`
        const p = document.createElement('p')
        p.innerText = item
        d.appendChild(img)
        d.appendChild(p)
        if (nameCriminal == item) {
            d.classList.add('selected')
        } else {
            d.classList.remove('selected')
        }
        d.addEventListener('click', function () {
            if (nameCriminal == item) {
                nameCriminal = ''
            } else {
                nameCriminal = item
            }
            createElementCountries()
            closeModalInfo()
            selectCriminal.innerText = `Criminoso: ${nameCriminal}`
        })
        div.appendChild(d)
    })
    selectCriminal.innerText = `Criminoso: ${nameCriminal}`
    modalInfoTitle.innerText = 'Retrato Falado'
    modalInfoBody.innerText = ''
    modalInfoBody.appendChild(div)
}

function createElementPrison() {
    console.log(modalInfoBody)
    const div = document.createElement('div')

    const btnCriminoso = document.createElement('button')
    btnCriminoso.innerText = "Criminoso fugiu"
    btnCriminoso.type = "button"
    btnCriminoso.classList.add('btn')
    btnCriminoso.classList.add('btn-outline-danger')

    btnCriminoso.addEventListener('click', function () {
        let obj = {
            rounds: arrayLogDices.length,
            criminal: nameCriminal,
            country: country,
            local: local,
            daysIncorred: `${detetiveDays}.${totalHours}`,
            totalDays: totalDays,
            detectiveWon: false,
        }
        detectiveFile.push(obj)
        closeModalInfo()
        openModalInit()
    })

    const btnDetetive = document.createElement('button')
    btnDetetive.innerText = "Criminoso Capturado!"
    btnDetetive.type = "button"
    btnDetetive.classList.add('btn')
    btnDetetive.classList.add('btn-outline-primary')

    btnDetetive.addEventListener('click', function () {
        let obj = {
            rounds: arrayLogDices.length,
            criminal: nameCriminal,
            country: country,
            local: local,
            daysIncorred: `${detetiveDays}.${totalHours}`,
            totalDays: totalDays,
            detectiveWon: true,
        }
        detectiveFile.push(obj)
        closeModalInfo()
        openModalInit()
    })

    div.appendChild(btnCriminoso)
    div.appendChild(btnDetetive)
    modalInfoTitle.innerText = 'Prisão'
    modalInfoBody.innerText = ''
    modalInfoBody.appendChild(div)
}

function createElementDetetiveFile() {
    console.log(modalInfoBody)
    const div = document.createElement('div')
    detectiveFile.map((item, i) => {
        const btnFile = document.createElement('button')
        let text = `
        <p class='h6'>${i + 1}</p>
        <p class='h6'>Vencedor: ${item?.detectiveWon ? "Detetive" : "Ciminoso"}</p>
        <p class='h6'>Crminoso: ${item?.criminal}</p>
        <p class='h6'>País: ${item?.country}</p>
        <p class='h6'>Local: ${item?.local}</p>
        <p class='h6'>Dias: ${item?.daysIncorred}/${item?.totalDays}</p>
        <p class='h6'>Rodadas: ${item?.rounds}</p>
        `
        btnFile.innerHTML = text
        btnFile.type = "button"
        btnFile.classList.add('btn')
        btnFile.classList.add('file')
        if (item?.detectiveWon) {
            btnFile.classList.add('btn-outline-success')
        } else {
            btnFile.classList.add('btn-outline-danger')
        }

        div.appendChild(btnFile)
    })

    modalInfoTitle.innerText = 'Arquivo do detetive'
    modalInfoBody.innerText = ''
    modalInfoBody.appendChild(div)
}
