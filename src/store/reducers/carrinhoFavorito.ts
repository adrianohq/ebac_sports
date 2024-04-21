import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type CarrinhoFavoritoState = {
  carrinho: Produto[]
  favoritos: Produto[]
}

const initialState: CarrinhoFavoritoState = {
  carrinho: [],
  favoritos: []
}

const carrinhoFavoritoSlice = createSlice({
  name: 'carrinhoFavorito',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.carrinho.find((p) => p.id === produto.id)) {
        alert('Item já adicionado')
      } else {
        state.carrinho.push(produto)
      }
    },

    favoritar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.favoritos.find((p) => p.id === produto.id)) {
        state.favoritos = state.favoritos.filter((p) => p.id !== produto.id)
      } else {
        state.favoritos.push(produto)
      }
    }
  }
})

export const { adicionar, favoritar } = carrinhoFavoritoSlice.actions
export default carrinhoFavoritoSlice.reducer
