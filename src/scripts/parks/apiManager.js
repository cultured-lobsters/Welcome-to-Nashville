//console.log("api working")
 const getAllParks = () => {
     return fetch("https://data.nashville.gov/resource/xbru-cfzi.json?")
        .then(response => response.json())
        .then(parks => console.log(parks))
}