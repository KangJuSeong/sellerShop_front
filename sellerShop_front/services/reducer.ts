import { combineReducers } from "redux";
import {userReducer} from "./user/userReducer";
import {accountByShopReducer, shopListReducer, dailySummaryReducer} from "./stat/statReducer";


export const reducers = combineReducers({
  user: userReducer,
  accountByShop: accountByShopReducer,
  dailySummary: dailySummaryReducer,
  shopList: shopListReducer,
});


export type AppState = ReturnType<typeof reducers>;
