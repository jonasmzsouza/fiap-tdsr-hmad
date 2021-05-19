import React from 'react'
import {
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native'

const paises = [
  {
    id : 1,
    nome : "Argentina",
    bandeira : "https://cdn.pixabay.com/photo/2020/02/21/05/49/argentina-4866529_960_720.png",
    capital : "Buenos Aires"
  },
  {
    id : 2,
    nome : "Brasil",
    bandeira : "https://cdn.pixabay.com/photo/2020/02/26/02/30/brazil-4880477_960_720.png",
    capital: "Brasília"
  },
  {
    id : 3,
    nome : "Japão",
    bandeira : "https://cdn.pixabay.com/photo/2013/07/13/14/15/japan-162328_960_720.png",
    capital : "Tokio"
  }
]

class App extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <StatusBar backgroundColor='#F00' />

        <FlatList
          data={ paises }
          keyExtractor={ (item) => item.id.toString() }
          renderItem={ ({item}) => (
            <View style={ styles.celula }>
              <Image 
                source={{ uri : item.bandeira }}
                style={ styles.bandeira } />

              <View>
                <Text style={ styles.nomePais }>
                  { item.nome }
                  </Text>

                <Text styel={ styles.capitalPais }>
                  { item.capital }
                  </Text>
              </View>
            </View>
          )} />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  celula : {
    paddingHorizontal : 16,
    paddingVertical : 8,
    flexDirection : 'row'
  },
  bandeira : {
    height : 50,
    marginRight : 8,
    width : 100
  },
  nomePais : {
    fontSize : 24,
    fontWeight : 'bold'
  },
  capitalPais : {
    fontSize : 24
  }
})

export default App