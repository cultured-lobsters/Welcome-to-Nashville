//Building htmlto push all input into the DOM when user select the section
const domBuilder = {
    appendInputfield() {
        let displayContainer = document.querySelector("#display-container")
        displayContainer.innerHTML =
            `<h1> Welcome to Nashville</h1>
    <h2>Select input of you like</h2>
    
    <section id="park_search>
    <select id="park-search>
    <option value="basketball_fields">Basketball Field</option>
    <option value="basketball_fields">Basketball Field</option>
    <option value="basketball_fields">Basketball Field</option>
    <option value="basketball_fields">Basketball Field</option>
    <option value="basketball_fields">Basketball Field</option>
    </select>
    <button type="button" id="parks-search-button">Submit</button>
    </section>
    
    <section id="concerts_search>
    <input type="text" name="concerts" id="concerts_search" value="concerts">
    <button type="button" id="concerts-search-button">Submit</button>
    </section>

    <section id="restaurants_search>
    <input type="text" name="restaurants" id="restaurants_search" value="restaurants">
    <button type="button" id="restaurants_search-button">Submit</button>
    </section>

    <section id="meetup_search>
    <input type="text" name="meetup" id="meetup_search" value="meetup">
    <button type="button" id="meetup_search-button">Submit</button>
    </section>
    `
    }

}