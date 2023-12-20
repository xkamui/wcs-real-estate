import houseToRent from "./houseToRent.js"
import createCard from "./createCard.js"

const cardsElement = document.querySelector('.cards')

createCards(houseToRent)

function createCards(cards) {
    cardsElement.empty
    cards.map((card) => createCard(card, cardsElement))
}
