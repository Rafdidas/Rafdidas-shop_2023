import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
    name : 'user',
    initialState : 'kim'
})

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
    ]
})

export default configureStore({
    reducer:{
        user : user.reducer,
        stock : stock.reducer,
        cartEa : cartEa.reducer
    }
})