import { AxiosResponse } from 'axios'
import {all, takeLatest, select, call, put} from 'redux-saga/effects'
import { IState } from '../..'
import api from '../../../services/api'
import { addProductToCartFailure, addProductToCartRequest, addProductToCartSuccess } from './actions'
import { ActionTypes } from './types'

interface IStockResponse{
	id: number,
	quantity: number
}
type CheckProductStockRequest = ReturnType<typeof addProductToCartRequest>

function* checkProductStock({payload}: CheckProductStockRequest){
	const {product} = payload

	const currentQuantity : number = yield select((state: IState) => {
		return state.cart.items.find(item => item.product.id === product.id)?.quantity ?? 0
	})

	const avalibleStockResponse: AxiosResponse<IStockResponse> = yield call(api.get, `stock/${product.id}` )

	if(avalibleStockResponse.data.quantity > currentQuantity){
		yield put(addProductToCartSuccess(product))
	}else{
		yield put(addProductToCartFailure(product.id))
	}

}

export default all([
	takeLatest(ActionTypes.addProductToCartRequest, checkProductStock)
])


// take => primeiro parametro = qual action , segundo : qual funcao executar quando a action foi disparada