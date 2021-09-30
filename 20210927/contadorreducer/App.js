import React, {
  useReducer
} from 'react';

import {
  Button,
  SafeAreaView,
  Text
} from 'react-native';

const ACTIONS = {
  INCREMENTAR : "INCREMENTAR",
  DECREMENTAR : '"DECREMENTAR',
  RESETAR : "RESETAR"
}

const reducer = (stateAtual, action) => {
  switch( action.type ) {
    case ACTIONS.INCREMENTAR:
      return stateAtual + 1
    case ACTIONS.DECREMENTAR:
      if (stateAtual <= 0) {
        return 0
      }
      return stateAtual - 10
    case ACTIONS.RESETAR:
      return 0
    default :
      return stateAtual
  }
}

const App = () => {

  const [contador, dispatch] = useReducer(reducer, 0)

  return (
    <SafeAreaView>
      <Text>Contador: { contador }</Text>
      <Button
        onPress={() => dispatch({ type : ACTIONS.INCREMENTAR })}
        title='Incrementar' />
      <Button
        onPress={() => dispatch({ type : ACTIONS.DECREMENTAR })}
        title='Decrementar' />
      <Button
        onPress={() => dispatch({ type : ACTIONS.RESETAR })}
        title='Zerar contador' />
    </SafeAreaView>
  )
}

export default App;
