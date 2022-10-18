import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    questionNo: 1,
    totalQuestion: 10
}

const questions = createSlice({
    name: 'question',
    initialState,
    reducers: {
        next: (state, action) => {
            state.questionNo = state.questionNo + 1
        },
        back: (state, action) => {
            state.questionNo = state.questionNo - 1
        }
    }
});

export const { next, back } = questions.actions
export default questions.reducer