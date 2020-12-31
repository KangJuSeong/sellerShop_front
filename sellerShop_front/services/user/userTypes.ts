export interface UserState {
  isInitialized: boolean;
  isFetching: boolean;
  profile?: UserProfile;
  token?: string;
  profileIsUpdating: boolean;
  profileUpdateSuccess: boolean;
  resetPasswordEmailIsCreating: boolean;
  resetPasswordEmailCreateSuccess: boolean | null;
  resetPasswordIsProgress: boolean;
  resetPasswordSuccess: boolean | null;
}

export interface UserProfile {
  pk: number;
  name: string;
  email: string;
  phone: Phone | null;
  photo?: string;
  email_confirmed: boolean;
}


export interface UserProfileResponse {
  status_code: number;
  error: boolean;
  message: string;
  data: {
    pk: number;
    email: string;
    name: string;
    phone: Phone;
    email_confirmed: boolean;
  };
}


export interface Phone {
  number: string;
  is_confirmed: boolean;
  updated_at: string;
}