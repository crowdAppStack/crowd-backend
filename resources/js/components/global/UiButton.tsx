type ButtonProps = {
  kind?: 'primary' | 'secondary';
  outlined?: boolean;
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const UiButton: React.FC<ButtonProps>  = ({ children, kind = 'primary', outlined, className, ...rest }) => {
  const color = {
    primary: 'bg-button-primary',
    secondary: 'bg-button-secondary'
  }[kind]

  const hover = !outlined ? {
    primary: 'hover:bg-button-primary-hover',
    secondary: 'hover:bg-button-secondary-hover'
  }[kind] : {
    primary: 'hover:text-typo-primary-hover hover:border-typo-primary-hover',
    secondary: 'hover:text-typo-secondary-hover hover:border-typo-secondary-hover'
  }[kind]

  const textColor = outlined ? {
    primary: 'text-typo-primary',
    secondary: 'text-typo-secondary'
  }[kind] : {
    primary: 'text-white',
    secondary: 'text-typo-primary'
  }[kind]

  const border = outlined ? `${{
    primary: 'border-typo-primary border-2',
    secondary: 'border-typo-secondary border-2'
  }[kind]}` : ''

  const buttonClass = `py-2 px-4 rounded transition-colors ${!outlined && color} ${textColor} ${border} ${hover} ${className}`
  return (
    <button
      className={buttonClass}
      {...rest}
    >
      {children}
    </button>
  )
}