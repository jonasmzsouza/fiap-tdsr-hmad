import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const AppStack = createNativeStackNavigator()

import Login from './src/components/screens/Login'
import Home from './src/components/screens/Home'
import CadastroLivros from './src/components/screens/CadastroLivros'

const App = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen
          component={ Login }
          name='login'
          option={{
            title : 'login'
          }}/>

        <AppStack.Screen
          component={ Home }
          name='home' />

        <AppStack.Screen
          component={ CadastroLivros }
          name='cadastroLivros' />
      </AppStack.Navigator>
    </NavigationContainer>
  )
}

export default App