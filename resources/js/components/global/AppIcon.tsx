type IconProps = {
  name: string;
  className?: string;
  onClick?: () => void;
};

export default function AppIcon(props: IconProps) {
  const { name, className, ...rest } = props
  return (
    <svg
      className={className}
      {...rest}
    >
      <use xlinkHref={`#icon-${name}`} />
    </svg>
  )
}