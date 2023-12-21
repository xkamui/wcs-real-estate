export default function searchFilter(cards, value) {

    let houses = cards

    // Create a new field in the object containing all the texts to search from
    houses.map((house) => {
        const allTerms = house.name + ' ' + house.type + ' ' + house.desc
        house.searchContent = allTerms.toLowerCase()
    })

    // Filter the new field with the lowercased searched value
    const filteredHouses = houses.filter((house) => house.searchContent.includes(value.toLowerCase()))

    return filteredHouses

}