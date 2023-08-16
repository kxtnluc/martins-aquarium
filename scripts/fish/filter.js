import { getFish } from "../database"

const fishes = getFish();

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (const fish of fishes) {
        if(fish.length % 3 === 0){
            console.log(fish.length + "is a remainder of 3")
        }
    }

    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    return soldiers
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    return regularFish
}