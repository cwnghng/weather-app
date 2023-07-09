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

  const {
    history,
    getWeather,
    removeFromSearchHistory,
    clearSearchHistory,
    isLoading,
    isFetched,
    error,
  } = useWeather()

  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting, isValid },
  } = useForm()

  const onSubmitWeatherForm = useCallback(
    async (data: any) => {
      setWeather(await getWeather(data.city, data.country))
      reset()
    },
    [getWeather, reset],
  )

  // Call getWeather using historic locationString
  const handleSearchAgain = useCallback(
    (locationString: string) => {
      const [city, country] = locationString.split(', ')
      onSubmitWeatherForm({
        city,
        country,
      })

      // Scroll to top when fetched to view new data
      window.scrollTo(0, 0)
    },
    [onSubmitWeatherForm],
  )

  return (
    <main className="max-w-screen-lg mx-auto transition-all border-x border-slate-300 min-h-screen h-full">
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

      {((isFetched && !isLoading) || (!isFetched && isLoading)) && (
        <DetailCard weather={weather} isLoading={isLoading} />
      )}

      <HistoryList
        history={history}
        handleSearchAgain={handleSearchAgain}
        removeFromSearchHistory={removeFromSearchHistory}
        clearSearchHistory={clearSearchHistory}
      />
    </main>
  )
}

export default WeatherApp
