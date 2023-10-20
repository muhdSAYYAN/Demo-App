import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './Home'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import About from './About'
import Emi from './Emi'
import Worldcup from './components/Worldcup'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const App = () => {

  const Tab = createBottomTabNavigator();
  return (
    
<NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen
         name="Home"
          component={Home}
          options={{
        
            tabBarIcon:({focused}) =>{
              return(
                <Image source={require('./Assets/home.png')}
                style={{tintColor:focused ? 'blue': "gray", width:20,height:20}}
                />
              )
            }
          }} />
        <Tab.Screen name='About' component={About}
        options={{
          tabBarIcon:({focused}) =>{
            return(
              <Image source={require('./Assets/information.png')}
              style={{tintColor:focused ? 'blue' : 'gray' ,width:25,height:25}}/>
            )
          }
        }}
        />
        <Tab.Screen name='Players' component={Emi}
        options={{
          tabBarIcon:({focused})=>{
            return(
              <Image source={require('./Assets/player.png')}
              style={{tintColor:focused ? 'blue' : 'gray' ,width:30,height:30}}/>
            )
          }
        }}/>
        <Tab.Screen name='Trophys' component={Worldcup}
        options={{
          tabBarIcon:({focused})=>{
            return(
              <Image source={require('./Assets/trophy.png')}
              style={{tintColor:focused ? 'blue' : 'gray' ,width:25,height:25}}/>
            )
          }
        }}/>
      </Tab.Navigator>

      </NavigationContainer>
  
  )
}

export default App

const styles = StyleSheet.create({})