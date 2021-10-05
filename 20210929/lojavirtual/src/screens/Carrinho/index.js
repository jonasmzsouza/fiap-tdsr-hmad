import React, {
  useContext
} from 'react'

import {
  FlatList,
  Text,
  View
} from 'react-native'

import CarrinhoContext from '../../contexts/CarrinhoContext'

import ListItemProduto from '../../components/ListItemProduto'

const Carrinho = (props) => {
  const { carrinho } = useContext(CarrinhoContext)

  return (
    <View>

      { carrinho.length === 0 && (
        <Text style={{ paddgin : 8, textAlign : 'center'}}>
          Não há produtos para listar!
        </Text>
      )}      

      <FlatList
        data={ carrinho }
        renderItem={ ({item}) => (
          <ListItemProduto produto={ item } modoCarrinho={true} />
        )} />
    </View>
  )
}

export default Carrinho