import { createSlice } from '@reduxjs/toolkit'

const initialState = {

  isLogin: false
}

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {

    setIsLogin: (state, action) => {
      state.isLogin = action.payload
    }
  }
});

export const { setIsLogin } = adminSlice.actions

export default adminSlice.reducer