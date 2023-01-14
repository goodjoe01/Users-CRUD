import { hover } from '@testing-library/user-event/dist/hover'
import React from 'react'
import { User } from '../interfaces/userInterface'

interface props {
  user: User
}

export const UserItem = ({user} : props) => {
  return (
    <div className='card mb-2'>
      <div className="card-content">
        <div className="media-content">
          <p className="title is-size-5">{user.first_name}</p>
          <p className="subtitle is-size-6">{user.last_name}</p>
        </div>
        <div className='buttons'>
          <button className='button is-warning is-light is-normal' >Edit</button>
          <button className='button is-danger is-light is-normal'>Delete</button>
        </div>
      </div>
    </div>
  )
}
