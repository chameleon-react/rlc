import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    adsId:'',
    adsTitle:'',
    tier:'',
    position:'',
    profilePhoto:'',
    region:'',
    location:'',

}

const tierSlice = createSlice({
  name: 'tier',
  initialState,
  reducers: {
    setAdsTitle:(state,action)=>{state.adsTitle=action.payload},
    setAdsId:(state,action)=>{state.adsId = action.payload},
    setTier:(state,action)=>{state.tier = action.payload},
    setPosition:(state,action)=>{state.position = action.payload},
    setProfilePhoto:(state,action)=>{state.profilePhoto = action.payload},
    setRegion:(state,action)=>{state.region = action.payload},
    setLocation:(state,action)=>{state.location = action.payload},
  }
});

export const {setAdsTitle,setTier,setPosition,setAdsId,setProfilePhoto,setRegion,setLocation} = tierSlice.actions

export default tierSlice.reducer