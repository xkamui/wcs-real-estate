import houseToRent from "./houseToRent.js"
import createCard from "./createCard.js"
import manageAvailable from "./manageAvailable.js"
import manageTypes from "./manageTypes.js"
import searchFilter from "./searchFilter.js"

//## Define most used elements
const cardsElement = document.querySelector('.cards')
const availableCheckbox = document.querySelector('#available')
const typesSelect = document.querySelector('#types')
const searchBar = document.querySelector('#search')

//## Init all cards
createCards(houseToRent)

//## Create all cards from given array of Objects
function createCards(cards) {
    cardsElement.innerHTML = ''
    cards.map((card) => createCard(card, cardsElement))
}

//## Display cards which are available, from the checkbox
availableCheckbox.addEventListener('change', function (e) {
    e.preventDefault()
    createCards(manageAvailable(houseToRent))
    return false
}, false)

//## Display cards which are specific types from the select
typesSelect.addEventListener('input', function (e) {
    e.preventDefault()
    createCards(manageTypes(houseToRent, e.target.value))
    return false
}, false)

//## Display cards matching the search bar's value
searchBar.addEventListener('keyup', function(e) {
    e.preventDefault()

    const searchedString = e.target.value

    if (searchedString.length === 0) {
        createCards(houseToRent)
    } else if (searchedString.length > 2) {
        createCards(searchFilter(houseToRent, searchedString))
    }

    return false
}, false)