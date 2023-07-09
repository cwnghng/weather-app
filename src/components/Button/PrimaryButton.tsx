const PrimaryButton: React.FC<IProps> = (props: IProps) => {
  const { onClick, children, disabled, onSubmit, type } = props
  return (
    <button
      className="outline-none border col-span-12 w-full p-2 rounded-md bg-cyan-600 text-white font-medium cursor-pointer hover:bg-cyan-700 disabled:text-slate-200 transition-all disabled:bg-slate-400"
      type={type}
      disabled={disabled}
      onClick={onClick}
      onSubmit={onSubmit}
    >
      {children}
    </button>
  )
}

interface IProps {
  children: React.ReactNode
  onClick?: React.MouseEventHandler
  onSubmit?: React.FormEventHandler
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset' | undefined
}

export default PrimaryButton
