//  const displayContainer = document.querySelector("#display-container");
// const searchContainer = document.createElement("search-container");
// searchContainer.id = "#searchContainer";
// displayContainer.appendChild(searchContainer)
//dom builder that hold when the HTML element when the function called
const domBuilder = {
    //when the page lood , t the funtion is calling in. then the this function would check
    //the user input to called
    userIputField() {

        let userSearchTheField =
            `<h1>Welcome to Nashville</h1>
            <h2>Search Nashville</h2>
        <form>
        <select name=“parkSearch” id=“parkSearch”>
            <option value=“” selected disabled hidden>Parks by List</option>
            <option value=“basketball_courts”>Basketball Courts</option>
            <option value=“community_center”>Community Center</option>
            <option value=“dog_park”>Dog Park</option>
            <option value=“lake”>Lake</option>
            <option value=“playground”>Playground</option>
        </select>
        <br>
        <button type=“button” id=“parksButton”>Submit</button>
        </form>
        `
        return userSearchTheField;
    },
    // this click inside of each method
    //then create HTML element with terget name  address and resualt type
    outputBuilder(partName, PartDesc, outputType) {
        let outputResult = 
        `
    <div>
    <div>
        <p>${partName}</p>
        <p>${PartDesc}</p>
    </div>
    <button type="button" id="saveButton" ${outputType}"> Save</button>
    </div>
    `
    return outputResult;
    },
    itinararyPanel(savedData, buttonClass) {
        let itinaryField =
        `
        <p class="itinary">
        ${savedData}
        </p>
        `
        let itinararyPanel = document.getElementById(buttonClass)
        itinararyPanel.innerHTML = itinaryField;
    }
}