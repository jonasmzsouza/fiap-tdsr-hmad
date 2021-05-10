import React from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native'

class App extends React.Component {
  render() {
    return (
      <View style={ styles.container }>
        <Text 
          numberOfLines={ 1 }
          ellipsizeMode='middle'
          selectable={ true }
          style={ styles.texto }>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Fusce hendrerit, lectus eget hendrerit rhoncus, felis nibh varius eros, 
          eget mollis velit magna at quam. Cras commodo eu nibh at ornare. 
          Duis lacinia elit vel accumsan auctor. Maecenas condimentum, ligula sed feugiat ornare, 
          nisl velit accumsan nunc, eu scelerisque enim tortor sed lectus.
        </Text>

        <TextInput 
          autoFocus={ true }
          editable={ false }
          keyboardType='numeric'
          maxLength={ 10 }
          multiline={ true }
          onFocus={ () => alert('O campo recebeuy foco!')}
          placeholder='Digite algo aqui'
          style={ styles.input} 
          textAlignVertical='top' />

        <View style={ styles.retangulo }></View>
        <View style={ styles.retangulo }></View>
        <View style={ styles.retangulo }></View>
        <View style={ styles.retangulo }></View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    backgroundColor : '#F00', 
    flex : 1, 
    padding : 30
  },

  input : {
    backgroundColor : '#FFF',
    borderColor : '#333',
    borderWidth : 3,
    borderRadius : 5,
    height : 40,
    padding : 10
  },

  texto : {
    color: '#FFF'  
  },

  retangulo : {
    backgroundColor : '#333',
    borderRadius : 10,
    height : 200,
    marginTop: 10,
    width : 300    
  }
})

export default App