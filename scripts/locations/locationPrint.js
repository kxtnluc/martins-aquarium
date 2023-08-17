import { getLocations } from "../database.js";


export const locationList = () => {
    
    const locations = getLocations();

    let htmlString = `<ul class="locations">`

    for (const location of locations) {
        htmlString += 
        `<li class="location">
            <div class="location_title">
                <h1>${location.country}</h1>
            </div>
            <div class="location_properties">
                ${location.sea}
                <br>
                ${location.water}
            </div>
        </li>`

    }
    htmlString += `</ul>`
    return htmlString;
}