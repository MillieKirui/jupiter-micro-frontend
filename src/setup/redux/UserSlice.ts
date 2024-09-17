import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    currentUser: {AuthModel} | null;
}

const initialState: UserState = {
    currentUser: null,
};

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser: (state, action: PayloadAction<UserState['currentUser']>) => {
            state.currentUser = action.payload;
        },
        clearCurrentUser: (state) => {
            state.currentUser = null;
        }
    }
});

export const { setCurrentUser, clearCurrentUser } = UserSlice.actions;
export default UserSlice.reducer;