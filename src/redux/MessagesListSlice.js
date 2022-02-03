import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  chats: 
    {
        0: { messages: []}
    }
  
}

export const  MessagesListSlice = createSlice({
  name: 'messageslist',
  initialState,
  reducers: {
    addMessage: (state, action) => {
        const {userId, text} = action.payload
        const messages = state.chats[userId]?.messages || []
        const newMessage = {
          id: messages.length, 
          text: text
        }
        if(!state.chats[userId]) {
            state.chats[userId] = {
                messages: [newMessage]
            }
        } else {
        state.chats[userId].messages = [...messages, newMessage]
        }
      },  
  },
})

// Action creators are generated for each case reducer function
export const { addMessage } = MessagesListSlice.actions

export const messageChatSelector = userId => state => (state.messageslist.chats[userId]?.messages || [])

export default MessagesListSlice.reducer