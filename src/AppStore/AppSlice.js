import { createSlice } from "@reduxjs/toolkit";

const AppSlice = createSlice({
    name:'AppSlice',
    initialState:{
        isNavPageVisible: true,
    },
    reducers:{
        getNavPageVisiblity:(state,action) => {
            state.isNavPageVisible = action.payload;
        }
    }
})


export const {getNavPageVisiblity} = AppSlice.actions;
export default AppSlice.reducer;