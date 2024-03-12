export type UiBoxProps = {
  variant?: 'primary' | 'secondary' | 'tertiary';
  outlined?: boolean;
  shadow?: boolean;
} & React.HTMLAttributes<HTMLDivElement>

export const UiBox: React.FC<UiBoxProps> = ({ children, variant = 'primary', outlined, shadow, className }) => {
  const boxBg = !outlined && {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    tertiary: 'bg-primary-foreground',
  }[variant]

  const border = outlined ? 'border-2 border-solid border-current' : ''

  const shadowClass = shadow ? `shadow-md ${{
    primary: 'shadow-primary',
    secondary: 'shadow-secondary',
    tertiary: 'shadow-secondary-foreground',
  }[variant]}` : ''

  const boxClass = `${boxBg} rounded-md p-2 ${className} ${border} ${shadowClass}`
  return (
    <div className={boxClass}>
      {children}
    </div>
  )
}