import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import BemVindo from './src/components/BemVindo'
import Login from './src/components/Login'

const Stack = createNativeStackNavigator()

const App = () => {
    return(
    <NavigationContainer>
        <Stack.Navigator 
            screenOptions={{
                headerStyle : {
                    backgroundColor : '#483d8b'
                    },
                    headerTintColor : '#FFF'
            }
        }>
            <Stack.Screen
                component={Login}
                name="login"
                options={{title: "Login"}}
            />

            <Stack.Screen
                component={BemVindo}
                name="bemVindo"
                options={{title: "Bem vindo"}}
            />
        </Stack.Navigator>
    </NavigationContainer>
    )
}

export default App