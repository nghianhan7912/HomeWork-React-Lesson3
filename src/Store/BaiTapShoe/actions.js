import { HANDLE_CART, HANDLE_CARTQUANTITY, HANDLE_DELETECART, HANDLE_PAY, HANDLE_PRODUCTDETAIL } from "./actionType"

export const baiTapShoe = {
    handlePrdDetail:(payload) => {
        return {
            type : HANDLE_PRODUCTDETAIL,
            payload,
        }
    },
    handleAddCart :(payload) => {
        return {
            type : HANDLE_CART,
            payload,
        }
    },
    handleCartQuantity : (payload) => {
        return {
            type : HANDLE_CARTQUANTITY,
            payload,
        }
    },
    handleDeleteCart: (payload) => {
        return {
            type : HANDLE_DELETECART,
            payload,
        }
    },
    handlePay: (payload) => {
        return {
            type: HANDLE_PAY,
            payload,
        }
    }
}