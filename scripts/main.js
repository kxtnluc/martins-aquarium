import { getFish } from './database.js'
import { FishList } from './fish/toPrint.js'
import { TipList } from './tips/tipPrint.js'
import { locationList } from './locations/locationPrint.js'


const alltips = TipList()
const allFish = getFish()
const allLocations = locationList()


/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
    const parentHTMLElement = document.querySelector("#fishSelector")


    parentHTMLElement.innerHTML = FishList()

    const parentTipHTMLElement = document.querySelector(".tipMarker")


    parentTipHTMLElement.innerHTML = TipList()

    const parentLocationHTMLElement =  document.querySelector(".locationSelector")

    parentLocationHTMLElement.innerHTML = locationList()