import Axios from 'axios'
import { loOmitEmpty } from '../utils/loUtil'
import { handleResponseError } from './handler'

const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/weather'
const GEOCODE_API_URL = 'http://api.openweathermap.org/geo/1.0/direct'

const { REACT_APP_OPEN_WEATHER_API_KEY } = process.env

export type TWeatherData = {
  coord: {
    lon: number
    lat: number
  }

  weather: {
    id: number
    main: string // Main weather
    description: string // Description of current weather
    icon: string // Icon image name
  }[]

  base: string

  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
  }

  visibility: number

  wind: {
    speed: number
    deg: number
  }

  clouds: {
    all: number
  }

  dt: number

  sys: {
    type: number
    id: number
    country: string
    sunrise: number
    sunset: number
  }

  timezone: number
  id: number
  name: string
  cod: number
}

export type TGeoCodeData = {
  name: string
  local_names: Record<string, string>
  lat: number
  lon: number
  country: string
  state: string
}

export const openWeatherApi = {
  getCurrentWeatherData: async (body: {
    lat: number // Latitude coordinates
    lon: number // Longitude coordinates
    units?: string // Units of measurements
    lang?: string // Language
  }): Promise<TWeatherData> => {
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
      throw handleResponseError(e)
    }
  },

  getGeoData: async (body: {
    q: string // City name, state code (only for the US) and ISO3166 country code divided by comma.
    limit?: number // Number of the locations in the API response
  }): Promise<TGeoCodeData[]> => {
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
      throw handleResponseError(e)
    }
  },
}
