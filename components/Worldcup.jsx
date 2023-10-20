import { View, Text,Image,ScrollView } from 'react-native'
import React from 'react'

const Worldcup = () => {
  return (
    <ScrollView  style={{gap:8}}>
        <Image style={{width:390,height:250,marginBottom:6}} source={{uri:'https://media.gettyimages.com/id/1457417757/photo/lionel-messi-of-argentina-lifts-the-fifa-world-cup-qatar-2022-winners-trophy-following-the.jpg?s=612x612&w=0&k=20&c=gHX4rna4-4PcACFpX3S4Lxh7v11Rgb-U0qWCexxAfEw='}}/>
        <Image style={{width:390,height:250,marginBottom:6}} source={{uri:'https://staticg.sportskeeda.com/editor/2021/10/6c60c-16354098899913-1920.jpg'}}/>
        <Image style={{width:390,height:250,marginBottom:6}} source={{uri:'https://images.hindustantimes.com/img/2022/06/02/1600x900/SOCCER-FINALISSIMA-ITA-ARG-REPORT-254_1654136592011_1654136604761.JPG'}}/>
       
    </ScrollView>
  )
}

export default Worldcup