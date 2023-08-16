// Import the function that returns a copy of the fish array
import { getTips } from '../database.js'

export const TipList = () => {
    // Invoke the function that you imported from the database module
    const tips = getTips()

    // Start building a string filled with HTML syntax
    let htmlString2 = '<ul class="fish_list">'

    // Create HTNL representations of each fish here
    for (const tip of tips) {

        // Why is there a backtick used for this string?
        htmlString2 += `
        <li>
            ${tip.tip}
        </li>
`
    }
    htmlString2 += `</ul>`

    return htmlString2
}