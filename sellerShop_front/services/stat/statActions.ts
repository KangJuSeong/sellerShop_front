import { ActionsUnion, createAction } from '../reudxHelpers';
import {AccountByShopResponse, ShopListResponse} from "./statTypes";


export enum AccountByShopActionTypes {
  LOAD_ACCOUNT_BY_SHOP_REQUEST = 'LOAD_ACCOUNT_BY_SHOP_REQUEST',
  LOAD_ACCOUNT_BY_SHOP_SUCCESS = 'LOAD_ACCOUNT_BY_SHOP_SUCCESS',
  LOAD_ACCOUNT_BY_SHOP_FAILURE = 'LOAD_ACCOUNT_BY_SHOP_FAILURE'
}


export const AccountByShopActions = {
  loadAccountByShopRequest: (token) => createAction(AccountByShopActionTypes.LOAD_ACCOUNT_BY_SHOP_REQUEST, token),
  loadAccountByShopSuccess: (response: AccountByShopResponse) => createAction(AccountByShopActionTypes.LOAD_ACCOUNT_BY_SHOP_SUCCESS, response),
  loadAccountByShopFailure: () => createAction(AccountByShopActionTypes.LOAD_ACCOUNT_BY_SHOP_FAILURE),
};


export type AccountByShopActions = ActionsUnion<typeof AccountByShopActions>;


export enum ShopListActionTypes {
  LOAD_SHOP_LIST_REQUEST = 'LOAD_SHOP_LIST_REQUEST',
  LOAD_SHOP_LIST_SUCCESS = 'LOAD_SHOP_LIST_SUCCESS',
  LOAD_SHOP_LIST_FAILURE = 'LOAD_SHOP_LIST_FAILURE',
}


export const ShopListActions = {
  loadShopListRequest: (token) => createAction(ShopListActionTypes.LOAD_SHOP_LIST_REQUEST, token),
  loadShopListSuccess: (response: ShopListResponse) => createAction(ShopListActionTypes.LOAD_SHOP_LIST_SUCCESS, response),
  loadShopListFailure: () => createAction(ShopListActionTypes.LOAD_SHOP_LIST_FAILURE),
};


export type ShopListActions = ActionsUnion<typeof ShopListActions>;


export enum DailySummaryActionTypes {
  INCREASE_SUMMARY = 'INCREASE_SUMMARY',
}


export const DailySummaryActions = {
  increaseSummary: (value) => createAction(DailySummaryActionTypes.INCREASE_SUMMARY, value),
};


export type DailySummaryActions = ActionsUnion<typeof DailySummaryActions>;
