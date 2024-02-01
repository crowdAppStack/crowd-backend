export interface UserApiResource {
  id: number;
  name: string;
  email: string;
  auth_token: string;
}

export interface User {
  name: string;
  email: string;
}