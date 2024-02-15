export type UiBoxProps = {
  kind?: 'primary' | 'secondary' | 'tertiary';
  outlined?: boolean;
  shadow?: boolean;
} & React.HTMLAttributes<HTMLDivElement>

export const UiBox: React.FC<UiBoxProps> = ({ children, kind = 'primary', outlined, shadow, className }) => {
  const boxBg = !outlined && {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    tertiary: 'bg-tertiary',
  }[kind]

  const border = outlined ? 'border-2 border-solid border-current' : ''

  const shadowClass = shadow ? `shadow-md ${{
    primary: 'shadow-primary',
    secondary: 'shadow-secondary',
    tertiary: 'shadow-tertiary',
  }[kind]}` : ''

  const boxClass = `${boxBg} rounded-md p-2 ${className} ${border} ${shadowClass}`
  return (
    <div className={boxClass}>
      {children}
    </div>
  )
}