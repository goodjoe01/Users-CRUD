import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import { UserProvider } from './context/UserContext';
import './App.css';

function App() {
  return (
    <div className='App-header'>
      <UserProvider>
        <Routes>
          <Route path='/'element={<UserList/>} ></Route>
          <Route path='/edit/:id' element={<UserForm/>}></Route>
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
