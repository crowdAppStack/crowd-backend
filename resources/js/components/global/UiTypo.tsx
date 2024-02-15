export type UiTypoProps = {
  kind?: 'h1'|'h2'|'h3'|'h4'|'h5'|'h6'|'p'|'span'
  color?: 'primary'|'secondary'
} & React.HTMLAttributes<HTMLParagraphElement>

export const UiTypo: React.FC<UiTypoProps> = ({ children, kind = 'p', color = 'primary', className = '' }) => {
  const Tag = kind
  
  const typoSize = {
    h1: 'text-4xl md:text-5xl lg:text-6xl font-bold',
    h2: 'text-3xl md:text-4xl lg:text-5xl font-bold',
    h3: 'text-2xl md:text-3xl lg:text-4xl font-bold',
    h4: 'text-xl md:text-2xl lg:text-3xl font-semibold',
    h5: 'text-lg md:text-xl lg:text-2xl font-semibold',
    h6: 'text-md md:text-lg lg:text-xl font-semibold',
    p: 'text-base',
    span: 'text-base',
  }[kind]

  const typeColor = {
    primary: 'text-typo-primary',
    secondary: 'text-typo-secondary',
  }[color]

  const typoClass = `${typoSize} ${typeColor} ${className}`

  return <Tag className={typoClass}>{children}</Tag>
}