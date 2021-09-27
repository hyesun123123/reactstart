import { ActionTypes } from "./Types";
//액션 생성자 정의
export const addToCart =(product, quantity)=>({
    type: ActionTypes.CART_ADD,
    payload:{
        product,
        quantity: quantity || 1
    }
});
export const updateCartQuantity=(product,quantity)=>({
    type: ActionTypes.CART_UPDATE,
    payload: {product,quantity}
})
export const removeFromCart =(product)=>({
    type: ActionTypes.CART_REMOVE,
    payload:product
})
export const clearCart=()=>({
    type: ActionTypes.CART_CLEAR
})
//payload:액션 실행에 필요한 데이터를 운반하는 프로퍼티
