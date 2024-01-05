import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { Marker } from 'react-native-maps'
import { SelectMarkerContext } from '../../Context/SelectMarkerContext'

export default function Markers({index,place}) {
    const {selectedMarker, setSelectedMarker}=useContext(SelectMarkerContext)
    const [imageSource, setImageSource] = useState(require('./../../../assets/images/charge-marker.png'));
    const [prevSelectedMarker, setPrevSelectedMarker] = useState(null);
  return place&&(
      <Marker
          coordinate={{
              latitude: place.location?.latitude,
              longitude: place.location?.longitude
          }}
          onPress={() =>setSelectedMarker(index)}
      >
          <Image source={imageSource}
              style={{ width: 30, height: 35 }}

          />
      </Marker>
  )
}

const styles = StyleSheet.create({})