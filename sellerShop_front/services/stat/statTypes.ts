export interface ShopListState {
  isInitialized: boolean;
  isFetching: boolean;
  stat: ShopList;
}


export const shopListInitialState: ShopListState = {
  isInitialized: false,
  isFetching: false,
  stat: {
    shops: []
  }
};


export interface ShopList {
  id?: number;
  shops: {
    account: string;
    shop: string;
    shop_logo_uri: string;
    id: number;
  }[]
}


export interface ShopListResponse {
    data: ShopList
}


export interface AccountByShopState {
  isInitialized: boolean;
  isFetching: boolean;
  accountByShop?: AccountByShopItem[];
}

export const accountByShopInitialState: AccountByShopState = {
  isInitialized: false,
  isFetching: false,
  accountByShop: null
};


export interface AccountByShopItem {
  shop: number;
  count: number;
}
export interface AccountByShopResponse {
  data: AccountByShopItem[]
}
