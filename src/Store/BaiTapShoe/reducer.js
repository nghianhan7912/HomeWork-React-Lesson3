import { HANDLE_CART, HANDLE_CARTQUANTITY, HANDLE_DELETECART, HANDLE_PAY, HANDLE_PRODUCTDETAIL } from "./actionType";

const initialState = {
    productDetail: {
        id: 1,
        name: "Adidas Prophere",
        alias: "adidas-prophere",
        price: 350,
        description: "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        shortDescription: "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        quantity: 995,
        image: "http://svcy3.myclass.vn/images/adidas-prophere.png"
    },
    cartList: []
}
export const BTShoe = (state = initialState, { type, payload }) => {
    switch (type) {
        case HANDLE_PRODUCTDETAIL: {
            return { ...state, productDetail: payload }
        }
        case HANDLE_CART: {
            const index = state.cartList.findIndex((v) => v.id === payload.id)
            if (index !== -1) {
                state.cartList[index].cartQuantity += 1
            } else {
                state.cartList.push({ ...payload, cartQuantity: 1 })

            }
            return { ...state }
        }
        case HANDLE_CARTQUANTITY: {
            const index = state.cartList.findIndex((v) => v.id === payload.id)
            state.cartList[index].cartQuantity = state.cartList[index].cartQuantity + payload.quantity || 1
            return { ...state }
        }
        case HANDLE_DELETECART: {
            const newCL = state.cartList.filter((v) => v.id !== payload)
            return {...state, cartList:newCL}
        }
        default:
            return state
    }
}