import { UserState, User } from "../interfaces/userInterface"; 
import { addUser, deleteUser, updateUser } from "../fetching/userReq";

type UserAction =
  | {type:'GET_USERS', payload:User[]}
  | {type:'GET_USER', id: string}
  | {type: 'DELETE_USER', id:string}
  | {type: 'ADD_USER', user: User}
  | {type: 'UPDATE_USERS', user: User}

export const userReducer = (state: UserState, action: UserAction): UserState =>{
  switch (action.type) {
    case 'GET_USERS':
            return {
        ...state,
        users: [...action.payload]
      }
    case 'ADD_USER':
      addUser(action.user);
      return {
        users: [...state.users, action.user]
      }
    case 'DELETE_USER':
      deleteUser(action.id);
      return {
        users: state.users.filter(user => user.id !== action.id)
      }
    case 'UPDATE_USERS':
      updateUser(action.user)
      return {
        users: state.users
      }
    default:
      console.log('Hola hay un error')
      return state;
  }
}