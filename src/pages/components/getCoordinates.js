const getCoordinates = async function(address){
    const API_KEY = "AIzaSyD3qKQ9-ESiF-OgKs9vOZBaasd_gf4Yeqo"
    const API_URL = "https://maps.googleapis.com/maps/api/geocode/json"
    const response = await fetch(API_URL + new URLSearchParams({
        address: address,
        key: API_KEY
    }))

}