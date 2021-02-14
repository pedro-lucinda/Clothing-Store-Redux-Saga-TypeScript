import {all, takeLatest, select} from 'redux-saga/effects'
import { IState } from '../..'
import { addProductToCart } from './actions'


type CheckProductStockRequest = ReturnType<typeof addProductToCart>

function* checkProductStock({payload}: CheckProductStockRequest){
	const {product} = payload

	const currentQuantity : number = yield select((state: IState) => {
		return state.cart.items.find(item => item.product.id === product.id)?.quantity ?? 0
	})

	console.log(currentQuantity)
}

export default all([
	takeLatest("ADD_PRODUCT_TO_CART", checkProductStock)
])


// take => primeiro parametro = qual action , segundo : qual funcao executar quando a action foi disparada