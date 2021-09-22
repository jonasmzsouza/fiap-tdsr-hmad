import React, {
  useEffect,
  useState
} from 'react'

import {
  Alert,
  FlatList,
  Text,
  View,
} from 'react-native'

import {
    SpeedDial,
} from 'react-native-elements'

import jwtDecode from 'jwt-decode'

import { removeToken, readToken } from '../../database/DB'

import { getLivros } from '../../services/LivroService'

const Home = ( props ) => {

  const [open, setOpen] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const [token, setToken] = useState('')
  const [livros, setLivros] = useState([])

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

    const add = () => {
      setOpen(false)
      props.navigation.navigate('cadastroLivros', { token })
    }

    const getInitialData = ( jwt ) => {
      getLivros(jwt)
      .then((response) => setLivros(response.data))
      .catch(() => Alert.alert('Erro', 'Não foi possível recuperar os dados da API'))      
    }

    useEffect(() => {
      readToken((error, success) => {
        if ( !error ) {
          const payload = jwtDecode(success)
          setIsAdmin(payload.admin)
          setToken(success)
          getInitialData(success)
        }
      })
    })

    return (
      <View style={{ flex: 1, padding: 16}}>

        <FlatList 
          data={ livros }
          keyExtractor={ (item) => item.id }
          renderItem={ ({item}) => <Text>{item.titulo}</Text>} />

        <SpeedDial
          isOpen={open}
          icon={{ name: 'edit', color: '#fff' }}
          openIcon={{ name: 'close', color: '#fff' }}
          onOpen={() => setOpen(!open)}
          onClose={() => setOpen(!open)}
        >
          {/* { isAdmin && ( */}
            <SpeedDial.Action
              icon={{ name: 'add', color: '#fff' }}
              title="Add"
              onPress={() => add()}
            />
          {/* )} */}

          <SpeedDial.Action
            icon={{ 
              name: 'sign-out-alt', 
              color: '#fff', 
              type: 'font-awesome-5' 
            }}
            title="Sair"
            onPress={() => sair()}
          />
        </SpeedDial>
      </View>
    )
}

export default Home