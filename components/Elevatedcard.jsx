import { View, Text, StyleSheet, ScrollView ,Image ,TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Elevatedcard = () => {
 
  const go = useNavigation();
  

  return (
    <View>
      <Text style={doo.txt1}>Amigos</Text>
      <ScrollView horizontal style={doo.container}>
       
       <TouchableOpacity onPress={()=>go.navigate('About')}>
      <View style={[doo.card , doo.cardelevated]}> 
      <View style={[doo.card , doo.cardelevated]}> 
        <Image  style={{height:150,width:150,borderRadius:5}} source={{uri:"https://www.hindustantimes.com/ht-img/img/2023/09/05/1600x900/Fbl-FILES-FBL-MLS-MIAMI-MESSI-0_1689470425064_1693915794401.jpg"}}/>
        </View>
        </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={()=>go.navigate('Players')}> 
        <View style={[doo.card , doo.cardelevated]}> 
        <View style={[doo.card , doo.cardelevated]}> 
        <Image  style={{height:150,width:150,borderRadius:5}} source={{uri:"https://img.allfootballapp.com/www/M00/35/69/CgAGVmMsXcSAX69-AALGyFUKz0M683.jpg"}}/>
        </View>
        </View>
        </TouchableOpacity>

        <View style={[doo.card , doo.cardelevated]}> 
        <View style={[doo.card , doo.cardelevated]}> 
        <Image  style={{height:150,width:150,borderRadius:5}} source={{uri:"https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blte2b934be0c4ef3c7/62c6775742e65949d2285152/Angel_Di_Maria_Argentina_2022.jpg"}}/>
        </View>
        </View>

        <View style={[doo.card , doo.cardelevated]}> 
        <View style={[doo.card , doo.cardelevated]}> 
        <Image  style={{height:150,width:150,borderRadius:5}} source={{uri:"https://mundoalbiceleste.com/wp-content/uploads/2019/05/morocco-argentina-live-stream-watch.jpg"}}/>
        </View>
        </View>

        <View style={[doo.card , doo.cardelevated]}> 
        <View style={[doo.card , doo.cardelevated]}> 
        <Image  style={{height:150,width:150,borderRadius:5}} source={{uri:"https://mundoalbiceleste.com/wp-content/uploads/2021/05/julianalvarez.jpg"}}/>
        </View>
        </View>

        <View style={[doo.card , doo.cardelevated]}> 
        <View style={[doo.card , doo.cardelevated]}> 
        <Image  style={{height:150,width:150,borderRadius:5}} source={{uri:"https://mundoalbiceleste.com/wp-content/uploads/2019/05/20190529_104441.jpg"}}/>
        </View>
        </View>

      </ScrollView>
    </View>
  )
}

export default Elevatedcard

const doo = StyleSheet.create ({

    txt1:{
        paddingHorizontal:10,
        fontSize:24,
        fontWeight:'bold',
        color:"red"
    },
    container:{
        padding:8,
    },
    card:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        width:150,
        height:150,
        margin:8,
        borderRadius:5

    },
    cardelevated:{
     
     elevation:4,
     shadowOffset:{
        width:1,
     height:1
     },
     shadowColor:"white",
     shadowOpacity:"0.6"
     
    },
    arga:{
      
    }
});