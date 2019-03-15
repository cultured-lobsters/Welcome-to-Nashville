console.log("api working")
const data = {
    getAllParks(value) {
        return fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?$$app_token=BOLRXRG2F3Uzu1AubQZBgO5iT&${value}=Yes`)
            .then(response => response.json())
            .then(response => {
                let parkArray =[]
                console.log(response)
                response.forEach(allparks => {
                    let parkName = allparks.park_name;
                    let parkAddress = allparks.mapped_location_address;
                    console.log(parkName + " " +parkAddress)
                })
            })
    }
}