import './App.css';
import React from 'react';
//components
import Users from './components/Users.js';
import UserDetail from './components/UserDetail.js';
import Chat from './components/Chat.js';
import MessagesList from './components/MessagesList.js';

function App() {
  return (
    <div className="App">
      <Users/>
      <UserDetail/>
      <MessagesList/>
      <Chat/>
    </div>
  );
}

export default App;
