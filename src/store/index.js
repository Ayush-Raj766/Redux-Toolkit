// import { createStore } from "redux";
import {configureStore} from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit";
import Privecy from "../component/Privecy";
// const INITIAL_VALUE ={
//     counter: 0,
//     privacy :false
// }

const counterSlice = createSlice({
    name:"counter",
    initialState:{ counterval: 0},
    reducers :{
        increment:(state)=>{
            state.counterval++
        },
        decrement:(state , action)=>{
            state.counterval--
        },
        add:(state ,action )=>{
            state.counterval = state.counterval + Number(action.payload.num)
        },
        substract:(state , action)=>{
            state.counterval = state.counterval - Number(action.payload.num)
        }
    }
})
const privacySlice = createSlice({
    name: "privacy",
    initialState:false,
    reducers:{
        privacy :(state)=>{
           return state =!state;
        }
    }
})

// const counterReducer =(store = INITIAL_VALUE ,action)=>{
//    let newstore = store
//     if(action.type==="INCREMENT"){
//         newstore={...store ,counter : store.counter +1 } 
//     }
//     else if(action.type==="DECREMENT"){
//         newstore={...store ,counter : store.counter -1 }
//     }
//     else if(action.type==="ADD"){
//         newstore={...store, counter : store.counter + Number(action.payload.num) }
//     }
//     else if(action.type==="SUBSTRACT"){
//         newstore={...store,counter : store.counter - Number(action.payload.num) }
//     }
//     else if(action.type==="PRIVATE"){
//         newstore= {...store, privacy: !store.privacy }
//     }
//     return newstore;
// }
const countstore = configureStore({ reducer: {
    counter : counterSlice.reducer,
    privacy: privacySlice.reducer
}})
export const counterAction = counterSlice.actions;
export const  privacyAction =privacySlice.actions;
export default countstore;