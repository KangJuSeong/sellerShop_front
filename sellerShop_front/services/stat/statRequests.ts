import {request} from "../../libs/request";


export const requestAccountByShop = (token) => request.get(`/apis/v1/accounts/by-shop`, {
  headers: {
    AUTHORIZATION: 'Bareer ' + token
  }
});



export const requestDailyStatByAccount = (token, data) => request.get(`/apis/v1/stats/daily/by-account`, {
  headers: {
    AUTHORIZATION: 'Bareer ' + token
  },
  params: data
});



export const requestShopList = (token) => request.get(`/apis/v1/account/shop/list`, {
    headers: {
      AUTHORIZATION: 'Bareer ' + token
    }
});



export const requestAccountShopLogin = (token, id, pw, shop) => request.post('/apis/v1/account/shop/create',
    JSON.stringify({
        login_id: id,
        login_pw: pw,
        shop: shop,
    }), {
    headers: {
        'AUTHORIZATION': 'Bareer ' + token,
        'Accept': 'application/json',
        'Content-Type': 'application/json',      
    },
})



export const requestAccountShopLogout = (id) => request.post('/apis/v1/account/shop/delete', 
    JSON.stringify({
        id: id,
    }), {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
});



export const requestGetNoticeList = () => request.get('/apis/v1/notice');



export const requestGetClauseList = () => request.get('/apis/v1/clause');