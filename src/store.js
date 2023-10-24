import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from './store/userSlice'


let stock = createSlice({
    name : 'stock',
    initialState : [10,11,12]
})

let cartEa = createSlice({
    name : 'cartEa',
    initialState : [
        {id : 0, name : 'White and Black', count : 2},
        {id : 1, name : 'Red Knit', count : 3},
        {id : 2, name : 'Grey Yordan', count : 1}
    ],
    reducers: {
        changeCount(state, action){
            state[action.payload].count += 1;
        },
        addProduct(state, action){
            
            state.push(action.payload);
        }
    }
})

export let { changeCount, addProduct } = cartEa.actions

export default configureStore({
    reducer:{
        user : user.reducer,
        stock : stock.reducer,
        cartEa : cartEa.reducer
    }
})