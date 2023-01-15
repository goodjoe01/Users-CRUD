import React, {useState, useEffect, useContext} from 'react'
import { getUsers } from '../fetching/userReq';
import { Response, User } from '../interfaces/userInterface';
import { UserContext } from '../context/UserContext';
import { UserItem } from './UserItem';

const UserList = () => {

  const {userState, GetUsers, AddUser} = useContext(UserContext);
  const userTest = {
    id: '30',
    email: 'test@gmail.com',
    first_name: 'Test',
    last_name: 'Test',
    avatar: 'Test.jpg'
  }
    
  useEffect(()=>{
    GetUsers();
  }, []);

  console.log(userState.users);
  return (
    <div>
      <h1>User List</h1>
      <button onClick={()=>AddUser(userTest)}>Add User</button>
       <div>
        {         
          userState.users?.map((user)=>(
            <UserItem user={user} key={user.id} />
          ))
        } 
      </div>
    </div>
  )
}

export default UserList;