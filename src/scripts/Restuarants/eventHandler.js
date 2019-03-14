const searchRestuarants = () => {

}
let displayResults = document.querySelector("#displayInfo")
const displayRestaurants = (name, address) => {
    let createRestaurants = document.createElement("p")
   createRestaurants.textContent = name + " " + address
   
   
   
    displayResults.appendChild(createRestaurants)


}