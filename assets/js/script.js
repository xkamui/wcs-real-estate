import houseToRent from "./houseToRent.js"
import createCard from "./createCard.js"
import manageFilters from "./manageFilters.js"

//## Define most used elements
const cardsElement = document.querySelector('.cards')
const availableCheckbox = document.querySelector('#available')
const typesSelect = document.querySelector('#types')
const searchBar = document.querySelector('#search')

//## Init filters
const filters = {'search': null, 'available': false, 'types': 'All'}
export default filters

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
    filters.available = e.target.checked
    createCards(manageFilters(houseToRent))
    return false
}, false)

//## Display cards which are specific types from the select
typesSelect.addEventListener('input', function (e) {
    e.preventDefault()
    // houseToDisplay = manageTypes(houseToRent, e.target.value)
    filters.types = e.target.value
    createCards(manageFilters(houseToRent))
    return false
}, false)



//## Display cards matching the search bar's value
searchBar.addEventListener('keyup', function(e) {
    e.preventDefault()

    const searchedString = e.target.value

    if (searchedString.length === 0) {
        filters.search = null
    } else if (searchedString.length > 2) {
        filters.search = searchedString
    }
    
    createCards(manageFilters(houseToRent))

    return false
}, false)