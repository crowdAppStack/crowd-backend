import React from "react"

export type IconProps = {
  name: string;
  className?: string;
  rest: any;
};

export const AppIcon: React.FC<IconProps> = (props) => {
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