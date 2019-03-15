//when called, fetches data for the genre passed to it by the function call.
const ticketmasterCall = (genre) => {
    return fetch(
            `https://app.ticketmaster.com/discovery/v2/events.json?apikey=iGNHGX3JLkYElcOGNL7J2qMZl02a5nBU&city=Nashville&size=4&countryCode=US&classificationName=${genre}`
        )
        .then(concerts => concerts.json())
};

//Calls for fetch from tickemaster API, passing genre to narrow list. Console logs results.
const ticketmasterPost = (genre) => {
    ticketmasterCall(genre).then(parsedConcerts => {
        console.log(parsedConcerts);
                //if the below returns undefined, need alert to appear on page to tell user they must input a proper value.
        console.log(parsedConcerts._embedded);
        //Return array of events, following the data structure in the API, each item nested in the data that prceeds it in the data path.
        const concertInfosArray = parsedConcerts._embedded.events;
        const concertResults = [];
        //Array of concerts.
        //For each concert, get variable with concert name and venue name sourced from the API database.
        concertInfosArray.forEach(concert => {
            console.log(concert);
            const concertName = concert.name;
            console.log(concertName);
            const venueName = concert._embedded.venues[0].name;
            console.log(venueName);
            console.log(`${concertName} at ${venueName}`)
            const HTMLitem = textToHTML(concertName, venueName);
            console.log(HTMLitem)
            // concertResults.push(HTMLitem);
        });
        //postResultstoDom(concertResults);
    });
}