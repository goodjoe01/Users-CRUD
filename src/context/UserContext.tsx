import {createContext, useReducer} from 'react'
import { User, UserState } from '../interfaces/userInterface';
import { userReducer } from './UserReducer';
import { addUser, deleteUser, getUsers, updateUser } from '../fetching/userReq';
import {v4} from 'uuid'

let initialState: UserState = {
   users: [
    {
      id: '',
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
  UpdateUser: (user: User) => void
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
    console.log('users',users)
    userDispatch({type:'GET_USERS', payload: users})
  }

  const AddUser = async (user: User) =>{
    await addUser(user)
    userDispatch({type: 'ADD_USER', user: {...user, id:v4()}})
  }
  
  const DeleteUser = async (user: User) =>{
    await deleteUser(user.id);
    userDispatch({type:'DELETE_USER', id: user.id})
  }

  const UpdateUser = async (user: User) =>{
    await updateUser(user)
    userDispatch({type: 'UPDATE_USERS', user})
  }

  return (
    <UserContext.Provider value={{userState, GetUsers, AddUser, DeleteUser, UpdateUser}}>
      {children}
    </UserContext.Provider>
  )
}