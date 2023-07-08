import { useDispatch, useSelector } from 'react-redux'
import {
  addSearchEntry,
  clearSearchEntries,
  removeSearchEntry,
} from './reducer'
import { RootState } from '..'

export const useWeatherSearchHistory = (): {
  history: Record<string, number>
  addToSearchHistory: (cityString: string, timestamp: number) => void
  removeFromSearchHistory: (cityString: string) => void
  clearSearchHistory: () => void
} => {
  const dispatch = useDispatch()

  const history = useSelector<RootState, Record<string, number>>(
    (state) => state?.weatherSearchHistory?.weatherSearchHistory,
  )

  const addToSearchHistory = (cityString: string, timestamp: number): void => {
    dispatch(addSearchEntry({ cityString, timestamp }))
  }

  const removeFromSearchHistory = (cityString: string): void => {
    dispatch(removeSearchEntry({ cityString }))
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
