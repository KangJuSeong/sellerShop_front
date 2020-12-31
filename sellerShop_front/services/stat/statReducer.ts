import {
  AccountByShopActions,
  AccountByShopActionTypes,
  ShopListActions,
  ShopListActionTypes,
  DailySummaryActionTypes
} from "./statActions";
import { Reducer } from "redux";
import {shopListInitialState, accountByShopInitialState, AccountByShopState, ShopListState} from "./statTypes";


export const accountByShopReducer: Reducer<AccountByShopState, AccountByShopActions> = (state = accountByShopInitialState, action): AccountByShopState => {
  switch (action.type) {

    case AccountByShopActionTypes.LOAD_ACCOUNT_BY_SHOP_REQUEST: {
      return {
        ...state,
        isInitialized: false,
        isFetching: true,
        accountByShop: [],
      }
    }

    case AccountByShopActionTypes.LOAD_ACCOUNT_BY_SHOP_SUCCESS: {
      return {
        ...state,
        isInitialized: true,
        accountByShop: action.payload.data,
      }
    }

    case AccountByShopActionTypes.LOAD_ACCOUNT_BY_SHOP_FAILURE: {
      return {
        ...state,
        isInitialized: false,
        accountByShop: [],
      }
    }

    default: {
      return {
        ...state,
        accountByShop: state.accountByShop || [],
      };
    }

  }
};


export const shopListReducer: Reducer<ShopListState, ShopListActions> = (state = shopListInitialState, action): ShopListState => {
  switch (action.type) {

    case ShopListActionTypes.LOAD_SHOP_LIST_REQUEST: {
      return {
        ...state,
        isInitialized: false,
        isFetching: true,
      }
    }

    case ShopListActionTypes.LOAD_SHOP_LIST_SUCCESS: {
      return {
        ...state,
        isInitialized: true,
        stat: action.payload.data,
      }
    }

    case ShopListActionTypes.LOAD_SHOP_LIST_FAILURE: {
      return {
        ...state,
        isInitialized: true
      }
    }

    default: {
      return state;
    }

  }
};

export const dailySummaryReducer = (state, action) => {

  switch (action.type) {

    case DailySummaryActionTypes.INCREASE_SUMMARY: {
      let data = {...state};
      data.total += action.payload.total;
      data.shipped += action.payload.shipped;
      return data
    }

    default: {
      return {
        total: 0,
        shipped: 0,
      }
    }

  }
};
