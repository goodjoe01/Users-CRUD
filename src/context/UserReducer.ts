import { UserState, User } from "../interfaces/userInterface"; 
import { addUser } from "../fetching/userFetch";

type UserAction =
  | {type:'GET_USERS', payload:User[]}
  | {type:'GET_USER', id: string}
  | {type: 'DELETE_USER', id:string}
  | {type: 'ADD_USER', user: User}

export const userReducer = (state: UserState, action: UserAction): UserState =>{
  switch (action.type) {
    case 'GET_USERS':
      
      return {
        ...state,
        users: [...action.payload]
      }
    case 'ADD_USER':
      addUser(action.user)
      return {
        users: [...state.users, action.user]
      }
    default:
      console.log('Hola')
      return state;
  }
}