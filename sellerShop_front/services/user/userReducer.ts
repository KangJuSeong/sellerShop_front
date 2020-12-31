import { UserActions } from "./userActions";
import { Reducer } from "redux";
import { UserState } from "./userTypes";

export const initialUserState: UserState = {
  isInitialized: false,
  isFetching: false,

  // 프로필 수정 데이터
  profileIsUpdating: false,
  profileUpdateSuccess: false,

  // 패스워드 초기화 이메일 발송 데이터
  resetPasswordEmailIsCreating: false,
  resetPasswordEmailCreateSuccess: null,

  // 패스워드 초기화 데이터
  resetPasswordIsProgress: false,
  resetPasswordSuccess: null,
};

export const userReducer: Reducer<UserState, UserActions> = (state = initialUserState, action): UserState => {
  switch (action.type) {
    default: {
      return state
    }
  }
};