export type UiInputProps = {
  variant?: 'primary' | 'secondary';
  outlined?: boolean;
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const UiInput: React.FC<UiInputProps> = ({ variant = 'primary', outlined,  className, ...rest }) => {
  const inputBg = {
    primary: 'bg-primary text-white placeholder:text-white placeholder:opacity-50 placeholder:font-normal font-semibold',
    secondary: 'bg-secondary text-base placeholder:text-typo-primary placeholder:opacity-50 placeholder:font-normal font-semibold',
  }[variant]

  const border = outlined ? {
    primary: 'border-2 border-solid border-secondary',
    secondary: 'border-2 border-solid border-primary',
  }[variant] : ''

  const inputClass = `appearance-none outline-none ${inputBg} ${border} ${className} px-2 py-1 rounded-md font-light`
  return (
    <input
      className={inputClass}
      {...rest}
    />
  )
}