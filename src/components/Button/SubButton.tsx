const SubButton: React.FC<IProps> = (props: IProps) => {
  const { onClick, children, disabled, onSubmit, type } = props

  return (
    <button
      className="text-sm text-slate-500"
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

export default SubButton
