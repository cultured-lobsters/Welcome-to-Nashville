const searchRestuarants = () => {

}
let displayResults = document.querySelector("#displayInfo")
const displayRestaurants = (name, address) => {
    let createRestaurants = document.createElement("p")
   createRestaurants.textContent = name + " " + address
   
   //removing existing children from dispayInfo
   
     //displayResults.removeChild(displayResults.firstChild)
     //add new child to displayInfo
     displayResults.appendChild(createRestaurants)
     while(displayInfo.firstChild){
        displayInfo.removeChild(displayInfo.firstChild)
    }
      

}

const searchConcerts = () => {
}
   
 displayResults = document.querySelector("#displayInfo")  
const displayConcerts = (eventName, venueName) => {
    let createConcerts = document.createElement("p")
   createConcerts.textContent = eventName + " " + venueName


   displayResults.appendChild(createConcerts)
}
