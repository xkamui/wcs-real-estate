import houseToRent from "./houseToRent.js"
import createCard from "./createCard.js"
import manageAvailable from "./manageAvailable.js"

const cardsElement = document.querySelector('.cards')

createCards(houseToRent)

//## Create all cards from given array of Objects
function createCards(cards) {
    cardsElement.innerHTML = ''
    cards.map((card) => createCard(card, cardsElement))
}

document.querySelector('#available').addEventListener('change', function(e){
    e.preventDefault()
    createCards(manageAvailable(houseToRent))
    return false
}, false)