export type IconProps = {
  name: string;
  className?: string;
  rest: any;
};

export const UiIcon: React.FC<IconProps> = ({ name, className, ...rest }) => {
  return (
    <svg
      className={className}
      {...rest}
    >
      <use xlinkHref={`#icon-${name}`} />
    </svg>
  )
}