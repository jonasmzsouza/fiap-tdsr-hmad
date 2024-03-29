import React, {
  useContext,
  useState
} from 'react'

import {
  Alert,
  Text,
  View
} from 'react-native'

import {
  Button,
  Input
} from 'react-native-elements'

import CarrinhoContext from '../../contexts/CarrinhoContext'

import { valorEmRealFormatado } from '../../utils'

const ListItemProduto = (props) => {
  const { dispatch, ACTIONS } = useContext(CarrinhoContext)
  const { produto, modoCarrinho } = props
  const [quantidade, setQuantidade] = useState( 
    modoCarrinho 
    ? produto.quantidade.toString() 
    : '1'
  )

  const validarQuantidade = () => {
    if ( quantidade.trim().length === 0 ) {
      Alert.alert('Erro', 'Informe uma quantidade!')
      return false
    }
    
    if ( ! /^\d+$/.test(quantidade) ) {
      Alert.alert('Erro', 'A quantidade deve ser um valor numérico!')
      return false
    }

    if ( parseInt(quantidade) < 1 ) {
      Alert.alert('Erro', 'Informe um valor positivo para a quantidade')
      return false
    }

    return true
  }

  const adicionarAoCarrinho = () => {
    if ( validarQuantidade() ) {
      dispatch({ 
        type : ACTIONS.ADICIONAR, 
        payload : { produto, quantidade } 
      })
      
      Alert.alert('Sucesso', 'Produto adicionado ao carrinho!')
      setQuantidade('1')
    }
  }

  const removerDoCarrinho = () => {
    Alert.alert(
      'Atenção',
      'Você realmente deseja excluir este item:',
      [
        {
          text : 'Sim',
          onPress : () => {
            dispatch({
              type : ACTIONS.REMOVER,
              payload : { produto }
            })
          }
        },
        {
          text : 'Não'
        }
      ]
    )
  }

  const atualizarCarrinho = () => {
    if ( validarQuantidade() ) {
      dispatch({
        type : ACTIONS.ATUALIZAR,
        payload : { produto, quantidade }
      })
  
      Alert.alert('Sucesso', 'Produto atualizado!')
    }
  }

  return (
    <View style={{ padding : 16 }}>
      <Text style={{ fontSize : 18, fontWeight : 'bold' }}>
        { produto.nome }
      </Text>

      <Text style={{ color : '#050', fontSize : 24, fontWeight : 'bold' }}>
        { valorEmRealFormatado(produto.valor) }
      </Text>

      { modoCarrinho && (
        <Text>
          Total:
          { 
          valorEmRealFormatado(
            parseFloat(produto.valor) * parseInt(produto.quantidade)
          )
          }
        </Text>
      )}

      <Input
        onChangeText={ (txt) => setQuantidade(txt) }
        style={{ textAlign : 'center'}}
        value={ quantidade } />
      
      { modoCarrinho && (
        <>
          <Button 
            icon={{
              color : '#FFF',
              name : 'sync',
              type : 'font-awesome-5'
            }} 
            onPress={() => atualizarCarrinho()}     
            title='Atualizar' />

          <View style={{marginBottom : 8}} />

          <Button 
            buttonStyle={{backgroundColor : '#F00'}}
            icon={{
              color : '#FFF',
              name : 'trash',
              type : 'font-awesome-5'
            }} 
            onPress={() => removerDoCarrinho()}     
            title='Excluir' />
        </>
      ) || (
        <Button 
        icon={{
          color : '#FFF',
          name : 'shopping-cart',
          type : 'font-awesome-5'
        }} 
        onPress={() => adicionarAoCarrinho()}     
        title='Adicionar ao carrinho' />
      )}

    </View>
  )
}

export default ListItemProduto