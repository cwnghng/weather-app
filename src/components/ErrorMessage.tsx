import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'

const ErrorMessage: React.FC<IProps> = (props: IProps) => {
  const { message } = props
  return (
    <div className="text-red-600">
      <FontAwesomeIcon className="text-xl" icon={faTriangleExclamation} />{' '}
      {message}
    </div>
  )
}

interface IProps {
  message: string
}

export default ErrorMessage
