const getAllPark = (value) => {
    fetch(`https://data.nashville.gov/resource/xbru-cfzi.json$$app_token=BOLRXRG2F3Uzu1AubQZBgO5iT&${value}=yes`)
    .then(response => response())
    parkArray.forEach(parsedResponse => {
        parsedResponse.parkName = park_name
        parsedResponse.parkAddress = mapped_location_address
        .then(response => response(value))
    })
}