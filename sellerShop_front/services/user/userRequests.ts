import {request} from "../../libs/request";


export const requestLogin = (username, password) => request.post('/apis/v1/account/login',
  JSON.stringify({
    username: username,
    password: password,
}),{
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

export const requestSignup = (username, password, phone) => request.post('/apis/v1/account/signup',
  JSON.stringify({
    username: username,
    password: password,
    phone: phone,
}),{
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

export const requestChangePW = (token, current_password, new_password) => request.post('/apis/v1/account/changePassword',
  JSON.stringify({
    current_password: current_password,
    new_password: new_password,
}),{
  headers: {
    'AUTHORIZATION': 'Bareer ' + token,
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

export const requestDelete = (token, password) => request.post('/apis/v1/account/delete',
  JSON.stringify({
    password: password,
}),{
  headers: {
    'AUTHORIZATION': 'Bareer ' + token,
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

export const requestUserProfile = (token: string) => request.get('/apis/v1/account/userProfile', {
  headers: {
    AUTHORIZATION: 'Bareer ' + token,
  },
});

export const requestSubscribe = (token: string) => request.get('/apis/v1/account/subscribe', {
  headers: {
    AUTHORIZATION: 'Bareer ' + token,
  },
});

export const requestUnsubscribe = (token: string) => request.get('/apis/v1/account/unsubscribe', {
  headers: {
    AUTHORIZATION: 'Bareer ' + token,
  }
})

export const requestReview = (token, review, grade) => request.post('/apis/v1/account/review',
  JSON.stringify({
    review: review,
    grade: grade,
  }),{
    headers: {
      'AUTHORIZATION': 'Bareer ' + token,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  });

