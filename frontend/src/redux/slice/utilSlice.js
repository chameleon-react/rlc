import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    disable: true,
    error: 'Somthing is error',
    menuSelector: 1,
    showSidebar: true,
    verificationCount:0
}

const utilSlice = createSlice({
    name: 'util',
    initialState,
    reducers: {
        setDisable: (state, action) => { state.disable = true },
        setAllow: (state, action) => { state.disable = false },
        setError: (state, action) => { state.error = action.payload },
        setMenuSelector: (state, action) => { state.menuSelector = action.payload },
        showSidebar: (state, action) => { state.showSidebar = true },
        hideSidebar: (state, action) => { state.showSidebar = false },
        setVerificationCount:(state,action) =>{state.verificationCount = action.payload}
        
    }
});

export const { setDisable, setAllow, setError, setMenuSelector, showSidebar, hideSidebar, SetLanguage, setVerificationCount } = utilSlice.actions

export default utilSlice.reducer