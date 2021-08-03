import React, { 
  useEffect, 
  useState 
} from 'react'
import {
  Button,
  Text,
  View,
} from 'react-native'

const Contador = (props) => <Text>Contador: { props.numero }</Text>

const App = () => {

  let [contador, setContador] = useState(0)
  let [exemplo, setExemplo] = useState("")

  useEffect(() => {
    alert('Componente App montando na tela!')

    return () => {
      alert('Componente App desmontado da tela!')
    }
  }, [exemplo])

  return (
    <View>
      <Contador numero={ contador } />
      <Button title="Incrementar" onPress={() => setContador( contador + 1 )} />
      <Button title="Resetar" onPress={() => setContador(0)} />
    </View>
  )
}

export default App