
import {createSlice} from "@reduxjs/toolkit "

const initialState = {
    fruits : []
}

const fruitsSlice = createSlice ({
    name : "fruits",
    initialState : initialState ,
      reducer : {
        setFruits: (state , action) => {
            state.fruits = [...state.fruits , action.payload];

        }
      }
})

export const {setFruits } = fruitsSlice.action 
export default fruitsSlice.reducer
