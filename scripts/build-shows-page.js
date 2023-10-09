const showsArray = [
    {
        date: "Mon Sept 06 2021",
        venue: "Ronald Lane",
        location: "San Francisco, CA",
        btn: "Buy Tickets"
    },
    {
        date: "Tue Sept 21 2021",
        venue: "Pier 3 East ",
        location: "San Francisco, CA",
        btn: "Buy Tickets"
    },
    {
        date: "Fri Oct 15 2021",
        venue: "View Lounge",
        location: "San Francisco, CA",
        btn: "Buy Tickets"
    },
    {
        date: "Sat Nov 06 2021",
        venue: "Hyatt Agency",
        location: "San Francisco, CA",
        btn: "Buy Tickets"
    },
    {
        date: "Fri Nov 26 2021",
        venue: "Moscow Center",
        location: "San Francisco, CA",
        btn: "Buy Tickets"
    },
    {
        date: "Wed Dec 15 2021 ",
        venue: "Press Club",
        location: "San Francisco, CA",
        btn: "Buy Tickets"
    }
]

const titleArray = [
    "Date: ","Venue: ", "Location: "
]
    
const shows = document.createElement("div");
shows.innerText = "";

const showCardTitle = document.createElement("h2")
showCardTitle.innerText = "Shows";

shows.appendChild(showCardTitle)

for (let i =0; i<showsArray.length; i++){
    function displayShows(showObj){
   
        const showCard = document.createElement("article");
        const showHeader = document.createElement("div");
        const showDate = document.createElement("p");
        const showVenue = document.createElement("p");
        const showLocation = document.createElement("p");
        const showButton = document.createElement("button")

        showDate.innerText += "Date: " + showObj.date;
        showVenue.innerText += "Venue: "  + showObj.venue;
        showLocation.innerText += "Location:" + showObj.location;
        showButton.innerText = "BUY TICKETS";

        showHeader.appendChild(showDate);
        showHeader.appendChild(showVenue);
        showHeader.appendChild(showLocation);
        showCard.appendChild(showHeader);
        showCard.appendChild(showButton);

        shows.appendChild(showCard);
        document.querySelector("main").appendChild(shows)
    }
    displayShows(showsArray[i]);
}