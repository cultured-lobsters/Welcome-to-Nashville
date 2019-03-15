const eventSearch = (term) => {
    console.log(term);
    //pass input to API lookup
    ticketmasterPost(term);
    //pass returned values to dom manager for posting
}


concertsButton.addEventListener("click", () => {
    eventSearch(concertsInputField.value)
})
restaurantButton.addEventListener("click", () => {
    eventSearch(concertsInputField.value)
})
meetupsButton.addEventListener("click", () => {
    eventSearch(meetupsInputField.value)
})
parksButton.addEventListener("click", () => {
    eventSearch(parksInputField.value)
})