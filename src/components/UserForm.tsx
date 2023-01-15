import React, { useState, useEffect, useContext} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import {FcUpload} from 'react-icons/fc'
import { User } from '../interfaces/userInterface';
import { UserContext } from '../context/UserContext';
import Input from './Input';

const File = () =>(
  <div className="file has-name is-right">
    <label className="file-label">
      <input className="file-input" type="file" name="resume"/>
      <span className="file-cta">
        <span className="file-icon">
          <FcUpload/>
        </span>
        <span className="file-label">
          Choose a file…
        </span>
      </span>
      <span className="file-name">
        Screen Shot 2017-07-29 at 15.54.25.png
      </span>
    </label>
  </div>
)

const UserForm = () => {

  const initialUser: User= {
    id: '',
    email: '',
    first_name: '',
    last_name: '',
    avatar: ''
  }

  const {userState} = useContext(UserContext);
  const params = useParams();
  const [user, setUser] = useState<User>(initialUser);
  const navigate = useNavigate();

  useEffect(()=>{     
    console.log('param:',params.id);
    console.log('userState.users:',userState.users);
    const userFound = userState.users.find(user => user.id === params.id);

    if(userFound) {
      setUser(userFound);
    }
    console.log(userFound)
  }, [userState.users, params.id])



  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({...user, [e.target.name]: e.target.value})
  }

/*   const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    navigate('/');
  } */

  return (
    <div className='card'>
      <div className="card-content">
        <form action="">
          <Input name='first_name' label='First Name' pHolder='first name' value={user.first_name} onChange={handleOnChange} />
          <Input name='last_name' label='Last Name' pHolder='last name' value={user.last_name} onChange={handleOnChange} />
          <Input name='email' label='E-mail' pHolder='e-mail' value={user.email} onChange={handleOnChange} />
          <File/>
          <button>Update Task</button>
        </form>

      </div>
    </div>
  )
}

export default UserForm
