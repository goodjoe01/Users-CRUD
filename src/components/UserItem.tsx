import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import { User } from '../interfaces/userInterface'

interface props {
  user: User
}

export const UserItem = ({user} : props) => {

  const {DeleteUser} = useContext(UserContext);

  return (
    <div className='flex items-center justify-between px-5 py-4 bg-white border border-gray-200 rounded-lg shadow'>
      <div className='flex-1 w-64'>
        <h5 className='text-2xl font-black'>{user.first_name}</h5>
        <p className='text-lg '>{user.last_name}</p>
      </div>
      <div className=''>
        <Link to={`/edit/${user.id}`}>
          <button className='mx-2 rounded-sm px-3 py-2 text-editTxt bg-editBtn'>Edit</button>
        </Link>
        <button onClick={()=>{DeleteUser(user)}} className='mx-2 rounded-sm px-3 py-2 text-deleteTxt bg-deleteBtn'>Delete</button>
      </div>
    </div>
  )
}
