import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import Flatcard from './components/Flatcard'
import Elevatedcard from './components/Elevatedcard'
import Fancycard from './components/Fancycard'

const Home = () => {
  return (
    <SafeAreaView style={style.main}>
      <View style={{backgroundColor:"lightblue",width:360,height:50,flexDirection:"row",justifyContent:"center",alignItems:"center",borderRadius:10}}>
        <Image style={{width:100,height:40}}  source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMK2DksuUDIXnK-xehCKOqslgoroAt_8po9Q&usqp=CAU"}}/>
      </View>
         <ScrollView >
          <Flatcard/>
          <Elevatedcard/>
          <Fancycard/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const style = StyleSheet.create({
   
  main:{
   backgroundColor:"white"
   
  },
  
     img1:{
        marginTop:50,
        width:360,
        height:300,
        marginRight:20
        
     },
     txt:{
         textAlign:"center",
         fontSize:30,
         color:"orange",
         fontFamily:"italic",
         fontWeight:"bold"

     }
}) 