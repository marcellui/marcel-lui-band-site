import {BandSiteAPI} from "./band-site-api.js"

const apiKey = "fb090a24-a346-489b-806e-999ee80c8a37"

const myBandSiteAPI =  new BandSiteAPI(apiKey);

// console.log(myBandSiteAPI.getComments())
// console.log(myBandSiteAPI.getShows())

async function fetchShows(){
     const result = await myBandSiteAPI.getShows();
     const sortedArray = result.sort((a,b) => b.timestamp-a.timestamp);
     console.log(result);
     console.log(sortedArray)
     for (let i = 0; i<sortedArray.length; i++){
        displayShows(sortedArray[i])
     }
}

fetchShows();

const titleArray = [
    "Date: ","Venue: ", "Location: "
]
    
const shows = document.createElement("div");
shows.innerText = "";

const showCardTitle = document.createElement("h2")
showCardTitle.innerText = "Shows";

shows.appendChild(showCardTitle)


function displayShows(showObj){
   
        const showCard = document.createElement("article");
        const showHeader = document.createElement("div");
        const showDate = document.createElement("p");
        const dateTitle = document.createElement("h4");
        dateTitle.innerText = titleArray[0];
        const showVenue = document.createElement("p");
        const showLocation = document.createElement("p");
        const showButton = document.createElement("button")

        showDate.innerText +=  new Date(showObj.date).toLocaleDateString();
        showVenue.innerText += "Venue: "  + showObj.place;
        showLocation.innerText += "Location: " + showObj.location;
        showButton.innerText = "BUY TICKETS";

        showHeader.appendChild(dateTitle);
        showHeader.appendChild(showDate);
        showHeader.appendChild(showVenue);
        showHeader.appendChild(showLocation);
        showCard.appendChild(showHeader);
        showCard.appendChild(showButton);

       
        showCard.classList.add("show-container");
        dateTitle.classList.add("show-container__title");
        dateTitle.classList.add("show-container__title--hide");
        shows.appendChild(showCard);
        document.querySelector("main").appendChild(shows)
    }

// for (let i =0; i<showsArray.length; i++){
//         displayShows(showsArray[i]);
// }