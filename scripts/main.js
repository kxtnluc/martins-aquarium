import { getFish } from './database.js'
import { FishList } from './fish/toPrint.js'



const allFish = getFish()


/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
    const parentHTMLElement = document.querySelector("#fishSelector")


    parentHTMLElement.innerHTML = FishList()