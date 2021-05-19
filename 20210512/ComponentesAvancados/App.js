import React from 'react'
import {
  Image,
  SafeAreaView,
  ScrollView
} from 'react-native'

class App extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView 
          onScrollBeginDrag={ ()=> alert('Usuário iniciou o scroll')}
          horizontal={ true }>
          <Image 
            resizeMode='cover'
            source={{ uri: 'https://picsum.photos/id/10/200/300' }}
            style={{ height : 200, width : 400 }} />

          <Image 
            resizeMode='cover'
            source={{ uri: 'https://picsum.photos/id/20/200/300' }}
            style={{ height : 200, width : 400 }} />

          <Image 
            resizeMode='cover'
            source={{ uri: 'https://picsum.photos/id/30/200/300' }}
            style={{ height : 200, width : 400 }} />

          <Image 
            resizeMode='cover'
            source={{ uri: 'https://picsum.photos/id/40/200/300' }}
            style={{ height : 200, width : 400 }} />

          <Image 
            resizeMode='cover'
            source={{ uri: 'https://picsum.photos/id/50/200/300' }}
            style={{ height : 200, width : 400 }} />                                                
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default App