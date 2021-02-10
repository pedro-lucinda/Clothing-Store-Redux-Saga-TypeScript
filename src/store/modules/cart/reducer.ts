import { Reducer } from 'redux'
import produce from 'immer'
import {ICartState} from './types'
// immer => produz novo estado a partir de um estado anterior

const INITIAL_STATE : ICartState = {
	items: []
}

export const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) =>{
//immer
// draft e o estado antigo entao podemos manipular normalmente
	return	produce(state, draft => {
		switch (action.type) {
			case "ADD_PRODUCT_TO_CART": {
				const {product} = action.payload

				const productInCartIndex = draft.items.findIndex(item => item.product.id === product.id)

				if(productInCartIndex >= 0){
					draft.items[productInCartIndex].quantity += 1
				}else {
					draft.items.push({
						product, 
						quantity: 1,
					})
				}

				}
				break;
		
			default: {
				return draft
			}
			}
		})
}




/* PARA NAO REPETIR TANTO O STATE COMO ALI EM BAIXO - UTILIZA A LIB IMMET */

// 			return {...state, items: [
// 				...state.items, { 
// 					product, quantity: 1,