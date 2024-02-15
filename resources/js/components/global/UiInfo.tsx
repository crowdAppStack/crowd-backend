export type InfoProps = {
  kind?: 'warn' | 'success' | 'error' | 'info';
} & React.HTMLAttributes<HTMLDivElement>

export const UiInfo: React.FC<InfoProps> = ({ children, kind = 'info', className }) => {
  const infoBg = {
    success: 'bg-success text-typo-secondary',
    warn: 'bg-warning text-typo-secondary',
    error: 'bg-error text-typo-secondary',
    info: 'bg-secondary text-typo-primary',
  }[kind]

  const infoClass = `rounded-md px-2 ${infoBg} ${className} text-sm font-medium`
  return (
    <div className={infoClass}>
      {children}
    </div>
  )
}