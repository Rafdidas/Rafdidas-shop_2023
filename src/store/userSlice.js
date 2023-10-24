import { createSlice } from "@reduxjs/toolkit";

let user = createSlice({
    name : 'user',
    initialState : {name :'kim', age : 30},
    reducers: {
        increase(state, action){
            state.age += action.payload;
        },
    }
})
export let { increase } = user.actions

export default user