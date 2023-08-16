/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        {
            name: "Bart",
            species: "Goldfish",
            food: "insects",
            length: 15,
            salinity: 10,
            temp: 25,
            location: "Tennessee River"
        },
        {
            name: "Gary",
            species: "Clownfish",
            food: "Zooplankton",
            length: 10,
            salinity: 34,
            temp: 24,
            location: "Indian Ocean"
        },
        {
            name: "Sharpy",
            species: "Swordfish",
            food: "Mackerel",
            length: 303,
            salinity: 33,
            temp: 18,
            location: "Mediterranean"
        },
        {
            name: "Bob",
            species: "Hammerhead",
            food: "Stingray",
            length: 457,
            salinity: 20,
            temp: 15,
            location: "Pacific Ocean"
        },
        {
            name: "Paul",
            species: "Blue Whale",
            food: "Pasta",
            length: 2000,
            salinity: 20,
            temp: 15,
            location: "Atlantic Ocean"
        }
    ],
    tipList: [
        {
            id: 1,
            tip: "unga bunga iuodfhiudshfihsdhfioushdiuofhiuhsiufhiou",
        },
        {
            id: 2,
            tip: "ooga booga asdasd asasd asdasd asd asfd fghrqaf",
        },
        {
            id: 3,
            tip: "monkey time ajkfhkjadshfjksdhfkjsdhkjfhdskjfhsdkjfkjsdf",
        },
        {
            id: 4,
            tip: "you always want to clean the tanks daily!",
        }

    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

export const getTips = () => {
    return database.tipList.map(tipList => ({...tipList}))
}