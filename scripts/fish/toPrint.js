// Import the function that returns a copy of the fish array
import { getFish } from '../database.js'

export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

    // Start building a string filled with HTML syntax
    let htmlString = '<ul class="fish_list">'

    // Create HTNL representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<li class="fish_card">
                    <div>
                        <strong>${fish.name}</strong>, <i>${fish.length}cm</i>
                    </div>
                    <div>
                        Species: <i>${fish.species}</i>
                        <br>
                        Found in: <i>${fish.location}</i>
                    </div>
                </li> <aside>Salinity: ${fish.salinity}ppt<br>Tempature: ${fish.temp}°C</aside>
`
    }
    htmlString += `</ul>`

    return htmlString
}