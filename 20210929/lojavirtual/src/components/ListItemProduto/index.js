import React, {
  useContext,
  useState
} from 'react'

import {
  Text,
  View
} from 'react-native'

import {
  Button,
  Input
} from 'react-native-elements'

import CarrinhoContext from '../../contexts/CarrinhoContext'

const ListItemProduto = (props) => {
  const { dispatch, ACTIONS } = useContext(CarrinhoContext)

  const [quantidade, setQuantidade] = useState('1')

  const { produto } = props

  const adicionarAoCarrinho = () => {
    dispatch({ 
      type : ACTIONS.ADICIONAR, 
      payload : { produto, quantidade } 
    })
  }

  return (
    <View style={{ padding : 16 }}>
      <Text style={{ fontSize : 18, fontWeight : 'bold' }}>
        { produto.nome }
      </Text>

      <Text style={{ color : '#050', fontSize : 24, fontWeight : 'bold' }}>
        { produto.valor }
      </Text>

      <Input
        onChangeText={ (txt) => setQuantidade(txt) }
        style={{ textAlign : 'center'}}
        value={ quantidade } />

      <Button 
        icon={{
          color : '#FFF',
          name : 'shopping-cart',
          type : 'font-awesome-5'
        }} 
        onPress={() => adicionarAoCarrinho()}     
        title='Adicionar ao carrinho' />
    </View>
  )
}

export default ListItemProduto