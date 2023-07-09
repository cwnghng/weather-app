import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTemperatureThreeQuarters,
  faDroplet,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons'
import dayjs from 'dayjs'
import HorizontalDivider from '../../../components/HorizontalDivider'
import useIsMobile from '../../../hooks/useIsMobile'

const DetailCard: React.FC<IProps> = (props: IProps) => {
  const { weather, isLoading } = props

  const isMobile = useIsMobile()

  return (
    <>
      <div className="flex justify-between p-6 transition-all h-fit">
        {!isLoading ? (
          <>
            <div className="flex">
              {!isMobile && (
                <div className="mr-6">
                  <img src={weather.imageUrl} alt="weather" />
                </div>
              )}
              <div className="w-full">
                <div className="text-slate-500 text-sm font-medium">
                  WEATHER
                </div>
                <div className="font-bold text-2xl">
                  {weather.weather[0].main},
                  <span className="font-bold text-sm text-slate-500">
                    &nbsp;{weather.weather[0].description}
                  </span>
                </div>
                <div className="font-bold">
                  <span className="text-2xl">
                    <FontAwesomeIcon
                      className="w-4"
                      icon={faTemperatureThreeQuarters}
                    />
                    &nbsp;
                    {weather.main.temp_min}&nbsp;-&nbsp;{weather.main.temp_max}
                  </span>
                  &nbsp;&deg;C
                </div>
                <div className="font-bold">
                  <span className="text-2xl">
                    <FontAwesomeIcon className="w-4" icon={faDroplet} />
                    &nbsp;
                    {weather.main.humidity}
                  </span>
                  &nbsp; %
                </div>
              </div>
            </div>

            <div className="w-1/3 text-end text-sm font-medium text-slate-500">
              <div className="">
                {weather.cityName}, {weather.countryCode}
              </div>
              <div>{dayjs(weather.timestamp).format('D MMM YYYY')}</div>
              <div>{dayjs(weather.timestamp).format('hh:mm:ss A')}</div>
            </div>
          </>
        ) : (
          <div className="flex justify-center w-full">
            <FontAwesomeIcon
              className="text-6xl text-slate-400"
              icon={faSpinner}
              spin
            />
          </div>
        )}
      </div>
      <HorizontalDivider />
    </>
  )
}

interface IProps {
  weather: any
  isLoading: boolean
}

export default DetailCard
