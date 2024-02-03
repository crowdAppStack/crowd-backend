export interface UserApiResource {
  id: number;
  name: string;
  email: string;
  auth_token: string;
}

export type User = {
  [Property in keyof UserApiResource as Exclude<Property, 'auth_token'>]: UserApiResource[Property];
}