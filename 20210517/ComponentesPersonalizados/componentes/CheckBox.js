import React from 'react'
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'

class CheckBox extends React.Component {
  state = {
    isChecked : this.props.checked
  }

  pressionar() {
    const newChecked = !this.state.isChecked
    this.setState({ isChecked : newChecked })

    if ( typeof this.props.onChecked === 'function') {
      this.props.onChecked(newChecked)
    }
  }

  render() {

    const box = [estilos.checkbox]

    if ( this.state.isChecked ) {
      box.push(estilos.checkboxAtivo)
    }

    return (
        <TouchableOpacity 
          activeOpacity={0.6}
          onPress={ () => this.pressionar() }
          style={ estilos.containerCheck }>

          <View style={ box } />
          
          <Text>{ this.props.text || 'Texto default' }</Text>
        </TouchableOpacity>
    )
  }
}

const estilos = StyleSheet.create({
  containerCheck : {
    flexDirection : 'row',
    alignItems : 'center',
    padding : 8
  },
  checkbox : {
    borderColor : '#CCC',
    borderRadius : 5,
    borderWidth : 1,
    height : 18,
    marginRight : 8,
    width : 18
  },
  checkboxAtivo : {
    backgroundColor : '#0F0'
  }
})

export default CheckBox