import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  username: '',
  password: '',
  email: '',
  isLogin: false,
  profilePhoto:''
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload
    },
    setPassword: (state, action) => {
      state.password = action.payload
    },
    setIsLogin: (state, action) => {
      state.isLogin = action.payload
    },
    setEmail: (state, action) => {
      state.email = action.payload
    },
    setProfilePhoto:(state,action)=>{
      state.profilePhoto = action.payload
    }
    
  }
});

export const { setIsLogin, setPassword, setUsername, setEmail,setProfilePhoto } = userSlice.actions

export default userSlice.reducer