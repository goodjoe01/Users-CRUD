import {createContext, useReducer} from 'react'
import { User, UserState } from '../interfaces/userInterface';
import { userReducer } from './UserReducer';
import { getUsers, addUser } from '../fetching/userFetch';
import {v4} from 'uuid'

let initialState: UserState = {
   users: [
    {
      id: null,
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
}

interface props {
  children: JSX.Element | JSX.Element[]
}

export const UserContext = createContext<UserContextProps>({} as UserContextProps);

export const UserProvider = ({children} : props) =>{

  /* getData().then((data=>{
    initialState={users: data}
    console.log('initial:')
    console.log(initialState.users);
  })); */

  const [userState, userDispatch] = useReducer(userReducer, initialState);

  const GetUsers = async () =>{
    const users = await getUsers();
    userDispatch({type:'GET_USERS', payload: users})
  }

  const AddUser = (user: User) =>{
    userDispatch({type: 'ADD_USER', user: {...user, id:v4()}})
  }
  
  return (
    <UserContext.Provider value={{userState, GetUsers, AddUser}}>
      {children}
    </UserContext.Provider>
  )
}