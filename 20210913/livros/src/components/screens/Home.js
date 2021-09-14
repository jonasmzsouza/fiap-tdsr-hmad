import React from 'react'

import {
    SafeAreaView,
} from 'react-native'

import {
    Button,
} from 'react-native-elements'
import { removeToken } from '../../database/DB'

const Home = ( props ) => {

    const sair = () => {
      removeToken(() => {
        props.navigation.reset({
          index : 0,
          routes : [{
            name : 'login'
          }]
        })
      })
    }

    return (
      <SafeAreaView>
        <Button
        icon={{
          color: '#FFF',
          name : 'sign-out-alt',
          solid : true,
          type : 'font-awesome-5'            
        }}
        onPress={ () => sair() }
        title='Sair' />
      </SafeAreaView>
    )
}

export default Home