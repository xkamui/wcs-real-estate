import filters from "./script.js"

export default function manageFilters(cards) {

    let houses = []
    
    // Check for available items
    if (filters.available === true) {
        houses = cards.filter((house) => house.available === filters.available)
    } else {
        houses = cards.filter((house) => house.available === true || house.available === false)
    }

    // Check for items' type
    if (filters.types !== 'All') {
        houses = houses.filter((house) => house.type === filters.types)
    }

    if (filters.search !== null) {
        
        // Create a new field in the object containing all the texts to search from
        houses.map((house) => {
            const allTerms = house.name + ' ' + house.type + ' ' + house.desc
            house.searchContent = allTerms.toLowerCase()
        })
    
        // Filter the new field with the lowercased searched value
        houses = houses.filter((house) => house.searchContent.includes(filters.search.toLowerCase()))
    
    }

    return houses

}