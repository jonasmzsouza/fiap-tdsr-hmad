import React, {
  useEffect,
  useState
} from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native';

const API_URL = 'http://10.0.2.2:3000/'

const App = () => {

  const [mensagens, setMensagens] = useState([])
  const [frase, setFrase] = useState('')

  const recuperarMensagensAPI = () => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((json) => setMensagens(json))
  }

  const enviarFraseAPI = () => {

    if (frase.trim().length === 0) {
      alert('Informe uma frase motivacional!')
      return
    } 

    const headers = new Headers()
    headers.append('Content-Type', 'application/json')

    fetch(API_URL, {
      method : 'POST',
      headers : headers,
      body : JSON.stringify({
        mensagem : frase
      })
    }).then(() => {
      setFrase('')
      recuperarMensagensAPI()
    })
  }

  const limparAPI = () => {
    fetch(API_URL, {
      method : 'DELETE'
    }).then( () => setMensagens([]))
  }

  useEffect(() => {
    recuperarMensagensAPI()
  }, [])

  return (
    <SafeAreaView style={{ padding : 16 }}>
      <View style={{ backgroundColor : '#EEE', padding : 16, marginBottom : 8 }}>
        <TextInput
          onChangeText={ (txt) => setFrase(txt) }
          placeholder='Digite sua frase motivacional'
          style={{
            borderBottomColor : '#999',
            borderBottomWidth : 3,
            marginBottom : 8
          }}
          value={ frase } />

          <Button
            title='Salvar'
            onPress={() => enviarFraseAPI() }  />

          <View style={{ margin : 5 }} />

          <Button
            title='Limpar Banco de Dados'
            onPress={ () => limparAPI() } />
      </View>

      <FlatList
        data={ mensagens }
        keyExtractor={(item) => Math.random() * 1000000000000 }
        renderItem={({item}) => (
          <Text>{item}</Text>
        )} />
    </SafeAreaView>
  )
}

export default App;
