const zomatoCall = (searchString) => {
     return fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&q=${searchString}`,{
                headers: {
                    Accept: "application/json",
                    "user-key": "fc39be8a8b64fd8520e5e401b0981f2d"
                }
            })
        .then(r => r.json())
        .then(results => {
            const restaurantArray = results.restaurants
          
            restaurantArray.forEach(restaurant => {
                let currentR = restaurant.restaurant;
             displayRestaurants(currentR.name, currentR.location.address)
               
            });
           
        }
        );
};

zomatoCall("Mexican");

