import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-common-types'

const IconButton: React.FC<IProps> = (props: IProps) => {
  const {
    icon,
    variant = 'primary',
    size = 'md',
    onClick,
    disabled,
    onSubmit,
    type,
    ariaLabel,
  } = props

  const className = `rounded-full text-${size} p-2 ${
    variant === 'primary' ? 'text-slate-700' : 'text-slate-400'
  }`

  return (
    <button
      className={className}
      onClick={onClick}
      aria-label={ariaLabel}
      type={type}
      onSubmit={onSubmit}
      disabled={disabled}
    >
      <FontAwesomeIcon icon={icon} />
    </button>
  )
}

interface IProps {
  icon: IconDefinition
  variant?: 'priamry' | 'secondary'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  onClick?: React.MouseEventHandler
  onSubmit?: React.FormEventHandler
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset' | undefined
  ariaLabel?: string
}

export default IconButton
