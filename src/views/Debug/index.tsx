import { useEffect } from 'react'
import { openWeatherApi } from '../../api/openWeather'

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
  return <>Router Example</>
}

export default Debug
