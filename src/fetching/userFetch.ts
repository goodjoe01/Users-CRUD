import axios from 'axios'
import {Response, User } from '../interfaces/userInterface';

export const getUsers = ()=>{
  const data = axios.get<Response>('https://reqres.in/api/users').then((res)=>res.data.data);

/*   console.log(data) */
  return data;
}

export const addUser = (user: User) =>{
  axios.post('https://reqres.in/api/users', user).then(function (response) {console.log(response)}).catch(function (error) {console.log(error)})
}

export const deleteUser = (id: string) =>{
  axios.delete(`https://reqres.in/api/users/${id}`).then(res=>console.log(res));
}