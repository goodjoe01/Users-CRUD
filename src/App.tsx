import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserList from './components/UserList';
import { UserProvider } from './context/UserContext';
import './App.css';

function App() {
  return (
    <div className='App-header'>
      <UserProvider>
        <Routes>
          <Route path='/'element={<UserList/>} ></Route>
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
