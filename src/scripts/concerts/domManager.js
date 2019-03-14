//containers for input/button pairs.
const restaurantSearch = document.createElement("div")
restaurantSearch.id = "restaurantBox"
const parksSearch = document.createElement("div")
parksSearch.id = "parksBox"
const meetupsSearch = document.createElement("div")
meetupsSearch.id = "meetupsBox"
const concertsSearch = document.createElement("div")
concertsSearch.id = "concertsBox"

// user input fields 
const restuarantInputField = document.createElement("Input");
restuarantInputField.id = "restuarantInput"
const parksInputField = document.createElement("Select");
parksInputField.id = "parksInput"
parksInputField.name = "parksInput"
const meetupsInputField = document.createElement("Input");
meetupsInputField.id = "meetupsInput"
const concertsInputField = document.createElement("Input");
concertsInputField.id = "concertsInput"

//search buttons
const restaurantButton = document.createElement("button");
const parksButton = document.createElement("button");
const meetupsButton = document.createElement("button");
const concertsButton = document.createElement("button");
concertsButton.innerHTML = "Search"
restaurantButton.innerHTML = "Search"
meetupsButton.innerHTML = "Search"
parksButton.innerHTML = "Search"

//append search inputs and buttons to appropriate boxes.
restaurantSearch.appendChild(restuarantInputField);
restaurantSearch.appendChild(restaurantButton);
parksSearch.appendChild(parksInputField);
parksSearch.appendChild(parksButton);
concertsSearch.appendChild(concertsInputField);
concertsSearch.appendChild(concertsButton);
meetupsSearch.appendChild(meetupsInputField);
meetupsSearch.appendChild(meetupsButton);

//reference to container section
const section = document.querySelector("#container");
console.log(section);

//document fragment
const fragment = document.createDocumentFragment();

//append container boxes to DOM fragment.
fragment.appendChild(restaurantSearch);
fragment.appendChild(concertsSearch);
fragment.appendChild(meetupsSearch);
fragment.appendChild(parksSearch);

//append fragment to the container section container.
section.appendChild(fragment);

////////////


const textToHTML = (event, place) => {
    return `
    ${event} at ${place}.
    `
}

const resultsBox = () => {}

//passes list element to append save button to.
const saveButton = (elment) => {
    //create button element
    //append to saved dom element
}