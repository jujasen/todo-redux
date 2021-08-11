import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';


const nowSlice = createSlice({
    name: 'now',
    initialState: {
        hours: moment().format('HH'),
        minutes: moment().format('mm'),
        seconds: moment().format('ss'),
        day: moment().format('dddd'),
        dayNum: moment().format('Do'),
        month: moment().format('MMMM')
    },
    reducers: {
        setNow: (state, action) => action.payload
    }
})

export const selectNow = (state) => state.now;

export const { setNow } = nowSlice.actions;

export default nowSlice.reducer;