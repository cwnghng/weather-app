import { Provider as ReduxProvider } from 'react-redux'
import store from './store'

const Providers: React.FC<IProps> = ({ children }) => (
  <ReduxProvider store={store}>{children}</ReduxProvider>
)

interface IProps {
  children: React.ReactNode
}

export default Providers
