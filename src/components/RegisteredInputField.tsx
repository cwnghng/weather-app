import { UseFormRegisterReturn } from 'react-hook-form'

const RegisteredInputField: React.FC<IProps> = (props: IProps) => {
  const { placeholder, type = 'text', register } = props

  return (
    <input
      className="col-span-12 sm:col-span-6 outline-none focus:border-slate-400 border-2 border-slate-200 w-full p-2 rounded-md transition-all"
      type={type}
      placeholder={placeholder}
      {...register}
    />
  )
}

interface IProps {
  placeholder?: string
  type?: 'text' | 'number'
  register: UseFormRegisterReturn<any>
}

export default RegisteredInputField
