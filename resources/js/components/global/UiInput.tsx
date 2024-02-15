export type UiInputProps = {
  kind?: 'primary' | 'secondary' | 'tertiary';
  outlined?: boolean;
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const UiInput: React.FC<UiInputProps> = ({ kind = 'primary', outlined,  className, ...rest }) => {
  const inputBg = {
    primary: 'bg-primary text-typo-secondary placeholder:text-typo-secondary placeholder:opacity-50 placeholder:font-normal font-semibold',
    secondary: 'bg-secondary text-typo-primary placeholder:text-typo-primary placeholder:opacity-50 placeholder:font-normal font-semibold',
    tertiary: 'bg-tertiary text-typo-secondary placeholder:text-typo-secondary placeholder:opacity-50 placeholder:font-normal font-semibold',
  }[kind]

  const border = outlined ? {
    primary: 'border-2 border-solid border-typo-secondary',
    secondary: 'border-2 border-solid border-primary',
    tertiary: 'border-2 border-solid border-primary',
  }[kind] : ''

  const inputClass = `appearance-none outline-none ${inputBg} ${border} ${className} px-2 py-1 rounded-md font-light`
  return (
    <input
      className={inputClass}
      {...rest}
    />
  )
}