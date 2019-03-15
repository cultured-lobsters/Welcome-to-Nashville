//console.log("dom manager is working")
//Building htmlto push all input into the DOM when user select the section
const restaurant = document.createElement("div")
const parks = document.createElement("div")
const meetups = document.createElement("div")
const concerts = document.createElement("div")
const searchboxes = []
searchboxes.push(parks, restaurant, meetups, concerts);
console.log(searchboxes);

// user input fields
const restuarantInputField = document.createElement("Input");
restuarantInputField.id = "restuarantInput"
restuarantInputField.placeholder = "Restaurant"
const parksInputField = document.createElement("Select");
parksInputField.id = "parksInput"
parksInputField.name = "parksInput"
const meetupsInputField = document.createElement("Input");
meetupsInputField.id = "meetupsInput"
meetupsInputField.placeholder = "Meetups"
const concertsInputField = document.createElement("Input");
concertsInputField.id = "concertsInput"
concertsInputField.placeholder = "Concerts"
const InputFields = [];
InputFields.push(parksInputField, restuarantInputField, meetupsInputField, concertsInputField);

//options for parksInput
const option1 = document.createElement("option")
const option2 = document.createElement("option")
const option3 = document.createElement("option")
const option4 = document.createElement("option")
option1.value = "park_name"
option1.innerHTML = ""
option2.value = "dog_park"
option2.innerHTML = ""
option3.value = "basketball_field"
option3.innerHTML = ""
option4.value = "dog"
option4.innerHTML = "dog"
parksInputField.appendChild(option1);
parksInputField.appendChild(option2);
parksInputField.appendChild(option3);
parksInputField.appendChild(option4);

//search buttons
const restaurantButton = document.createElement("button");
const parksButton = document.createElement("button");
const meetupsButton = document.createElement("button");
const concertsButton = document.createElement("button");
const searchButtons = [];
searchButtons.push(parksButton, restaurantButton, meetupsButton, concertsButton);

//append search inputs and buttons to appropriate boxes.
const appendInputsAndButtons = (searchArray, InputArray, ButtonArray) => {
   for (var i = 0; i < searchArray.length; i += 1 ){
       searchArray[i].appendChild(InputArray[i]);
       searchArray[i].appendChild(ButtonArray[i]);
       ButtonArray[i].innerHTML = "Search";
       ButtonArray[i].id = "searchButton";
   };
}

appendInputsAndButtons(searchboxes, InputFields, searchButtons);

//reference to container section
const section = document.querySelector("#display-container");
console.log(section);

//document fragment
const fragment = document.createDocumentFragment();

//append container boxes to DOM fragment.
const appendFragment = (searchArray) => {
   searchArray.forEach(searchbox => {
       searchbox.id = "searchBox"
       fragment.appendChild(searchbox)
   })
}

appendFragment(searchboxes);

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