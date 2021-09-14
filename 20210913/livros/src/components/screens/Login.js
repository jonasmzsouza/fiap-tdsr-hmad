import React,{
  useEffect,
  useState
} from 'react'

import {
  ActivityIndicator,
  Alert,
  SafeAreaView,
  Text
} from 'react-native'

import {
  Button,
  Input,
} from 'react-native-elements'

import { login } from '../../services/UsuarioService'

import { readToken, insertToken } from '../../database/DB'

const Login = ( props ) => {

  const [verificandoToken, setVerificandoToken] = useState(true)
  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    readToken((error, success) => {
      if ( !error && success) {
        return redirecionar()
      }
      setVerificandoToken(false)
    })
  }, [])

  const redirecionar = () => {
    props.navigation.reset({
      index : 0,
      routes : [
        {
          name : 'home'
        }
      ]
    })
  }

  const validar = () => {
    if ( usuario.trim().length === 0 ) {
      Alert.alert('Erro', 'Informe o usuário')
      return false
    }

    if ( senha.trim().length === 0 ) {
      Alert.alert('Erro', 'Informe a senha')
      return false
    }
    
    return true
  }

  const entrar = () => {
    if ( validar() ) {
      setLoading(true)
      login(usuario, senha)
      .then((response) => {
        insertToken(response.data.token,  (error) => {
          if(error) {
            return Alert.alert('Erro', 'Erro ao guardar o token')
          }
          redirecionar() 
        })
      })
      .catch(() => Alert.alert('Erro', 'Usuário/senha inválidos!'))
      .finally(() => setLoading(false))
    }
  }

  if ( verificandoToken ) {
    return <></>
  }

  return (
    <SafeAreaView style={{ padding : 16 }}>
      <Text>Digite seu usuário:</Text>
      <Input
        onChangeText={ (txt) => setUsuario(txt) }
        leftIcon={{
          name : 'user',
          solid : true,
          type : 'font-awesome-5'
        }}
        value={ usuario } />

      <Text>Digite seu usuário:</Text>
      <Input
        onChangeText={ (txt) => setSenha(txt) }
        leftIcon={{
          name : 'lock',
          solid : true,
          type : 'font-awesome-5'
        }}          
        secureTextEntry
        value={ senha } />

      <Button
        icon={{
          color: '#FFF',
          name : 'sign-in-alt',
          solid : true,
          type : 'font-awesome-5'            
        }}
        onPress={ () => entrar() }
        title='Entrar' />

      <ActivityIndicator animating={ loading } />
    </SafeAreaView>
  )
}

export default Login