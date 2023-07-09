import {
  faMagnifyingGlass,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons'
import HorizontalDivider from '../../../components/HorizontalDivider'
import dayjs from 'dayjs'
import SectionHeader from './SectionHeader'
import IconButton from '../../../components/Button/IconButton'

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
              <IconButton
                icon={faMagnifyingGlass}
                size="xl"
                onClick={() => handleSearchAgain(locationString)}
                aria-label={`Search ${locationString}`}
              />
              <IconButton
                icon={faTrashCan}
                variant="secondary"
                size="xl"
                onClick={() => removeFromSearchHistory(locationString)}
                ariaLabel={`Delete ${locationString} from history`}
              />
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
