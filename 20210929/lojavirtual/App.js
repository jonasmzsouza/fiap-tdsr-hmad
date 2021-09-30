import React from 'react'

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screens/Home';
import Carrinho from './src/screens/Carrinho';

import { CarrinhoProvider } from './src/contexts/CarrinhoContext';

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <CarrinhoProvider>
      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen
            component={ Home }
            name='home' />

          <Stack.Screen 
            component={ Carrinho }
            name='carrinho' />

        </Stack.Navigator>
      </NavigationContainer>
    </CarrinhoProvider>
  )
}

export default App