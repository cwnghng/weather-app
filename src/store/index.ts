import { configureStore } from '@reduxjs/toolkit'
import { save, load } from 'redux-localstorage-simple'
import weatherSearchHistorySlice from './weatherSearch/reducer'

// State persistence on browser
const PERSISTED_KEYS: string[] = ['weatherSearchHistory']

// Prepare and configure redux store
export const store = configureStore({
  devTools: process.env.ENVIRONMENT !== 'production',

  reducer: {
    weatherSearchHistory: weatherSearchHistorySlice.reducer,
  },

  // Saving state to local storage
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(save({ states: PERSISTED_KEYS })),

  // Hydrating state
  preloadedState: load({
    states: PERSISTED_KEYS,
  }),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store
