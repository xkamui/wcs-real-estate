export default function manageAvailable(cards) {

    let houses = cards

    if (document.querySelector('#available').checked) {
        houses = cards.filter((house) => house.available === true)
    }

    return houses

}