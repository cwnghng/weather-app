import { useDispatch, useSelector } from 'react-redux'
import {
  addSearchEntry,
  clearSearchEntries,
  removeSearchEntry,
} from './reducer'
import { RootState } from '..'

export const useWeatherSearchHistory = (): {
  history: Record<string, number>
  addToSearchHistory: (locationString: string, timestamp: number) => void
  removeFromSearchHistory: (locationString: string) => void
  clearSearchHistory: () => void
} => {
  const dispatch = useDispatch()

  const history = useSelector<RootState, Record<string, number>>(
    (state) => state?.weatherSearchHistory?.weatherSearchHistory,
  )

  const addToSearchHistory = (
    locationString: string,
    timestamp: number,
  ): void => {
    dispatch(addSearchEntry({ locationString, timestamp }))
  }

  const removeFromSearchHistory = (locationString: string): void => {
    dispatch(removeSearchEntry({ locationString }))
  }

  const clearSearchHistory = (): void => {
    dispatch(clearSearchEntries())
  }

  return {
    history,
    addToSearchHistory,
    removeFromSearchHistory,
    clearSearchHistory,
  }
}
