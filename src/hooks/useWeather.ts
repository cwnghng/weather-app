import { useEffect, useState } from 'react'
import { useWeatherSearchHistory } from '../store/weatherSearch/hooks'
import { openWeatherApi } from '../api/openWeather'

const useWeather = () => {
  const {
    history,
    addToSearchHistory,
    removeFromSearchHistory,
    clearSearchHistory,
  } = useWeatherSearchHistory()

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isFetched, setIsFetched] = useState<boolean>(false)
  const [error, setError] = useState<Error | undefined>(undefined)

  // History object as a sorted array
  const [sortedHistory, setSortedHistory] = useState<
    [locationString: string, timestamp: number][]
  >([])

  // Sort redux history object entries by time
  useEffect(() => {
    setSortedHistory(
      Object.entries(history).sort((hist1, hist2) => hist2[1] - hist1[1]),
    )
  }, [history])

  const getGeoData = async (city: string, country: string) => {
    // Fetch geographical data
    const geoData = await openWeatherApi.getGeoData({
      q: `${city},,${country}`,
    })

    if (!geoData[0]) throw Error('Location not found')

    // Extract city, country, latitude and longtitude
    const { name: cityName, country: countryCode, lat, lon } = geoData[0]

    return {
      cityName,
      countryCode,
      lat,
      lon,
    }
  }

  // Generating the weather image url
  const generateImageUrl = (icon: string) => {
    return `https://openweathermap.org/img/wn/${icon}@4x.png`
  }

  /**
   * Fetches the current weather information in the city and country specified from OpenWeatherAPI
   *
   * @param {string} city City name
   * @param {string} country Country name
   * @returns Weather information
   */
  const getWeather = async (city: string, country: string) => {
    try {
      setIsFetched(false)
      setIsLoading(true)
      setError(undefined)

      // Fetch city, country, latitude and longtitude of city
      const { cityName, countryCode, lat, lon } = await getGeoData(
        city,
        country,
      )

      // Fetch weather data from latitude and longitude
      const weatherData = await openWeatherApi.getCurrentWeatherData({
        lat,
        lon,
        units: 'metric',
      })

      // Preparing other variables
      const timestamp = new Date().getTime()
      const imageUrl = generateImageUrl(weatherData.weather[0].icon)

      // Add search history to cache
      addToSearchHistory(`${cityName}, ${countryCode}`, timestamp)

      setIsFetched(true)
      setIsLoading(false)

      return {
        ...weatherData,
        cityName,
        countryCode,
        timestamp,
        imageUrl,
      }
    } catch (e: any) {
      setError(e)
      setIsLoading(false)
    }
  }

  return {
    getWeather,
    history: sortedHistory,
    removeFromSearchHistory,
    clearSearchHistory,
    isLoading,
    isFetched,
    error,
  }
}

export default useWeather
