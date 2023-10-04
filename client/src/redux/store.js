import { configureStore } from '@reduxjs/toolkit';
import warehouseReducer from './reducer';

export default configureStore({
    reducer: {
        warehouse: warehouseReducer,
    },
});
