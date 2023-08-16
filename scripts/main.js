import { getFish } from './database.js'
import { FishList } from './fish/toPrint.js'
import { TipList } from './tips/tipPrint.js'


const alltips = TipList()
const allFish = getFish()


/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
    const parentHTMLElement = document.querySelector("#fishSelector")


    parentHTMLElement.innerHTML = FishList()

    const parentHTMLElement2 = document.querySelector(".tipMarker")


    parentHTMLElement2.innerHTML = TipList()