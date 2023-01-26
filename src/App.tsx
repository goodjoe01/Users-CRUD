import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import { Login } from './components/Login';
import { UserProvider } from './context/UserContext';
import './styles/tailwind.css';

function App() {
  return (
    <div className='w-10/12 font-andika md:w-11/12 mx-auto'>
      <UserProvider>
        <Routes>
          <Route path='/'element={<UserList/>} ></Route>
          <Route path='/edit/:id' element={<UserForm/>}></Route>
          <Route path='/add' element={<UserForm/>}></Route>
          <Route path='/login' element={<Login/>} >  </Route>
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
