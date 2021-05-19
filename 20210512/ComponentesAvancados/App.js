import React from 'react'
import {
  ActivityIndicator,
  SafeAreaView
} from 'react-native'

class App extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <ActivityIndicator
          animating={ true }
          color='#F00'
          size={ 80 } />
      </SafeAreaView>
    )
  }
}

export default App