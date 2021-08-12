import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchWeather } from './fetchWeather';

// export const getWeather = createAsyncThunk(
//     'weather/getWeather',
//     ({ lat, lon }) => fetchWeather(lat, lon)
// )

export const getWeather = createAsyncThunk(
    'weather/getWeather',
    async(location) => {
        const response = await fetchWeather(location);
        return response;
    }
)

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        lat: '',
        lon: '',
        loading: true,
        error: false
    },
    reducers: {
        setLocation: (state, action) => {
            state.lat = action.payload.lat;
            state.lon = action.payload.lon
        }
    },
    extraReducers: {
        [getWeather.pending]: (state) => {
            state.loading = true;
        },
        [getWeather.fulfilled]: (state, action) => {
            return {
                ...action.payload,
                loading: false,
                error: false,
                lat: state.lat,
                lon: state.lon
            }
        },
        [getWeather.rejected]: (state) => {
            state.loading = false;
            state.error = true;
        }
    }
})

export const selectWeather = (state) => state.weather;

export const { setLocation } = weatherSlice.actions;

export default weatherSlice.reducer;