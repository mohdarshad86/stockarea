import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'warehouse',
    initialState: {
        value: [],
    },
    reducers: {
        GET_WH: (state, action) => {
            state.value = action.payload
        },
        ADD_WH: (state, action) => {
            state.value.push(action.payload)
        },
        UPDATE_WH: (state, action) => {
            const updatedWarehouse = action.payload;
            const warehouseIndex = state.value.findIndex((warehouse) => warehouse._id === updatedWarehouse._id);

            if (warehouseIndex !== -1) {
                state.value[warehouseIndex] = updatedWarehouse;
            }
        }
    },
})

export const { GET_WH, ADD_WH, UPDATE_WH } = counterSlice.actions

export default counterSlice.reducer