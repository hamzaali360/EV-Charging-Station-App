import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Colors from '../../Utils/Colors';
import { Ionicons } from '@expo/vector-icons'; 

export default function SearchBar({searchedLocation}) {
    
  return (
    <View style={{
        display:'flex',
        flexDirection:'row',
        marginTop:15,
        paddingHorizontal:5,
        backgroundColor:Colors.WHITE,
        borderRadius:6
    }}>
          <Ionicons name="location-sharp" size={24} color={Colors.GRAY} style={{paddingTop:10}} />
          <GooglePlacesAutocomplete
              placeholder='Search EV Charging Station'
              minLength={2} // minimum length of text to search
              autoFocus={false}
              returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
              listViewDisplayed='auto'    // true/false/undefined
              fetchDetails={true}
              enablePoweredByContainer={false}
              renderDescription={row => row.description} // custom description render
              onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                  searchedLocation(details?.geometry?.location)
              }}

              getDefaultValue={() => ''}

              query={{
                  // available options: https://developers.google.com/places/web-service/autocomplete
                  key: 'AIzaSyAwndU6puOYEwQvfdQ5F6_RFIg8jS86qQY',
                  language: 'en', // language of the results
                  types: '(cities)' // default: 'geocode'
              }}
              />
    </View>
  )
}

const styles = StyleSheet.create({})