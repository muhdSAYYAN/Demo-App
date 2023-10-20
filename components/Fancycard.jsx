import { View, Text, Image, StyleSheet,ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const Fancycard = () => {
 
  const navigate = useNavigation()

  return (
    <View>
      <Text style={doo.txt1}>Achievements</Text>
       
       <ScrollView horizontal >
        <TouchableOpacity onPress={()=>navigate.navigate('Trophys')}>
        <Image style={doo.imgMain} source={{uri:'https://media.gettyimages.com/id/1457417757/photo/lionel-messi-of-argentina-lifts-the-fifa-world-cup-qatar-2022-winners-trophy-following-the.jpg?s=612x612&w=0&k=20&c=gHX4rna4-4PcACFpX3S4Lxh7v11Rgb-U0qWCexxAfEw='}}/>
        </TouchableOpacity>
        <Image style={doo.imgMain} source={{uri:'https://staticg.sportskeeda.com/editor/2021/10/6c60c-16354098899913-1920.jpg'}}/>
        <Image style={doo.imgMain} source={{uri:'https://images.hindustantimes.com/img/2022/06/02/1600x900/SOCCER-FINALISSIMA-ITA-ARG-REPORT-254_1654136592011_1654136604761.JPG'}}/>
        </ScrollView>
        
        

        

        {/* <TouchableOpacity
  style={{ borderWidth: 1, backgroundColor: "red", width: 100, height: 40 }}
  onPress={()=> navigate.navigate("About") }
>
  <Text style={{ color: "black" }}>button</Text>
</TouchableOpacity> */}

    </View>
  )
}

export default Fancycard

const doo = StyleSheet.create({
    txt1:{
        paddingHorizontal:10,
        fontSize:24,
        fontWeight:'bold',
        color:"red"
    },
    imgMain:{
      width:330,
        height:200,
        margin:8
    }
    
})