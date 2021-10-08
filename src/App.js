import './App.css';
import React from 'react';
import { useState } from "react"
//components
import Users from './components/Users.js';
import UserDetail from './components/UserDetail.js';
import Chat from './components/Chat.js';

function App() {
  const [newData, setNewData] = useState([])

  const updateData = (data) => {
      const userDataInfo = { 
          id: data.id,
          name: data.name,
          surname:data.surname, 
          age:data.age, 
          gender: data.gender, 
          interests: data.interests
      }
    setNewData([userDataInfo])
    console.log(newData)
 }

  return (
    <div className="App">
      <Users updateData={updateData}/>
      <Chat/>
      <UserDetail userInfo={newData}/>
    </div>
  );
}

export default App;
