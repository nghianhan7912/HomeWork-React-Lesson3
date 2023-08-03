import { combineReducers } from "redux";
import { BTShoe } from "./BaiTapShoe/reducer";
export const rootRedux = combineReducers ({
    BTshoe : BTShoe
})