import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Flatcard = () => {
    

    const navigate = useNavigation()
    const handleClick = () =>{
         navigate.navigate('About');
    }
    
  return (
    <View>
      <Text style={doo.txt1}>Vamos</Text>
      <View style={doo.container}>
        <TouchableOpacity onPress={handleClick}>
        <Image
        style={{width:90 , height:120 }}
         source={{uri:"https://w7.pngwing.com/pngs/613/8/png-transparent-argentina-national-football-team-logo-argentine-football-association-2018-fifa-world-cup-others-miscellaneous-sport-football-team-thumbnail.png"}}
        />
        </TouchableOpacity>
         
        
      </View>
    
    </View>
  )
}

export default Flatcard

const doo = StyleSheet.create ({

    txt1:{
        paddingHorizontal:10,
        fontSize:24,
        fontWeight:'bold',
        color:"red"
    },
    container:{
        flex:1,
        flexDirection:"row",
        padding:8
    },
    card:{
        width:50,
        height:100,
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:5,
        margin:8
    },
    card1:{
        backgroundColor:"red"
    }
    ,
    card2:{
        backgroundColor:"green"
    },
    card3:{
        backgroundColor:"blue"
    },
    card4:{
        backgroundColor:"pink"
    },



})