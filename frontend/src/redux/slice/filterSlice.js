import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    price:'',
    nationality:'',
    language:'',
    adsTitle:'',
    location:'',
    service:'',
    heightFrom:'',
    heightTo:'',
    WeightFrom:'',
    WeightTo:'',
    ageFrom:'',
    ageTo:'',
    eye:'',
    hair:'',
    measurement:''
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setPrice:(state,action)=>{
        state.price = action.payload
    },
    setNationality:(state,action)=>{
        state.nationality = action.payload
    },
    setLanguage:(state,action)=>{
        state.language = action.payload
    },
    setAdsTitle:(state,action)=>{
      state.adsTitle = action.payload
    },
    setLocation:(state,action)=>{
      state.location = action.payload
    },
    
  }
});

export const {setPrice,setNationality,setLanguage} = filterSlice.actions

export default filterSlice.reducer