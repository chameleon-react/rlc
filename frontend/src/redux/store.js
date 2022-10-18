import { configureStore } from '@reduxjs/toolkit'
import adminSlice from './slice/adminSlice';
import userSlice from './slice/userSlice';

import questionSlice from './slice/questionSlice';
import adsSlice from './slice/adsSlice';
import utilSlice from './slice/utilSlice';
// import filterSlice from './slice/filterSlice';
import tierSlice from './slice/tierSlice';

const store = configureStore(({
    reducer: {
        user: userSlice,
        admin: adminSlice,
        question: questionSlice,
        ads: adsSlice,
        util: utilSlice,
        // filter:filterSlice,
        tier:tierSlice
    }
}))

export default store;