import PrimaryButton from '../../../components/Button/PrimaryButton'
import RegisteredInputField from '../../../components/RegisteredInputField'
import ErrorMessage from '../../../components/ErrorMessage'
import SubButton from '../../../components/Button/SubButton'

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
      <PrimaryButton disabled={disabled} type="submit">
        Find out the weather!
      </PrimaryButton>
      <div className="col-span-12 flex w-full justify-between">
        <div>{error && <ErrorMessage message={error.message} />}</div>
        <SubButton onClick={() => reset()}>Clear</SubButton>
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
