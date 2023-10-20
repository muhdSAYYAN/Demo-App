import { View, Text, Image,ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const About = () => {
  return (
    <SafeAreaView>
    <View>
      <Text style={{fontSize:24,color:"blue",paddingLeft:148}}>Messi </Text>
    </View>
    <ScrollView>
    <Image style={{height:250}} source={{uri:"https://www.hindustantimes.com/ht-img/img/2023/09/05/1600x900/Fbl-FILES-FBL-MLS-MIAMI-MESSI-0_1689470425064_1693915794401.jpg"}}/>
    <Text style={{fontSize:24,margin:8,height:600}}>Messi started playing football as a boy and in 1995 joined the youth team of Newell’s Old Boys (a Rosario-based top-division football club). Messi’s phenomenal skills garnered the attention of prestigious clubs on both sides of the Atlantic. At age 13 Messi and his family relocated to Barcelona, and he began playing for FC Barcelona’s under-14 team. He scored 21 goals in 14 games for the junior team, and he quickly graduated through the higher-level teams until at age 16 he was given his informal debut with FC Barcelona in a friendly match.</Text>
    </ScrollView>
    </SafeAreaView>
  )
}

export default About

