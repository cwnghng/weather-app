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
      const { cityString, timestamp } = action.payload
      state.weatherSearchHistory[cityString] = timestamp
    },
    removeSearchEntry: (state: IWeatherSearchHistoryState, action) => {
      const { cityString } = action.payload
      delete state.weatherSearchHistory[cityString]
    },
    clearSearchEntries: (state: IWeatherSearchHistoryState) => {
      state.weatherSearchHistory = {}
    },
  },
})

export const { addSearchEntry, removeSearchEntry, clearSearchEntries } =
  weatherSearchHistorySlice.actions

export default weatherSearchHistorySlice
