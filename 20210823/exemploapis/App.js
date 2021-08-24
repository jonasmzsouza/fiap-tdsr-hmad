import React , {
  useEffect,
  useState
} from 'react'

import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  View
} from 'react-native'

const App = () => {

  const [filmes, setFilmes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://swapi.dev/api/films/')
      .then((response) => response.json())
      .then((json) => {
        setFilmes( json.results )
        setLoading( false )
      })
  }, [])

  return (
    <SafeAreaView style={{ flex : 1 }}>
      { loading && (
        <View style={{ flex : 1, justifyContent : 'center' }}>
          <ActivityIndicator size={ 120 } />
        </View>
      )}

      { !loading && (
        <FlatList 
          data={ filmes }
          keyExtractor={ (item) => item.episode_id }
          renderItem= { ({item}) => (
            <View style={{ 
                backgroundColor : '#eee', 
                borderBottomColor : '#999', 
                borderBottomWidth : 3, 
                padding : 16 }}>
              <Text style={{ fontSize : 20, fontWeight : 'bold'}}>
                { item.title }
              </Text>

              <Text numberOfLines={ 2 }>
                { item.opening_crawl }
              </Text>
            </View>
          )}/>
      )}

    </SafeAreaView>
  )
}

export default App