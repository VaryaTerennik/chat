import React from 'react';
// import { useState } from "react"
import MessagesList from './MessagesList.js';
import { useParams } from "react-router-dom";

function Chat() {

    const { userId } = useParams()
    console.log(userId)
   
   return (
       <div className="Chat">
            <MessagesList userId={userId}/>
       </div>
   );
};
export default Chat;