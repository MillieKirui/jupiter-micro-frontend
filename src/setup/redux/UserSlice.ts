import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
    name:'user',
    initialState: {
        currentUser: null
    },
    reducers:{
        setCurrentUser: (state, action) =>{
            state.currentUser = action.payload;
        }
    }

})

export const {setCurrentUser} = UserSlice.actions;

export default UserSlice.reducer;