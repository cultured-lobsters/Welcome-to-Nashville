 console.log("test")

 

 
 const restuarantInputField = document.createElement("Input");
 restuarantInputField.id = "restuarantInput"
 const parksInputField = document.createElement("Input");
 parksInputField.id = "parksInput"

 const meetupsInputField = document.createElement("Input");
 meetupsInputField.id = "meetupsInput"
 const concertsInputField = document.createElement("Input");
 concertsInputField.id = "concertsInput"


 const restaurantButton = document.createElement("button");
 const parksButton = document.createElement("button");
 const meetupsButton = document.createElement("button");
 const searchButton = document.createElement("button");


 let displayContainer = document.querySelector("#display-container")
 const formContainer = () => {
     const mainSection = document.createElement("section")
     const articleSection = document.createElement("article")
     articleSection.id = "displayInfo"
     mainSection.appendChild(articleSection)
     displayContainer.appendChild(mainSection)
     console.log(mainSection)
 }

 formContainer();





