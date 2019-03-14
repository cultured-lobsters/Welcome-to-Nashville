// const getMeetups = () => {
//     return fetch("https://www.eventbrite.com/oauth/token")
//     .then(response => response.json())
// }

const eventbriteCall = (search_string) => {
    fetch(
      `https://www.eventbriteapi.com/v3/events/search/?q=${search_string}&location.address=nashville&token=NLZD444RDNQQUGU7RO7R`,
      {
        headers: {
          Accept: "application/json"
        }
      }
    )
      .then(response => response.json())
      .then(results => {
          console.log(results.events)
          results.events.forEach(event => {
              meetupInfo(event.name.text)
          })
        })
  };

eventbriteCall("meetups")

