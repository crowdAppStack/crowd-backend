type GridProps = {
  md?: number;
  lg?: number;
  xl?: number;
} & React.HTMLAttributes<HTMLDivElement>

export const LayoutGrid: React.FC<GridProps> = ({ md = 2, lg = 3, xl = 4, children, className }) => {
  const mdCol = {
    1: 'md:grid-cols-1',
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
  }[md]

  const lgCol = {
    1: 'lg:grid-cols-1',
    2: 'lg:grid-cols-2',
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4',
  }[lg]

  const xlCol = {
    1: 'xl:grid-cols-1',
    2: 'xl:grid-cols-2',
    3: 'xl:grid-cols-3',
    4: 'xl:grid-cols-4',
  }[xl]

  const gapClass = 'gap-4 lg:gap-8'

  const gridClass = `grid grid-col-1 ${mdCol} ${lgCol} ${xlCol} ${gapClass} ${className}`

  return (
    <div className={gridClass}>
      {children}
    </div>
  )
}