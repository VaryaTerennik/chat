import './App.css';
import React from 'react';
import { useState } from "react"
import Users from './components/Users.js';
import UserDetail from './components/UserDetail.js';
import Chat from './components/Chat.js';
import {
  BrowserRouter,
  Route,
} from "react-router-dom";

function App() {
//   const [newData, setNewData] = useState([])

//   const updateData = (data) => {
//       const userDataInfo = { 
//           id: data.id,
//           name: data.name,
//           surname:data.surname, 
//           age:data.age, 
//           gender: data.gender, 
//           interests: data.interests
//       }
//     setNewData([userDataInfo])
//  }

  return (
    <BrowserRouter>
      <Route path ="/">
        <div className="App">
        <Route path ="/:users?/:userId?">
            <Users/>
         </Route>
         <Route path ="/:users?/:userId?">
            <Chat/>
          </Route>
          <Route path ="/:users?/:userId?">
            <UserDetail/>
          </Route>
        </div>
      </Route>
    </BrowserRouter>
  );
}

export default App;
