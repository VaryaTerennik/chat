import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [
    {
        id: 0,
        name: 'Ваня',
        surname: "", 
        age: "", 
        gender: "", 
        interests: ""
    },
    {
        id: 1,
        name: 'Саша',
        surname: "", 
        age: "", 
        gender: "", 
        interests: ""
    },

],
}

export const  UsersListSlice = createSlice({
  name: 'userslist',
  initialState,
  reducers: {
    addNewUsers: (state, action) => {
        const id = state.value.length;
        const {name, surname, age, gender, interests} = action.payload
        const newUser = {
          id : id,
          name: name,
          surname: surname,
          age:age,
          gender: gender,
          interests: interests
        }
        state.value.push(newUser)
      },  
  },
})

export const { addNewUsers } = UsersListSlice.actions

export default UsersListSlice.reducer