import React from 'react'
import {
    SafeAreaView,
    Text,
    View
} from 'react-native'

import estilos from './styles/styles'

const BemVindo = ( props ) => {
    const {nome} = props.route.params || '';

    return(
        <SafeAreaView>
            <View>
                <Text style={[estilos.labelStyle, estilos.centeredText]}>Bem vindo {nome}!</Text>
            </View>
        </SafeAreaView>
    )
}

export default BemVindo