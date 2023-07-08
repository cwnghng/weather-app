import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import useWeather from '../../hooks/useWeather'
import HorizontalDivider from '../../components/HorizontalDivider'
import SearchForm from './components/SearchForm'
import DetailCard from './components/DetailCard'
import HistoryList from './components/HistoryList'
import SectionHeader from './components/SectionHeader'

const WeatherApp: React.FC = () => {
  const [weather, setWeather] = useState<any>()
  const [error, setError] = useState<string>('')

  // State for controlling loading spinnar
  const [isFetched, setIsFetched] = useState<boolean>(false)

  const { history, getWeather, removeFromSearchHistory, clearSearchHistory } =
    useWeather()

  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting, isValid },
  } = useForm()

  const resetForm = useCallback(() => {
    reset()
    setError('')
  }, [reset])

  const onSubmitWeatherForm = useCallback(
    async (data: any) => {
      try {
        // Setting to null to reveal loading spinner
        setWeather(null)

        setWeather(await getWeather(data.city, data.country))

        resetForm()
        setIsFetched(true)
      } catch (e: any) {
        setError(e.message)
      }
    },
    [getWeather, resetForm],
  )

  // To getWeather from history list
  const handleSearchAgain = (locationString: string) => {
    setWeather(null)

    const [city, country] = locationString.split(', ')
    onSubmitWeatherForm({
      city,
      country,
    })

    setIsFetched(true)

    // Scroll to top when fetched to view new data
    window.scrollTo(0, 0)
  }

  return (
    <div className="max-w-screen-lg mx-auto transition-all">
      <SectionHeader title="Today's Weather" />

      <HorizontalDivider />

      <SearchForm
        onSubmit={handleSubmit(onSubmitWeatherForm)}
        register={register}
        error={error}
        reset={reset}
        disabled={!isValid || isSubmitting}
      />

      <HorizontalDivider />

      <DetailCard weather={weather} isFetchedBefore={isFetched} />

      <HistoryList
        history={history}
        handleSearchAgain={handleSearchAgain}
        removeFromSearchHistory={removeFromSearchHistory}
        clearSearchHistory={clearSearchHistory}
      />
    </div>
  )
}

export default WeatherApp
