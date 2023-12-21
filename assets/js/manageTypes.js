export default function manageTypes(cards, value) {

    let houses = cards

    if (value !== 'All') {
        houses = cards.filter((house) => house.type === value)
    }

    return houses

}