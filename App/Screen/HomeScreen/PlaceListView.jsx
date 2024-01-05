import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useRef, useState } from 'react'
import PlaceItem from './PlaceItem';
import { SelectMarkerContext } from '../../Context/SelectMarkerContext';
import { app } from '../../Utils/FirebaseConfig';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { useUser } from '@clerk/clerk-expo';

export default function PlaceListView({placeList}) {
    // console.log("***",placeList);
    const flatListRef = useRef(null);
    const {selectedMarker, setSelectedMarker}=useContext(SelectMarkerContext);
    const {user}=useUser();
    const [favList, setFavList]=useState([]);
    useEffect(()=>{
      selectedMarker&&scrollToIndex(selectedMarker)
    }, [selectedMarker])

    const scrollToIndex=(index)=>{
      // console.log("Scrolling to index:", index);
      if (placeList.length > 0){
        // console.log("hello index:", index);
         flatListRef.current?.scrollToIndex({animated:true,index})
      }
     
    }
    const getItemLayout=(_,index)=>({
      length:Dimensions.get('window').width,
      offset:Dimensions.get('window').width*index,
      index
    });

    const db = getFirestore(app);
    useEffect(()=> {
      user&&getFav();
    }, [user])

    const getFav=async()=>{
      setFavList([])
      const q = query(collection(db, "ev-fav-place"), where("email", "==", user?.primaryEmailAddress?.emailAddress));
      
      const querySnapshot = await getDocs(q);
      // console.log("getFav email:",querySnapshot);
      querySnapshot.forEach((doc)=> {
        // console.log("In the getFav");
        // console.log(doc.id, "=>", doc.data());
        setFavList(favList=>[...favList,doc.data()]);
      })
    }

    const isFav=(place)=>{
      const result=favList.find(item=>item.place.id==place.id);
      // console.log(place);
      return result?true:false;
    }

  return (
    <View>
      <FlatList
        data={placeList}
        horizontal={true}
        showsHorizontalScrollIndicator={false} 
        pagingEnabled
        getItemLayout={getItemLayout}
        ref={flatListRef}
        renderItem={({item,index})=>(
            <View key={index}>
                <PlaceItem place={item}
                  isFav={isFav(item)}
                  markedFav={()=>getFav()}
                />
            </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({})