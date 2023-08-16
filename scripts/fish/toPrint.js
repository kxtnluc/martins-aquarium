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

const fishes = getFish();

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (const fish of fishes) {
        if(fish.length % 3 === 0){
            holyFish.push(fish)
            console.log(fish.length + "is a remainder of 3")
        }
    }

    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldiers = []

    for (const fish of fishes) {
        if(fish.length % 5 === 0){
            soldiers.push(fish)
            console.log(fish.length + "is a remainder of 5")
        }
    }
    
    return soldiers
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const regularFish = []

    for (const fish of fishes) {
        if(fish.length % 5 !== 0 && fish.length % 3 !== 0){
            regularFish.push(fish)
            console.log(fish.length + "is a regular fish")
        }
    }

    return regularFish
}

mostHolyFish();
soldierFish();
nonHolyFish();