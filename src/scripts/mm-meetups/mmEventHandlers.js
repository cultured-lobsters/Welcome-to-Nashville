// const meetupInfo = () => {
//     const searchInput = document.querySelector("#meetupSearchInput")
//     let searchedEvents = eventbriteCall("meetup")
//     console.log(searchedEvents)
// }

// meetupInfo()

// let meetupNameAndAddress = () => {
// }

// searchButton.addEventListener("click");

// const searchMeetups = () {

// }
let displayResults = document.querySelector("#displayInfo")
// let displayResults = document.querySelector("#displayInfo")
const meetupInfo = (name) => {
    let createMeetup = document.createElement("p")
    createMeetup.textContent = name

displayResults.appendChild(createMeetup)

}

const parksInfo = (park) => {
    let createPark = document.createElement("p")
    createPark.textContent = 

displayResults.appendChild(createPark)
}