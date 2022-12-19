import { configureStore, combineReducers } from '@reduxjs/toolkit'

//slices
import adminSlice from './slice/adminSlice';
import userSlice from './slice/userSlice';
import questionSlice from './slice/questionSlice';
import adsSlice from './slice/adsSlice';
import utilSlice from './slice/utilSlice';
// import filterSlice from './slice/filterSlice';
import tierSlice from './slice/tierSlice';


import storage from 'redux-persist/lib/storage'
import {persistReducer} from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage
}

const rootReducer = combineReducers({
    user: userSlice,
    admin: adminSlice,
    question: questionSlice,
    ads: adsSlice,
    util: utilSlice,
    // filter:filterSlice,
    tier: tierSlice
})

const persistedReducer = persistReducer(persistConfig,rootReducer)

const store = configureStore(({
    reducer: persistedReducer
}))

export default store;