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

  const [sortedHistory, setSortedHistory] = useState<
    [locationString: string, timestamp: number][]
  >([])

  // Sort redux history object entries by time
  useEffect(() => {
    setSortedHistory(
      Object.entries(history).sort((hist1, hist2) => hist2[1] - hist1[1]),
    )
  }, [history])

  const getLocationCoord = async (city: string, country: string) => {
    // Fetch geographical data
    const geoData = await openWeatherApi.getGeoData({
      q: `${city},,${country}`,
    })

    // Extract latitude and longtitude
    const { lat, lon } = geoData[0]

    return { lat, lon }
  }

  const getWeather = async (city: string, country: string) => {
    try {
      // Fetch latitude and longtitude of city
      const { lat, lon } = await getLocationCoord(city, country)

      // Fetch weather data from latitude and longitude
      const weatherData = await openWeatherApi.getCurrentWeatherData({
        lat,
        lon,
      })

      // Add search history to cache
      addToSearchHistory(
        `${weatherData.name}, ${weatherData.sys.country}`,
        new Date().getTime(),
      )

      return weatherData
    } catch (e: any) {
      console.log(e)
    }
  }

  return {
    getWeather,
    history: sortedHistory,
    removeFromSearchHistory,
    clearSearchHistory,
  }
}

export default useWeather
