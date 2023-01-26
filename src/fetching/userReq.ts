import axios from 'axios'
import {Response, User } from '../interfaces/userInterface';

const API = 'http://localhost:3000/data'

export const getUsers = ()=>{
  const data = axios.get<User[]>(API).then((res)=>res.data)
  
  return data;
}

export const addUser = async (user: User) =>{
  await axios.post(API, user);
}

export const deleteUser = async (id: string) =>{
  await axios.delete(`${API}/${id}`);
}

export const updateUser = async (user: User) =>{
  await axios.put(`${API}/${user.id}`, user)
}

/* export const getUser = async (id: string) => {
  const data = await axios.get<User>(`https://reqres.in/api/users/${id}`);
  return data.data;
} */