import { createSlice } from '@reduxjs/toolkit'

interface IWeatherSearchHistoryState {
  weatherSearchHistory: Record<string, number>
}

const initialState: IWeatherSearchHistoryState = {
  weatherSearchHistory: {},
}

const weatherSearchHistorySlice = createSlice({
  name: 'weatherSearchHistory',
  initialState,
  reducers: {
    addSearchEntry: (state: IWeatherSearchHistoryState, action) => {
      const { locationString, timestamp } = action.payload
      state.weatherSearchHistory[locationString] = timestamp
    },
    removeSearchEntry: (state: IWeatherSearchHistoryState, action) => {
      const { locationString } = action.payload
      delete state.weatherSearchHistory[locationString]
    },
    clearSearchEntries: (state: IWeatherSearchHistoryState) => {
      state.weatherSearchHistory = {}
    },
  },
})

export const { addSearchEntry, removeSearchEntry, clearSearchEntries } =
  weatherSearchHistorySlice.actions

export default weatherSearchHistorySlice
