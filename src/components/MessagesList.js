import { useState } from "react"
import TextInput from './TextInput.js'
import { useSelector, useDispatch } from 'react-redux'
import { addMessage } from '../redux/MessagesListSlice'
import { messageChatSelector } from '../redux/MessagesListSlice'


function MessageList({userId}) {

    const messages = useSelector(messageChatSelector(userId))
    console.log(userId)
    const dispatch = useDispatch()
    
    // const [newMessages, setNewMessages] = useState([]);
    
    const handleAddMessage = (data) => {
        // const newMessage = {
        //     name: name,
        //     text: text,
        // }
        // setNewMessages([...newMessages, newMessage])

        dispatch(addMessage({userId, text: data.text}))
    };
    
    return (
        <div className="MessagesContent">
        
        <div className="MessagesList">
        <div className="TitleChat">Чат</div>
            {messages.map(el => (
                <div key={el.id}>
                    {el.text}
                </div>
            ))}
            </div>
            <TextInput onSubmit = {handleAddMessage}/>
        </div>

    )
}

export default MessageList