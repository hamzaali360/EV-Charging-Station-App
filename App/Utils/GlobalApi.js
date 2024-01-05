import axios from 'axios';

const BASE_URL = "https://places.googleapis.com/v1/places:searchNearby"
const API_KEY = "AIzaSyAwndU6puOYEwQvfdQ5F6_RFIg8jS86qQY"

const config={
    headers:{
        'Content-Type': 'application/json',
        'X-Goog-API-Key': API_KEY,
        'X-Goog-FieldMask': [
            'places.displayName', 
            'places.formattedAddress',
            'places.location',
            'places.evChargeOptions',
            'places.photos',
            'places.shortFormattedAddress',
            'places.id']
    }
}

const NewNearByPlace=(data)=>axios.post(BASE_URL, data, config);
export default{
    NewNearByPlace,
    API_KEY
}