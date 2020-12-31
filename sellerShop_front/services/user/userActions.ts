import { ActionsUnion, createAction } from '../reudxHelpers';
import {
  UserProfileResponse,
} from './userTypes';


export enum UserActionTypes {
  LOAD_USER_PROFILE_REQUEST = 'LOAD_USER_PROFILE_REQUEST',
  LOAD_USER_PROFILE_SUCCESS = 'LOAD_USER_PROFILE_SUCCESS',
  LOAD_USER_PROFILE_FAILURE = 'LOAD_USER_PROFILE_FAILURE',
}

export const UserActions = {
  loadUserProfileRequest: () => createAction(UserActionTypes.LOAD_USER_PROFILE_REQUEST),
  loadUserProfileSuccess: (response: UserProfileResponse) => createAction(UserActionTypes.LOAD_USER_PROFILE_SUCCESS, response),
  loadUserProfileFailure: () => createAction(UserActionTypes.LOAD_USER_PROFILE_FAILURE),
};

export type UserActions = ActionsUnion<typeof UserActions>
