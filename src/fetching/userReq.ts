import axios from 'axios'
import {Response, User } from '../interfaces/userInterface';

const API = 'http://localhost:3000/data'

export const getUsers = ()=>{
  const data = axios.get<User[]>(API).then((res)=>res.data)
  
  return data;
}

export const addUser = (user: User) =>{
  axios.post(API, user).then(function (response) {console.log('RESPONSE:',response)}).catch(function (error) {console.log(error)})
}

export const deleteUser = (id: string) =>{
  axios.delete(`${API}/${id}`).then(res=>console.log(res));
}

export const updateUser = (user: User) =>{
  axios.put(`${API}/${user.id}`, user)
}

/* export const getUser = async (id: string) => {
  const data = await axios.get<User>(`https://reqres.in/api/users/${id}`);
  return data.data;
} */