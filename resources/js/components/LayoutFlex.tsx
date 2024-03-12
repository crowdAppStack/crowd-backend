export type LayoutFlexProps = {
  direction?: 'row' | 'column';
  justify?: 'start' | 'end' | 'center' | 'between' | 'around';
  align?: 'start' | 'end' | 'center' | 'stretch';
  wrap?: boolean;
  gap?: number;
} & React.HTMLAttributes<HTMLDivElement>

export const LayoutFlex: React.FC<LayoutFlexProps> = ({
  direction = 'row',
  justify = 'start',
  align = 'start',
  wrap,
  gap = 0,
  children,
  className
}) => {

  const flexJustify = {
    'start': 'justify-start',
    'end': 'justify-end',
    'center': 'justify-center',
    'between': 'justify-between',
    'around': 'justify-around',
  }[justify]

  const flexAlign = {
    'start': 'items-start',
    'end': 'items-end',
    'center': 'items-center',
    'stretch': 'items-stretch',
  }[align]

  const flexDirection = {
    'row': 'flex-row',
    'column': 'flex-col',
  }[direction]

  const flexWrap = wrap ? 'flex-wrap' : 'flex-nowrap'

  const flexGap = {
    0: 'gap-0',
    1: 'gap-1',
    2: 'gap-2',
    3: 'gap-3',
    4: 'gap-4',
    5: 'gap-5',
  }[gap]
  
  const flexContainerClass = `flex ${flexJustify} ${flexAlign} ${flexWrap} ${flexDirection} ${flexGap} ${className}`

  return <div className={flexContainerClass}>{children}</div>
}