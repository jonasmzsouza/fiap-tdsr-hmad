import React, {
  createContext,
  useReducer
} from 'react'

const CarrinhoContext = createContext()

const ACTIONS = {
  ADICIONAR : "ADICIONAR",
  ATUALIZAR : "ATUALIZAR",
  LIMPAR : "LIMPAR",
  REMOVER : "REMOVER"
}

const PRODUTO_NAO_ENCONTRADO = -1

/**
 * Verifica se um produto com determinado id já existe no carrinho.
 * Retorna -1 se não encontrar. Retorna a posição do item no array caso encontrado.
 * @param {json} stateAtual 
 * @param {int} idProduto 
 * @returns {int}
 */
const retornarIndexProdutoExistente = (stateAtual, idProduto) => {
  return stateAtual.findIndex((produto) => produto.id === idProduto)
}

/**
 * Adiciona um item no carrinho
 * @param {json} stateAtual 
 * @param {json} action 
 * @returns {json}
 */
const adicionar = (stateAtual, action) => {
  const index = retornarIndexProdutoExistente(stateAtual, action.payload.produto.id)

  if ( index === PRODUTO_NAO_ENCONTRADO) {
    stateAtual.push({ 
      ...action.payload.produto, 
      quantidade : parseInt(action.payload.quantidade) })
  } else {
    const quantidadeAtual = parseInt(stateAtual[index].quantidade)
    const novaQuantidade = parseInt(action.payload.quantidade)
    stateAtual[index].quantidade = quantidadeAtual + novaQuantidade
  }

  return [...stateAtual]
}

/**
 * Remove um item do carrinho.
 * @param {json} stateAtual 
 * @param {json} action 
 * @returns {json}
 */
const remover = (stateAtual, action) => {
  const index = retornarIndexProdutoExistente(stateAtual, action.payload.produto.id)

  if ( index > PRODUTO_NAO_ENCONTRADO ) {
    stateAtual.splice(index, 1)
  }

  return [...stateAtual]
}

/**
 * Atualiza a quantidade de um produto já existente no carrinho.
 * @param {json} stateAtual 
 * @param {json} action 
 * @returns {json}
 */
const atualizar = (stateAtual, action) => {
  const index = retornarIndexProdutoExistente(stateAtual, action.payload.produto.id)

  if ( index > PRODUTO_NAO_ENCONTRADO ) {
    stateAtual[index].quantidade = parseInt(action.payload.quantidade)
  }

  return [...stateAtual]
}

const reducer = (stateAtual, action) => {
  switch ( action.type ) {
    case ACTIONS.ADICIONAR:
      return adicionar(stateAtual, action)
    case ACTIONS.ATUALIZAR:
      return atualizar(stateAtual, action)
    case ACTIONS.LIMPAR:
      return []
    case ACTIONS.REMOVER:
      return remover(stateAtual, action)
    default:
      return [...stateAtual]
  }
}

const CarrinhoProvider = (props) => {
  const [carrinho, dispatch] = useReducer(reducer, [])

  return (
    <CarrinhoContext.Provider value={{carrinho, dispatch, ACTIONS}}>
      {props.children}
    </CarrinhoContext.Provider>
  )
}

export default CarrinhoContext
export { CarrinhoProvider }