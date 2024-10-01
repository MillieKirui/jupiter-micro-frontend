import { createSlice } from "@reduxjs/toolkit";

export const LoanSlice = createSlice({
    name :'loan',
    initialState:{
        pendingLoans:0,
        approvedLoan:0

    },
    reducers:{
        setPendingLoans:(state,action)=>{
            state.pendingLoans= action.payload
        }
    }
})
export const {setPendingLoans} = LoanSlice.actions;
export default LoanSlice.reducer;