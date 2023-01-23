import React, { useEffect, useContext} from 'react'
import { UserContext } from '../context/UserContext';
import { Link } from 'react-router-dom';
import { UserItem } from './UserItem';

const UserList = () => {

  const {userState, GetUsers} = useContext(UserContext);
    
  useEffect(()=>{
    GetUsers();
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <Link to={'/add'} >
        <button>Add User</button>
      </Link>
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