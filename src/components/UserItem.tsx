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
    <div className='card mb-2'>
      <div className="card-content">
        <div className="media-content">
          <p className="title is-size-5">{user.first_name}</p>
          <p className="subtitle is-size-6">{user.last_name}</p>
        </div>
        <div className='buttons'>
          <Link to={`/edit/${user.id}`}>
            <button className='button is-warning is-light is-normal'>Edit</button>
          </Link>
          <button onClick={()=>{DeleteUser(user)}} className='button is-danger is-light is-normal'>Delete</button>
        </div>
      </div>
    </div>
  )
}
