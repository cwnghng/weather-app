import { useState } from 'react'
import dayjs from 'dayjs'
import useWeather from '../../hooks/useWeather'

const Debug = () => {
  const [country, setCountry] = useState<string>('')

  const { history, getWeather, removeFromSearchHistory, clearSearchHistory } =
    useWeather()

  return (
    <div>
      <input
        value={country}
        type="text"
        onChange={(event) => setCountry(event.target.value)}
      />
      <button onClick={() => getWeather('Singapore', 'SG')}>Add history</button>

      <button onClick={() => clearSearchHistory()}>Clear all</button>

      {history.map(([locationString, timestamp]) => (
        <div>
          <div>
            {locationString}:{' '}
            {dayjs(timestamp).format('D MMM YYYY, hh:mm:ss A')}
          </div>
          <button onClick={() => removeFromSearchHistory(locationString)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  )
}

export default Debug
