import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from './store/userSlice'

let stock = createSlice({
    name : 'stock',
    initialState : [10,11,12]
})

let cartEa = createSlice({
    name : 'cartEa',
    initialState : [
        {id : 2, name : 'White and Black', count : 2},
        {id : 4, name : 'Red Knit', count : 3},
        {id : 5, name : 'Grey Yordan', count : 1}
    ],
    reducers: {
        changeCount(state, action){
            let idNum = state.findIndex((a)=>{
                return a.id === action.payload
            })
            state[idNum].count++;
        },
        addProduct(state, action){
            let productToAdd = action.payload;
            let existingProduct = state.find((product)=>{
                return product.id === productToAdd.id;
            })
            if(existingProduct){
                existingProduct.count++;
            } else {
                state.push(productToAdd);
            }
        },
        removeProduct(state, action){
            let idNum = state.findIndex((a)=>{
                return a.id === action.payload
            })
            state.splice(idNum,1)
        }
    }
})

export let { changeCount, addProduct, removeProduct } = cartEa.actions

export default configureStore({
    reducer:{
        user : user.reducer,
        stock : stock.reducer,
        cartEa : cartEa.reducer
    }
})