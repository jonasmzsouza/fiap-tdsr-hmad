import React from 'react'

import {
  FlatList,
  Text,
  View
} from 'react-native'

import {
  Button
} from 'react-native-elements'

import ListItemProduto from '../../components/ListItemProduto'

import produtos from '../../data/produtos.json'

const Home = (props) => {
  return (
    <View style={{ paddingBottom : 50 }}>
      <Button 
        buttonStyle={{
          backgroundColor : '#050'
        }}
        icon={{
          color : '#FFF',
          name : 'shopping-cart',
          type : 'font-awesome-5'
        }}
        onPress={() => {}}
        title='Visualizar carrinho (R$ 0.00)' />

      <FlatList
        data={ produtos }
        keyExtractor={(produto) => produto.id }
        renderItem={({item}) => (
          <ListItemProduto produto={ item } />
        )} />
      
    </View>
  )
}

export default Home