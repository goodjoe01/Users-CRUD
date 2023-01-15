import {createContext, useReducer} from 'react'
import { User, UserState } from '../interfaces/userInterface';
import { userReducer } from './UserReducer';
import { getUsers } from '../fetching/userReq';
import {v4} from 'uuid'

let initialState: UserState = {
   users: [
    {
      id: ' ',
      email: '1',
      first_name: '33asas',
      last_name: '4',
      avatar: '5'
    }
  ] 
}

interface UserContextProps {
  userState: UserState
  GetUsers: () => void
  AddUser: (user : User) =>void
  UpdateUsers: (user: User) => void
  DeleteUser: (user : User) => void
}

interface props {
  children: JSX.Element | JSX.Element[]
}

export const UserContext = createContext<UserContextProps>({} as UserContextProps);

export const UserProvider = ({children} : props) =>{

  const [userState, userDispatch] = useReducer(userReducer, initialState);

  const GetUsers = async () =>{
    const users = await getUsers();
    userDispatch({type:'GET_USERS', payload: users})
  }

  const AddUser = (user: User) =>{
    userDispatch({type: 'ADD_USER', user: {...user, id:v4()}})
  }
  
  const DeleteUser = (user: User) =>{
    userDispatch({type:'DELETE_USER', id: user.id as string})
  }

  const UpdateUsers = (user: User) =>{
    userDispatch({type: 'UPDATE_USERS', user})
  }

  return (
    <UserContext.Provider value={{userState, GetUsers, AddUser, DeleteUser, UpdateUsers}}>
      {children}
    </UserContext.Provider>
  )
}