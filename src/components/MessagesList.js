import { useState } from "react"
import TextInput from './TextInput.js'
// import useToogle from'../hooks/useToogle.js';


function MessageList() {
    const [newMessages, setNewMessages] = useState([])
    const [texts, setText] = useState([])
    const [names, setName] = useState([])


    const handleAddMassedge = ({name, text}) => {
        const newMessage = {
            name,
            text
        }
        setName([...names, newMessage.name]);
        setText([...texts, newMessage.text]);
        setNewMessages([newMessages.push(newMessage)])
        console.log(newMessages);
    };

    return (
        <div className="MassageList">
        Чат
        <div>
            {names.map(name => (
                <div>
                {name}
                </div>
            ))}
            {texts.map(message => (
                <div>
                {message}
                </div>
            ))}
            <TextInput onSubmit = {handleAddMassedge}/>
            </div>
        </div>

    )
}

export default MessageList