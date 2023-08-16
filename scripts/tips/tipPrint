// Import the function that returns a copy of the fish array
import { getTips } from '../database.js'

export const FishList = () => {
    // Invoke the function that you imported from the database module
    const tips = getTips()

    // Start building a string filled with HTML syntax
    let htmlString = '<ul class="fish_list">'

    // Create HTNL representations of each fish here
    for (const tip of tips) {

        // Why is there a backtick used for this string?
        htmlString += `
        <li>
            ${tip}
        </li>
`
    }
    htmlString += `</ul>`

    return htmlString
}