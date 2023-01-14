export interface User {
  id: string | null,
  email: string,
  first_name: string,
  last_name: string,
  avatar: string
}

export interface Response {
  data: User[]
}

export interface UserState {
  users: User[]
}