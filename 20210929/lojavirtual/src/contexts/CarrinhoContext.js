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

const adicionar = (stateAtual, action) => {
  console.log(stateAtual, action)
  return stateAtual
}

const reducer = (stateAtual, action) => {
  switch ( action.type ) {
    case ACTIONS.ADICIONAR:
      return adicionar(stateAtual, action)
    case ACTIONS.ATUALIZAR:
      return stateAtual
    case ACTIONS.LIMPAR:
      return stateAtual
    case ACTIONS.REMOVER:
      return stateAtual
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