import { useCallback, useEffect, useState } from 'react'
import { openWeatherApi } from '../../api/openWeather'
import { useWeatherSearchHistory } from '../../store/weatherSearch/hooks'

const Debug = () => {
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const geoCode = await openWeatherApi.getGeoCode({
          q: 'Chelsea,London',
        })

        const weather = await openWeatherApi.getCurrentWeatherData({
          lat: geoCode[0].lat,
          lon: geoCode[0].lon,
        })

        console.log(weather)
        console.log(geoCode)
      } catch (e: any) {
        console.log(e)
      }
    }

    fetchWeather()
  }, [])

  const [country, setCountry] = useState<string>('')

  const {
    history,
    addToSearchHistory,
    removeFromSearchHistory,
    clearSearchHistory,
  } = useWeatherSearchHistory()

  const handleAddHistory = useCallback(() => {
    addToSearchHistory(country, new Date().getTime())
  }, [country, addToSearchHistory])

  return (
    <div>
      <input
        value={country}
        type="text"
        onChange={(event) => setCountry(event.target.value)}
      />
      <button onClick={handleAddHistory}>Add history</button>

      <button onClick={() => clearSearchHistory()}>Clear all</button>

      {Object.entries(history)
        .sort((hist1, hist2) => hist2[1] - hist1[1])
        .map(([key, value], index) => (
          <div>
            <div>
              {key}: {value}
            </div>
            <button onClick={() => removeFromSearchHistory(key)}>Remove</button>
          </div>
        ))}
    </div>
  )
}

export default Debug
