import { useState } from "react"
import TextInput from './TextInput.js'
// import PropTypes from 'prop-types'
// import useToogle from'../hooks/useToogle.js';


function MessageList() {
    
    const [newMessages, setNewMessages] = useState([]);
    
    const handleAddMessage = ({name, text}) => {
        const newMessage = {
            name: name,
            text: text,
        }
        setNewMessages([...newMessages, newMessage])
    };
    
    return (
        <div className="MessagesContent">
        
        <div className="MessagesList">
        <div className="TitleChat">Чат</div>
            {newMessages.map(el => (
                <div>
                    <small>{el.name}</small>
                    <p>{el.text}</p>
                </div>
            ))}
            </div>
            <TextInput onSubmit = {handleAddMessage}/>
        </div>

    )
}

export default MessageList