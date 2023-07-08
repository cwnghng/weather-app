import Axios from 'axios'
import { loOmitEmpty } from '../utils/loUtil'
import { handleResponseError } from './handler'

const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/weather'
const GEOCODE_API_URL = 'http://api.openweathermap.org/geo/1.0/direct'

const { REACT_APP_OPEN_WEATHER_API_KEY } = process.env

export const openWeatherApi = {
  getCurrentWeatherData: async (body: {
    lat: number // Latitude coordinates
    lon: number // Longitude coordinates
    units?: string // Units of measurements
    lang?: string // Language
  }) => {
    try {
      const params = loOmitEmpty(body)

      const weatherData = await Axios.get(WEATHER_API_URL, {
        params: {
          ...params,
          appid: REACT_APP_OPEN_WEATHER_API_KEY,
        },
      })

      return weatherData.data
    } catch (e: any) {
      handleResponseError(e)
    }
  },

  getGeoCode: async (body: {
    q: string // City name, state code (only for the US) and ISO3166 country code divided by comma.
    limit?: number // Number of the locations in the API response
  }) => {
    try {
      const params = loOmitEmpty(body)

      const geoCodeData = await Axios.get(GEOCODE_API_URL, {
        params: {
          ...params,
          appid: REACT_APP_OPEN_WEATHER_API_KEY,
        },
      })

      return geoCodeData.data
    } catch (e: any) {
      handleResponseError(e)
    }
  },
}
