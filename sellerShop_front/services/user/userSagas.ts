import {UserActions} from "./userActions";
import { all, call, put, take } from 'redux-saga/effects'
import {UserProfileResponse} from "./userTypes";
import { AxiosResponse } from 'axios';
import {requestUserProfile} from "./userRequests";
import {getToken} from "libs/getToken";


export function* userSaga() {
  yield all([
    initializeUser(),
  ])
}

export function* initializeUser() {
  try {
    const token = getToken().then((token) => {
        _initializeUser(token);
    })
  } catch(e) {
    // localStorage.removeItem('token')
  }
}

export function* _initializeUser(token) {
    const response: AxiosResponse<UserProfileResponse> = yield call(requestUserProfile, token);
    yield put(UserActions.loadUserProfileSuccess(response.data));
}