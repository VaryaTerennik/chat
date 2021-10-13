import { configureStore } from '@reduxjs/toolkit'
import userslistsliceReducer from './UsersListSlice'
import messageslistsliceReducer from './MessagesListSlice'

const store = configureStore({
    reducer: {
      userslist: userslistsliceReducer,
      messageslist: messageslistsliceReducer
    },
  })

export default store