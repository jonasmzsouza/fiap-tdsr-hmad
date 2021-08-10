import React from 'react'
import {
  Button,
  Text,
  View
} from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
//import { createNativeStackNavigator } from '@react-navigation/native-stack'

//const Stack = createNativeStackNavigator()

//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//const Tab = createBottomTabNavigator()

import { createDrawerNavigator } from '@react-navigation/drawer'

const Drawer = createDrawerNavigator()

const Home = (props) => {
  return (
    <View>
      <Text>Exemplo de Navegação</Text>
      <Button 
        onPress={() => {
          props.navigation.navigate('outraTela', {
            nome : 'Jonas Souza'
          })
        }}
        title="Abrir outra tela" />
    </View>
  )
}

const OutraTela = (props) => {
  const {nome} = props.route.params || ''

  return (
    <View>
      <Text>Outra tela</Text>
      <Text>Olá, {nome}!</Text>
      <Button 
        onPress={() => {
          props.navigation.goBack()
        }}
        title="Fechar" />
    </View>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>

        <Drawer.Screen
          name="home"
          component={ Home } />

        <Drawer.Screen
          name="outraTela"
          component={ OutraTela } />
      </Drawer.Navigator>

      {/*}
      <Tab.Navigator
        screenOptions={{
          headerStyle : {
            backgroundColor : '#00F'
          },
          headerTintColor : '#FFF'
        }}>

        <Tab.Screen 
          name='home'
          component={ Home }
          options={{
            tabBarBadge : 10,
            title : 'Tela inicial'
          }} />
        
        <Tab.Screen
          name='outraTela'
          component={ OutraTela }
          options={{
            title : 'Outra tela'
          }} />
      </Tab.Navigator>
      */}


      {/*
      <Stack.Navigator
        screenOptions={{
          headerStyle : {
            backgroundColor : '#00F'
          },
          headerTintColor : '#FFF'
        }}>
        <Stack.Screen 
          name="home" 
          component= { Home}
          options={{
            headerStyle : {
              backgroundColor : '#0F0'
            },
            headerTintColor : '#FFF',
            title : 'Tela inicial'
        }} />
        <Stack.Screen 
          name="outraTela" 
          component= { OutraTela }
          options={{
            title : 'Outra tela'
          }} />
        </Stack.Navigator> 
      */}
    </NavigationContainer>
  )
}

export default App