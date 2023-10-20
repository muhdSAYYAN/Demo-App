import { View, Text ,ScrollView ,Image } from 'react-native'
import React from 'react'

const Emi = () => {
 
  const players = [
  {
    id:1,
    imag:"https://ss-i.thgim.com/public/incoming/jcrkg9/article66127434.ece/alternates/FREE_1200/32MN2XB-preview.jpg"
  },
  {
    id:2,
    imag:"https://mundoalbiceleste.com/wp-content/uploads/2019/05/morocco-argentina-live-stream-watch.jpg"
  },
  {
    id:3,
    imag:"https://www.usanetwork.com/sites/usablog/files/2023/01/enzo-fernandez-chelsea.jpg"
  },
  {
    id:4,
    imag:"https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt1457d546a4d5952f/639f615dddd807798bb8d7ad/Enzo_Fernandez(1).jpg?auto=webp&format=pjpg&width=3840&quality=60"
  },
  {
    id:5,
    imag:"https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blte2b934be0c4ef3c7/62c6775742e65949d2285152/Angel_Di_Maria_Argentina_2022.jpg"
  },
  {
    id:6,
    imag:"https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1670643344.webp"
  },
  {
    id:7,
    imag:"https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2Fd5f820a0-7bba-11ed-8486-22782b7fe87b.jpg?crop=3811%2C2144%2C11%2C179"
  },
]

  return (
    <View>
      <Text style={{textAlign:"center",fontSize:24, color:"blue"}}>Amigos</Text>
      <ScrollView>
      {players.map((person) =>{
        return(
          

    <Image key={person.id}
          style={{ height: 250 ,marginBottom:8}}
          source={{ uri: person.imag || 'default-image-url-here' }}/>
   
        )
      })}
       </ScrollView>
    </View>
  )
}

export default Emi