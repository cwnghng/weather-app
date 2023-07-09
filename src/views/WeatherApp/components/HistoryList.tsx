import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMagnifyingGlass,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons'
import HorizontalDivider from '../../../components/HorizontalDivider'
import dayjs from 'dayjs'
import SectionHeader from './SectionHeader'

const HistoryList: React.FC<IProps> = (props: IProps) => {
  const {
    history,
    handleSearchAgain,
    removeFromSearchHistory,
    clearSearchHistory,
  } = props

  return (
    <div>
      <SectionHeader title="Search History" />

      <HorizontalDivider />

      {history.slice(0, 10).map(([locationString, timestamp], index) => (
        <>
          <div
            className="px-6 py-4 flex justify-between items-center"
            key={`history-item-${index}`}
          >
            <div className="font-medium w-2/3">
              <div>{locationString}</div>
              <div className="text-sm text-slate-500">
                {dayjs(timestamp).format('hh:mm:ss A')}
              </div>
            </div>
            <div>
              <button
                className="rounded-full text-xl p-2 text-slate-700"
                onClick={() => handleSearchAgain(locationString)}
                aria-label={`Search ${locationString}`}
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
              <button
                className="rounded-full text-xl p-2 text-slate-400 ml-2"
                onClick={() => removeFromSearchHistory(locationString)}
                aria-label={`Delete ${locationString} from history`}
              >
                <FontAwesomeIcon icon={faTrashCan} />
              </button>
            </div>
          </div>
          <HorizontalDivider />
        </>
      ))}
      <div className="flex justify-between text-sm text-slate-500 px-6 py-3">
        <div>Showing the latest 10 searches</div>
        <button onClick={() => clearSearchHistory()}>Clear history</button>
      </div>
    </div>
  )
}

interface IProps {
  history: [locationString: string, timestamp: number][]
  handleSearchAgain: Function
  removeFromSearchHistory: Function
  clearSearchHistory: Function
}

export default HistoryList
