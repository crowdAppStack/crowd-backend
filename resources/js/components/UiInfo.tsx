export type InfoProps = {
  variant?: 'warn' | 'success' | 'error' | 'info';
} & React.HTMLAttributes<HTMLDivElement>

export const UiInfo: React.FC<InfoProps> = ({ children, variant = 'info', className }) => {
  const infoBg = {
    success: 'bg-success text-white',
    warn: 'bg-warning text-typo-secondary',
    error: 'bg-destructive text-white',
    info: 'bg-secondary text-base',
  }[variant]

  const infoClass = `rounded-md px-2 ${infoBg} ${className} text-sm font-medium`
  return (
    <div className={infoClass}>
      {children}
    </div>
  )
}