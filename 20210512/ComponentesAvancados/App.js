import React from 'react'
import {
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  TextInput,
  View
} from 'react-native'

class App extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView style={{ flex : 1 }}>
        <View style={{ flex: 1, justifyContent : 'center', padding : 16 }}>
          <Image 
              resizeMode='cover'
              source={{ uri: 'https://picsum.photos/id/70/200/300' }}
              style={{ height : 200, width : 400 }} />
            
            <TextInput style={{ borderWidth : 1, marginTop : 8 }} />
            <TextInput style={{ borderWidth : 1, marginTop : 8 }} />
            <TextInput style={{ borderWidth : 1, marginTop : 8 }} />
        </View>
      </KeyboardAvoidingView>
    )
  }
}

export default App