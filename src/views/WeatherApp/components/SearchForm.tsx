import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import Button from '../../../components/Button'
import RegisteredInputField from '../../../components/RegisteredInputField'

const SearchForm: React.FC<IProps> = (props: IProps) => {
  const { onSubmit, register, error, reset, disabled } = props
  return (
    <form className="grid grid-cols-12 gap-4 p-6" onSubmit={onSubmit}>
      <RegisteredInputField
        placeholder="City"
        register={register('city', {
          required: true,
        })}
      />
      <RegisteredInputField
        placeholder="Country"
        register={register('country', {
          required: true,
        })}
      />
      <Button disabled={disabled}>Find out the weather!</Button>
      <div className="col-span-12 flex w-full justify-between">
        <div className="text-red-600">
          {error && (
            <>
              <FontAwesomeIcon
                className="text-xl"
                icon={faTriangleExclamation}
              />{' '}
              {error.message}
            </>
          )}
        </div>
        <button
          className="justify-self-end text-sm text-slate-500"
          onClick={() => reset()}
        >
          Clear
        </button>
      </div>
    </form>
  )
}

interface IProps {
  onSubmit: React.FormEventHandler
  register: Function
  error?: Error
  reset: Function
  disabled: boolean
}

export default SearchForm
