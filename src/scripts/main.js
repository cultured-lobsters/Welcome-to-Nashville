const concertButton = document.getElementById("concert-button");
const restaurantButton = document.getElementById("restaurant-button");
const meetupButton = document.getElementById("meetups-button");
const parkButton = document.getElementById("park-button");
const parkSearch = document.getElementById("park");
const restaurantSearch = document.getElementById("restaurant");
const concertSearch = document.getElementById("concert");
const meetupsSearch = document.getElementById("meetups");

console.log(parkButton);

const eventSearch = (term) => {
    console.log(term);
//pass input to API lookup
ticketmasterLog(term);
//pass returned values to dom manager for posting
}

concertButton.addEventListener("click", () => {
    eventSearch(concertSearch.value)
})
restaurantButton.addEventListener("click", () => {
    eventSearch(restaurantSearch.value)
})
meetupButton.addEventListener("click", () => {
    eventSearch(meetupsSearch.value)
})
parkButton.addEventListener("click", () => {
    eventSearch(parkSearch.value)
})